const AGE_ORDER = ["Infant", "Child", "Adolescent", "Young adult", "Adult", "Older adult"];
const ACUITY_ORDER = ["Acute", "Subacute", "Recurrent", "Chronic"];

const state = {
  target: null,
  attempts: 0,
  maxAttempts: 8,
  gameOver: false,
  mode: "practice",
  topic: "All",
  pool: [...CONDITIONS]
};

const els = {
  guessInput: document.getElementById("guessInput"),
  datalist: document.getElementById("conditionsList"),
  submitGuessBtn: document.getElementById("submitGuessBtn"),
  newGameBtn: document.getElementById("newGameBtn"),
  resultsBody: document.getElementById("resultsBody"),
  attemptsRemaining: document.getElementById("attemptsRemaining"),
  hintText: document.getElementById("hintText"),
  vivaHints: document.getElementById("vivaHints"),
  resultCard: document.getElementById("resultCard"),
  resultTitle: document.getElementById("resultTitle"),
  resultText: document.getElementById("resultText"),
  answerMeta: document.getElementById("answerMeta"),
  howToBtn: document.getElementById("howToBtn"),
  howToDialog: document.getElementById("howToDialog"),
  closeHowToBtn: document.getElementById("closeHowToBtn"),
  modeSelect: document.getElementById("modeSelect"),
  topicSelect: document.getElementById("topicSelect"),
  streakValue: document.getElementById("streakValue"),
  playedValue: document.getElementById("playedValue"),
  wonValue: document.getElementById("wonValue"),
  bankSizeValue: document.getElementById("bankSizeValue"),
  copyShareBtn: document.getElementById("copyShareBtn")
};

function init() {
  populateTopics();
  populateDatalist(CONDITIONS);
  bindEvents();
  loadStats();
  els.bankSizeValue.textContent = CONDITIONS.length;
  startGame();
}

function populateTopics() {
  const topics = [...new Set(CONDITIONS.map(c => c.subspecialty))].sort((a, b) => a.localeCompare(b));
  topics.forEach(topic => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = topic;
    els.topicSelect.appendChild(option);
  });
}

function populateDatalist(list) {
  els.datalist.innerHTML = list.map(c => `<option value="${c.name.replace(/"/g, '&quot;')}"></option>`).join("");
}

function bindEvents() {
  els.submitGuessBtn.addEventListener("click", submitGuess);
  els.newGameBtn.addEventListener("click", startGame);
  els.howToBtn.addEventListener("click", () => els.howToDialog.showModal());
  els.closeHowToBtn.addEventListener("click", () => els.howToDialog.close());
  els.modeSelect.addEventListener("change", () => {
    state.mode = els.modeSelect.value;
    syncPoolAndInputs();
    startGame();
  });
  els.topicSelect.addEventListener("change", () => {
    state.topic = els.topicSelect.value;
    syncPoolAndInputs();
    startGame();
  });
  els.guessInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") submitGuess();
  });
  els.copyShareBtn.addEventListener("click", copyResult);
}

function syncPoolAndInputs() {
  state.mode = els.modeSelect.value;
  state.topic = els.topicSelect.value;
  state.pool = state.mode === "daily" || state.topic === "All"
    ? [...CONDITIONS]
    : CONDITIONS.filter(c => c.subspecialty === state.topic);

  if (!state.pool.length) state.pool = [...CONDITIONS];
  populateDatalist(state.pool);
  els.topicSelect.disabled = state.mode === "daily";
}

function startGame() {
  syncPoolAndInputs();
  state.target = state.mode === "daily" ? getDailyCondition() : randomCondition(state.pool);
  state.attempts = 0;
  state.gameOver = false;
  els.resultsBody.innerHTML = "";
  els.guessInput.value = "";
  els.attemptsRemaining.textContent = String(state.maxAttempts);
  els.resultCard.classList.add("hidden");
  els.hintText.textContent = buildHint(state.target);
  renderVivaHints();
}

function randomCondition(pool) {
  return pool[Math.floor(Math.random() * pool.length)];
}

