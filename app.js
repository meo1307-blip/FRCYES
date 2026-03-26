const APP_VERSION = "v1.4";

const STORAGE_KEY = "frcyes_viva_stats_v1";
const allCases = window.FRCYES_CASES || [];

/* ===========================
   GLOBAL ORTHO INTELLIGENCE
   =========================== */

const GLOBAL_ALIASES = {
  "periprosthetic joint infection": ["pji","infected thr","infected tkr"],
  "aseptic loosening of total hip replacement": ["aseptic loosening","thr loosening"],
  "slipped capital femoral epiphysis": ["sufe","scfe"],
  "neck of femur fracture": ["nof fracture","hip fracture"],
  "avascular necrosis": ["avn"],
  "anterior shoulder dislocation": ["shoulder dislocation"]
};

const SHORTCUTS = {
  "thr": "total hip replacement",
  "tkr": "total knee replacement",
  "nof": "neck of femur",
  "avn": "avascular necrosis",
  "pji": "periprosthetic joint infection",
  "sufe": "slipped capital femoral epiphysis"
};

function normalize(str) {
  return (str || "").toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
}

function expandShortcuts(text) {
  let t = normalize(text);
  for (const [short, full] of Object.entries(SHORTCUTS)) {
    t = t.replace(new RegExp(`\\b${short}\\b`, "g"), full);
  }
  return t;
}

/* ===========================
   MATCH ENGINE
   =========================== */

function matchDifferential(input, ideals) {
  const norm = expandShortcuts(input);

  for (const [key, aliases] of Object.entries(GLOBAL_ALIASES)) {
    if (normalize(key) === norm || aliases.some(a => normalize(a) === norm)) {
      return ideals.find(d => normalize(d.name) === normalize(key)) || null;
    }
  }

  for (const d of ideals) {
    if (normalize(d.name) === norm) return d;
  }

  const inputWords = norm.split(" ").filter(w => w.length > 2);
  if (inputWords.length <= 1) return null;

  let best = null, bestScore = 0;

  for (const d of ideals) {
    const words = normalize(d.name).split(" ");
    const overlap = inputWords.filter(w => words.includes(w)).length;
    const score = overlap / inputWords.length;

    if (score > bestScore) {
      bestScore = score;
      best = d;
    }
  }

  if (bestScore >= 0.6) return best;

  return null;
}

/* ===========================
   SMART FEEDBACK
   =========================== */

function generateSmartFeedback(input, correctDx) {
  const words = normalize(input).split(" ");
  const correctWords = normalize(correctDx).split(" ");

  const overlap = words.filter(w => correctWords.includes(w));

  if (overlap.length > 0) {
    return `You're on the right track (${overlap.join(", ")}), but missing the key discriminator.`;
  }

  if (words.includes("infection")) {
    return `Consider infection markers, aspirate, systemic features.`;
  }

  if (words.includes("fracture")) {
    return `Fracture less likely — think chronic/mechanical pathology.`;
  }

  if (words.includes("loosening")) {
    return `Differentiate septic vs aseptic loosening.`;
  }

  return `Focus on key clinical and imaging discriminators.`;
}

/* ===========================
   UI ELEMENTS
   =========================== */

const els = {
  modeSelect: document.getElementById("modeSelect"),
  topicSelect: document.getElementById("topicSelect"),
  differentialInput: document.getElementById("differentialInput"),
  addDifferentialBtn: document.getElementById("addDifferentialBtn"),
  differentialChips: document.getElementById("differentialChips"),
  checkDifferentialsBtn: document.getElementById("checkDifferentialsBtn"),
  differentialFeedback: document.getElementById("differentialFeedback"),
  promptBox: document.getElementById("promptBox")
};

let appState = {
  caseData: null,
  differentials: [],
  topic: "All topics",
  mode: "Practice"
};

/* ===========================
   DROPDOWNS (FIXED)
   =========================== */

function populateDropdowns() {
  // MODE
  els.modeSelect.innerHTML = "";
  ["Practice", "Daily"].forEach(m => {
    const opt = document.createElement("option");
    opt.value = m;
    opt.textContent = m;
    els.modeSelect.appendChild(opt);
  });

  // TOPICS
  const topics = ["All topics", ...new Set(allCases.map(c => c.topic))];

  els.topicSelect.innerHTML = "";
  topics.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    els.topicSelect.appendChild(opt);
  });
}

/* ===========================
   VERSION LABEL (FIXED)
   =========================== */

function injectVersionLabel() {
  const el = document.createElement("div");
  el.textContent = APP_VERSION;

  el.style.position = "fixed";
  el.style.bottom = "6px";
  el.style.right = "10px";
  el.style.fontSize = "11px";
  el.style.opacity = "0.5";
  el.style.zIndex = "9999";

  document.body.appendChild(el);
}

/* ===========================
   CORE
   =========================== */

function chooseCase() {
  let pool = allCases;

  if (appState.topic !== "All topics") {
    pool = allCases.filter(c => c.topic === appState.topic);
  }

  return pool[Math.floor(Math.random() * pool.length)];
}

function resetCase() {
  appState.caseData = chooseCase();
  appState.differentials = [];
  render();
}

function render() {
  els.promptBox.textContent = appState.caseData.stages[0];
  renderDifferentialChips();
}

function renderDifferentialChips() {
  els.differentialChips.innerHTML = "";

  appState.differentials.forEach((d, i) => {
    const chip = document.createElement("div");
    chip.className = "chip";

    chip.innerHTML = `<span>${d}</span>`;

    const btn = document.createElement("button");
    btn.textContent = "×";
    btn.onclick = () => {
      appState.differentials.splice(i, 1);
      renderDifferentialChips();
    };

    chip.appendChild(btn);
    els.differentialChips.appendChild(chip);
  });
}

function addDifferential() {
  const val = els.differentialInput.value.trim();
  if (!val) return;

  appState.differentials.push(val);
  els.differentialInput.value = "";
  renderDifferentialChips();
}

function checkDifferentials() {
  const ideals = appState.caseData.idealDifferentials;

  const feedback = appState.differentials.map(d => {
    const match = matchDifferential(d, ideals);

    if (match) {
      return `<div class="feedback-item feedback-good"><strong>${match.name}</strong><br>${match.why}</div>`;
    }

    const smart = generateSmartFeedback(d, appState.caseData.diagnosis);

    return `<div class="feedback-item feedback-bad"><strong>${d}</strong><br>${smart}</div>`;
  });

  els.differentialFeedback.classList.remove("hidden");
  els.differentialFeedback.innerHTML = feedback.join("");
}

/* ===========================
   INIT (FIXED ORDER)
   =========================== */

function init() {
  populateDropdowns();   // 🔥 critical fix
  resetCase();

  injectVersionLabel();  // 🔥 now guaranteed to show

  els.addDifferentialBtn.onclick = addDifferential;
  els.checkDifferentialsBtn.onclick = checkDifferentials;

  els.topicSelect.onchange = (e) => {
    appState.topic = e.target.value;
    resetCase();
  };

  els.modeSelect.onchange = (e) => {
    appState.mode = e.target.value;
    resetCase();
  };
}

init();
