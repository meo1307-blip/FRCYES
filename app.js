const STORAGE_KEY = "frcyes_viva_stats_v1";
const allCases = window.FRCYES_CASES || [];

const els = {
  modeSelect: document.getElementById("modeSelect"),
  topicSelect: document.getElementById("topicSelect"),
  diagnosisSelect: document.getElementById("diagnosisSelect"),
  stageTitle: document.getElementById("stageTitle"),
  caseTopicPill: document.getElementById("caseTopicPill"),
  promptBox: document.getElementById("promptBox"),
  stageCounter: document.getElementById("stageCounter"),
  stageProgressBar: document.getElementById("stageProgressBar"),
  prevStageBtn: document.getElementById("prevStageBtn"),
  nextStageBtn: document.getElementById("nextStageBtn"),
  differentialInput: document.getElementById("differentialInput"),
  addDifferentialBtn: document.getElementById("addDifferentialBtn"),
  differentialChips: document.getElementById("differentialChips"),
  checkDifferentialsBtn: document.getElementById("checkDifferentialsBtn"),
  differentialFeedback: document.getElementById("differentialFeedback"),
  submitDiagnosisBtn: document.getElementById("submitDiagnosisBtn"),
  diagnosisFeedback: document.getElementById("diagnosisFeedback"),
  managementBox: document.getElementById("managementBox"),
  compareBox: document.getElementById("compareBox"),
  takeawaysBox: document.getElementById("takeawaysBox"),
  newCaseBtn: document.getElementById("newCaseBtn"),
  casesDone: document.getElementById("casesDone"),
  correctDx: document.getElementById("correctDx")
};

let appState = {
  mode: "Practice",
  topic: "All topics",
  caseData: null,
  stageIndex: 0,
  differentials: [],
  diagnosisSubmitted: false,
  stats: loadStats()
};

function normalize(str) {
  return str.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[m][n];
}

function similarityScore(a, b) {
  const dist = levenshtein(normalize(a), normalize(b));
  return 1 - dist / Math.max(a.length, b.length);
}

/* ===========================
   🔥 FIXED MATCH FUNCTION
   =========================== */
function matchDifferential(input, ideals) {
  const norm = normalize(input);

  // 1. Exact + alias
  for (const d of ideals) {
    if (normalize(d.name) === norm) return d;
    if (d.aliases && d.aliases.some(a => normalize(a) === norm)) return d;
  }

  // 2. WORD MATCH (NEW)
  const inputWords = norm.split(" ").filter(w => w.length > 2);

  let bestWordMatch = null;
  let bestWordScore = 0;

  for (const d of ideals) {
    const names = [d.name, ...(d.aliases || [])];

    for (const name of names) {
      const nameWords = normalize(name).split(" ");

      const overlap = inputWords.filter(w => nameWords.includes(w)).length;
      const score = overlap / nameWords.length;

      if (score > bestWordScore) {
        bestWordScore = score;
        bestWordMatch = d;
      }
    }
  }

  if (bestWordScore >= 0.6) {
    return bestWordMatch;
  }

  // 3. Fuzzy fallback
  let best = null, bestScore = 0;

  for (const d of ideals) {
    const names = [d.name, ...(d.aliases || [])];

    for (const n of names) {
      const score = similarityScore(input, n);
      if (score > bestScore) {
        bestScore = score;
        best = d;
      }
    }
  }

  return bestScore > 0.72 ? best : null;
}

function loadStats() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { casesDone: 0, correctDx: 0 };
  } catch {
    return { casesDone: 0, correctDx: 0 };
  }
}

function saveStats() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState.stats));
}

function titleCase(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}

function normalize(text) {
  return (text || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, " ");
}

function buildSelect(selectEl, options, value) {
  selectEl.innerHTML = "";
  options.forEach(option => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option;
    if (option === value) opt.selected = true;
    selectEl.appendChild(opt);
  });
}

function getTopics() {
  return ["All topics", ...new Set(allCases.map(c => c.topic))];
}

function getCasePool() {
  if (appState.topic === "All topics") return allCases;
  return allCases.filter(c => c.topic === appState.topic);
}

function getDailyCase(pool) {
  const today = new Date();
  const seed = Number(`${today.getUTCFullYear()}${today.getUTCMonth()+1}${today.getUTCDate()}`);
  return pool[seed % pool.length];
}

function chooseCase() {
  const pool = getCasePool();
  if (!pool.length) return allCases[0];
  if (appState.mode === "Daily") return getDailyCase(pool);
  return pool[Math.floor(Math.random() * pool.length)];
}

function resetCase() {
  appState.caseData = chooseCase();
  appState.stageIndex = 0;
  appState.differentials = [];
  appState.diagnosisSubmitted = false;
  els.differentialInput.value = "";
  els.differentialFeedback.classList.add("hidden");
  els.diagnosisFeedback.classList.add("hidden");
  render();
}

function renderStats() {
  els.casesDone.textContent = appState.stats.casesDone;
  els.correctDx.textContent = appState.stats.correctDx;
}

function renderDifferentialChips() {
  els.differentialChips.innerHTML = "";
  appState.differentials.forEach((diff, idx) => {
    const chip = document.createElement("div");
    chip.className = "chip";
    chip.innerHTML = `<span>${diff}</span>`;
    const x = document.createElement("button");
    x.type = "button";
    x.textContent = "×";
    x.addEventListener("click", () => {
      appState.differentials.splice(idx, 1);
      renderDifferentialChips();
    });
    chip.appendChild(x);
    els.differentialChips.appendChild(chip);
  });
}

function renderManagement() {
  const m = appState.caseData.management;
  els.managementBox.innerHTML = [
    cardHtml("Immediate", m.immediate),
    cardHtml("Definitive", m.definitive),
    cardHtml("Complications", m.complications)
  ].join("");
}

