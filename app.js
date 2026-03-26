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
  return (str || "").toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
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
   🔥 SMART MATCHING ENGINE
   =========================== */
function matchDifferential(input, ideals) {
  const norm = normalize(input);

  // 1. Exact + alias
  for (const d of ideals) {
    if (normalize(d.name) === norm) return d;
    if (d.aliases && d.aliases.some(a => normalize(a) === norm)) return d;
  }

  // 2. WORD MATCH (IMPROVED)
  const inputWords = norm.split(" ").filter(w => w.length > 2);

  // Prevent nonsense matches
  if (inputWords.length <= 1) return null;

  let bestWordMatch = null;
  let bestWordScore = 0;

  for (const d of ideals) {
    const names = [d.name, ...(d.aliases || [])];

    for (const name of names) {
      const nameWords = normalize(name).split(" ");

      const overlap = inputWords.filter(w => nameWords.includes(w)).length;

      // 🔑 KEY CHANGE HERE
      const score = overlap / inputWords.length;

      if (score > bestWordScore) {
        bestWordScore = score;
        bestWordMatch = d;
      }
    }
  }

  if (bestWordScore >= 0.6) {
    return bestWordMatch;
  }

  // 3. Fuzzy fallback (typos etc)
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

function chooseCase() {
  const pool = getCasePool();
  if (!pool.length) return allCases[0];
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

function renderDifferentialChips() {
  els.differentialChips.innerHTML = "";
  appState.differentials.forEach((diff, idx) => {
    const chip = document.createElement("div");
    chip.className = "chip";
    chip.innerHTML = `<span>${diff}</span>`;
    const x = document.createElement("button");
    x.textContent = "×";
    x.onclick = () => {
      appState.differentials.splice(idx, 1);
      renderDifferentialChips();
    };
    chip.appendChild(x);
    els.differentialChips.appendChild(chip);
  });
}

function render() {
  const c = appState.caseData;
  els.promptBox.textContent = c.stages.slice(0, appState.stageIndex + 1).join("\n\n");
  renderDifferentialChips();
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

  const blocks = appState.differentials.map(diff => {
    const matched = matchDifferential(diff, ideals);
    const displayName = matched ? matched.name : diff;

    if (matched?.weight === "strong") {
      return `<div class="feedback-item feedback-good"><strong>${displayName}</strong><br>${matched.why}</div>`;
    }
    if (matched?.weight === "partial") {
      return `<div class="feedback-item feedback-warn"><strong>${displayName}</strong><br>${matched.why}</div>`;
    }
    return `<div class="feedback-item feedback-bad"><strong>${displayName}</strong><br>Less likely here.</div>`;
  });

  els.differentialFeedback.classList.remove("hidden");
  els.differentialFeedback.innerHTML = `<strong>Feedback</strong>${blocks.join("")}`;
}

function init() {
  buildSelect(els.topicSelect, getTopics(), appState.topic);
  resetCase();

  els.addDifferentialBtn.onclick = addDifferential;
  els.checkDifferentialsBtn.onclick = checkDifferentials;
}

init();