function getDailyCondition() {
  const dailyPool = [...CONDITIONS];
  const today = new Date();
  const seed = `${today.getUTCFullYear()}-${today.getUTCMonth() + 1}-${today.getUTCDate()}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i);
    hash |= 0;
  }
  return dailyPool[Math.abs(hash) % dailyPool.length];
}

function buildHint(target) {
  return `Target profile: ${target.subspecialty} / ${target.region}. Think exam-style first-line investigation and definitive management.`;
}

function renderVivaHints() {
  els.vivaHints.innerHTML = "";
  const hint1 = document.createElement("li");
  hint1.textContent = state.attempts >= 3 ? state.target.hints[0] : "Hint unlocks after 3 guesses.";
  const hint2 = document.createElement("li");
  hint2.textContent = state.attempts >= 6 ? state.target.hints[1] : "Second hint unlocks after 6 guesses.";
  els.vivaHints.append(hint1, hint2);
}

function submitGuess() {
  if (state.gameOver) return;
  const value = els.guessInput.value.trim();
  const guess = state.pool.find(c => c.name.toLowerCase() === value.toLowerCase()) || CONDITIONS.find(c => c.name.toLowerCase() === value.toLowerCase());

  if (!guess) {
    alert("Choose a diagnosis from the list.");
    return;
  }

  if ([...els.resultsBody.querySelectorAll("tr")].some(row => row.dataset.name === guess.name)) {
    alert("You already used that guess.");
    return;
  }

  state.attempts += 1;
  els.attemptsRemaining.textContent = String(state.maxAttempts - state.attempts);
  renderRow(guess, state.target);
  els.guessInput.value = "";
  renderVivaHints();

  if (guess.name === state.target.name) {
    endGame(true);
    return;
  }

  if (state.attempts >= state.maxAttempts) {
    endGame(false);
  }
}

function compareField(field, guessValue, targetValue) {
  if (guessValue === targetValue) {
    return { className: "cell-exact", text: guessValue };
  }

  if (field === "age") {
    const g = AGE_ORDER.indexOf(guessValue);
    const t = AGE_ORDER.indexOf(targetValue);
    return {
      className: g < t ? "cell-higher" : "cell-lower",
      text: `${guessValue} ${g < t ? "↑" : "↓"}`
    };
  }

  if (field === "acuity") {
    const g = ACUITY_ORDER.indexOf(guessValue);
    const t = ACUITY_ORDER.indexOf(targetValue);
    return {
      className: g < t ? "cell-higher" : "cell-lower",
      text: `${guessValue} ${g < t ? "↑" : "↓"}`
    };
  }

  const partialMap = PARTIAL_GROUPS[field] || {};
  if ((partialMap[guessValue] || []).includes(targetValue) || (partialMap[targetValue] || []).includes(guessValue)) {
    return { className: "cell-partial", text: guessValue };
  }

  return { className: "cell-wrong", text: guessValue };
}

function renderRow(guess, target) {
  const tr = document.createElement("tr");
  tr.dataset.name = guess.name;

  const fields = [
    { key: "name", label: guess.name, forcedClass: guess.name === target.name ? "cell-exact" : "cell-wrong" },
    { key: "subspecialty" },
    { key: "region" },
    { key: "pathology" },
    { key: "age" },
    { key: "acuity" },
    { key: "investigation" },
    { key: "management" }
  ];

  fields.forEach((field) => {
    const td = document.createElement("td");
    if (field.key === "name") {
      td.textContent = field.label;
      td.className = field.forcedClass;
    } else {
      const result = compareField(field.key, guess[field.key], target[field.key]);
      td.textContent = result.text;
      td.className = result.className;
    }
    tr.appendChild(td);
  });

  els.resultsBody.prepend(tr);
}

function endGame(win) {
  state.gameOver = true;
  updateStats(win);
  els.resultCard.classList.remove("hidden");
  els.resultTitle.textContent = win ? "Correct" : "Out of guesses";
  els.resultText.textContent = win
    ? `You identified ${state.target.name} in ${state.attempts} guess${state.attempts === 1 ? "" : "es"}.`
    : `The answer was ${state.target.name}.`;
  els.answerMeta.innerHTML = `
    <div><strong>Topic:</strong> ${state.target.subspecialty}</div>
    <div><strong>Region:</strong> ${state.target.region}</div>
    <div><strong>Pathology:</strong> ${state.target.pathology}</div>
    <div><strong>Age:</strong> ${state.target.age}</div>
    <div><strong>Acuity:</strong> ${state.target.acuity}</div>
    <div><strong>Investigation:</strong> ${state.target.investigation}</div>
    <div><strong>Management:</strong> ${state.target.management}</div>
  `;
}

function buildShareText() {
  const title = state.mode === "daily" ? "OrthoGuess FRCS Daily" : "OrthoGuess FRCS";
  const score = state.gameOver && state.target ? `${state.attempts}/${state.maxAttempts}` : "unfinished";
  const rows = [...els.resultsBody.querySelectorAll("tr")].reverse().map((row) => {
    return [...row.querySelectorAll("td")].slice(1).map(td => {
      if (td.classList.contains("cell-exact")) return "🟩";
      if (td.classList.contains("cell-partial")) return "🟨";
      if (td.classList.contains("cell-higher") || td.classList.contains("cell-lower")) return "🟦";
      return "🟥";
    }).join("");
  }).join("\n");
  return `${title} ${score}\n${rows}`;
}

async function copyResult() {
  const text = buildShareText();
  try {
    await navigator.clipboard.writeText(text);
    els.copyShareBtn.textContent = "Copied";
    setTimeout(() => { els.copyShareBtn.textContent = "Copy result"; }, 1200);
  } catch {
    alert(text);
  }
}

function loadStats() {
  const stats = JSON.parse(localStorage.getItem("orthoGuessStats") || '{"played":0,"won":0,"streak":0}');
  els.playedValue.textContent = stats.played;
  els.wonValue.textContent = stats.won;
  els.streakValue.textContent = stats.streak;
}

function updateStats(win) {
  const stats = JSON.parse(localStorage.getItem("orthoGuessStats") || '{"played":0,"won":0,"streak":0}');
  stats.played += 1;
  if (win) {
    stats.won += 1;
    stats.streak += 1;
  } else {
    stats.streak = 0;
  }
  localStorage.setItem("orthoGuessStats", JSON.stringify(stats));
  loadStats();
}

init();