function cardHtml(title, items) {
  return `<div class="teach-card"><h4>${title}</h4><ul>${items.map(i => `<li>${i}</li>`).join("")}</ul></div>`;
}

function renderCompare() {
  if (!appState.diagnosisSubmitted) {
    els.compareBox.className = "compare-box muted";
    els.compareBox.textContent = "Submit the diagnosis to see the comparison table.";
    return;
  }
  const compare = appState.caseData.compare;
  const html = `
    <table class="compare-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>${appState.caseData.diagnosis}</th>
          <th>${compare.against}</th>
        </tr>
      </thead>
      <tbody>
        ${compare.rows.map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("")}
      </tbody>
    </table>
  `;
  els.compareBox.className = "compare-box";
  els.compareBox.innerHTML = html;
}

function renderTakeaways() {
  if (!appState.diagnosisSubmitted) {
    els.takeawaysBox.className = "stacked-boxes muted";
    els.takeawaysBox.textContent = "Complete the case to reveal the teaching points.";
    return;
  }
  els.takeawaysBox.className = "stacked-boxes";
  els.takeawaysBox.innerHTML = cardHtml("Key takeaways", appState.caseData.takeaways);
}

function renderDiagnosisOptions() {
  const dxs = [...new Set(allCases.map(c => c.diagnosis))].sort();
  buildSelect(els.diagnosisSelect, ["Select diagnosis", ...dxs], "Select diagnosis");
}

function render() {
  const currentCase = appState.caseData;
  const totalStages = currentCase.stages.length;
  els.stageTitle.textContent = currentCase.stageTitles[appState.stageIndex];
  els.caseTopicPill.textContent = currentCase.topic;
  els.promptBox.textContent = currentCase.stages.slice(0, appState.stageIndex + 1).join("\n\n");
  els.stageCounter.textContent = `Stage ${appState.stageIndex + 1} of ${totalStages}`;
  els.stageProgressBar.style.width = `${((appState.stageIndex + 1) / totalStages) * 100}%`;
  els.prevStageBtn.disabled = appState.stageIndex === 0;
  els.nextStageBtn.disabled = appState.stageIndex === totalStages - 1;
  renderDifferentialChips();
  renderManagement();
  renderCompare();
  renderTakeaways();
  renderStats();
}

function addDifferential() {
  const value = els.differentialInput.value.trim();
  if (!value) return;
  if (appState.differentials.length >= 3) return;
  if (appState.differentials.some(d => normalize(d) === normalize(value))) return;
  appState.differentials.push(value);
  els.differentialInput.value = "";
  renderDifferentialChips();
}

function checkDifferentials() {
  const ideals = appState.caseData.idealDifferentials;
  if (!appState.differentials.length) return;

  const blocks = appState.differentials.map(diff => {
    const matched = matchDifferential(diff, ideals);

    const displayName = matched ? matched.name : diff;

    if (matched?.weight === "strong") {
      return `<div class="feedback-item feedback-good"><strong>${displayName}</strong><br>${matched.why}</div>`;
    }
    if (matched?.weight === "partial") {
      return `<div class="feedback-item feedback-warn"><strong>${displayName}</strong><br>${matched.why}</div>`;
    }
    return `<div class="feedback-item feedback-bad"><strong>${displayName}</strong><br>Less likely here. Re-focus on the discriminator clues in the presentation and imaging.</div>`;
  });

  els.differentialFeedback.classList.remove("hidden");
  els.differentialFeedback.innerHTML = `<strong>Feedback</strong>${blocks.join("")}`;
}

function submitDiagnosis() {
  const chosen = els.diagnosisSelect.value;
  if (chosen === "Select diagnosis") return;
  const correct = normalize(chosen) === normalize(appState.caseData.diagnosis);
  appState.diagnosisSubmitted = true;
  appState.stats.casesDone += 1;
  if (correct) appState.stats.correctDx += 1;
  saveStats();
  els.diagnosisFeedback.classList.remove("hidden");
  els.diagnosisFeedback.innerHTML = correct
    ? `<div class="feedback-item feedback-good"><strong>Correct.</strong><br>${appState.caseData.diagnosis} is the best diagnosis. Use the management and compare sections to rehearse a full viva answer.</div>`
    : `<div class="feedback-item feedback-bad"><strong>Not quite.</strong><br>The best diagnosis is <strong>${appState.caseData.diagnosis}</strong>. Review the compare table and takeaways below.</div>`;
  renderCompare();
  renderTakeaways();
  renderStats();
}

function init() {
  buildSelect(els.modeSelect, ["Practice", "Daily"], appState.mode);
  buildSelect(els.topicSelect, getTopics(), appState.topic);
  renderDiagnosisOptions();
  resetCase();

  els.modeSelect.addEventListener("change", e => {
    appState.mode = e.target.value;
    resetCase();
  });
  els.topicSelect.addEventListener("change", e => {
    appState.topic = e.target.value;
    resetCase();
  });
  els.newCaseBtn.addEventListener("click", resetCase);
  els.prevStageBtn.addEventListener("click", () => {
    if (appState.stageIndex > 0) {
      appState.stageIndex -= 1;
      render();
    }
  });
  els.nextStageBtn.addEventListener("click", () => {
    if (appState.stageIndex < appState.caseData.stages.length - 1) {
      appState.stageIndex += 1;
      render();
    }
  });
  els.addDifferentialBtn.addEventListener("click", addDifferential);
  els.differentialInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      e.preventDefault();
      addDifferential();
    }
  });
  els.checkDifferentialsBtn.addEventListener("click", checkDifferentials);
  els.submitDiagnosisBtn.addEventListener("click", submitDiagnosis);
}

init();
