const APP_VERSION = "v1.2"; // 🔹 CHANGE THIS EACH UPDATE

const STORAGE_KEY = "frcyes_viva_stats_v1";
const allCases = window.FRCYES_CASES || [];

/* ===========================
   GLOBAL ORTHO INTELLIGENCE
   =========================== */

const GLOBAL_ALIASES = {
  "periprosthetic joint infection": [
    "pji", "infected thr", "infected tkr", "prosthetic joint infection",
    "hip replacement infection", "knee replacement infection"
  ],
  "aseptic loosening of total hip replacement": [
    "aseptic loosening", "thr loosening", "hip replacement loosening"
  ],
  "slipped capital femoral epiphysis": [
    "sufe", "scfe", "slipped upper femoral epiphysis"
  ],
  "neck of femur fracture": [
    "nof fracture", "hip fracture", "intracapsular fracture neck femur"
  ],
  "avascular necrosis": [
    "avn", "osteonecrosis"
  ],
  "anterior shoulder dislocation": [
    "shoulder dislocation", "glenohumeral dislocation", "dislocated shoulder"
  ],
  "septic arthritis": [
    "joint infection", "infected joint"
  ],
  "osteosarcoma": [
    "osteosarc", "bone sarcoma"
  ]
};

const SHORTCUTS = {
  "thr": "total hip replacement",
  "tkr": "total knee replacement",
  "nof": "neck of femur",
  "avn": "avascular necrosis",
  "pji": "periprosthetic joint infection",
  "sufe": "slipped capital femoral epiphysis"
};

function expandShortcuts(text) {
  let t = normalize(text);
  for (const [short, full] of Object.entries(SHORTCUTS)) {
    t = t.replace(new RegExp(`\\b${short}\\b`, "g"), full);
  }
  return t;
}

/* =========================== */

const els = {
  differentialInput: document.getElementById("differentialInput"),
  addDifferentialBtn: document.getElementById("addDifferentialBtn"),
  differentialChips: document.getElementById("differentialChips"),
  checkDifferentialsBtn: document.getElementById("checkDifferentialsBtn"),
  differentialFeedback: document.getElementById("differentialFeedback"),
  promptBox: document.getElementById("promptBox")
};

let appState = {
  caseData: null,
  differentials: []
};

function normalize(str) {
  return (str || "").toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
}

/* ===========================
   🔥 MATCH ENGINE
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
   🔥 SMART FEEDBACK
   =========================== */
function generateSmartFeedback(input, correctDx) {
  const words = normalize(input).split(" ");
  const correctWords = normalize(correctDx).split(" ");

  const overlap = words.filter(w => correctWords.includes(w));

  if (overlap.length > 0) {
    return `You're on the right track mentioning <strong>${overlap.join(", ")}</strong>, but you're missing the key discriminator that makes this diagnosis most likely.`;
  }

  if (words.includes("infection") || words.includes("septic")) {
    return `Infection is a reasonable thought, but check for systemic features, inflammatory markers, and aspirate findings.`;
  }

  if (words.includes("fracture")) {
    return `Fracture is less likely here — consider chronic or mechanical pathology instead.`;
  }

  if (words.includes("loosening")) {
    return `Loosening is relevant — now differentiate between septic and aseptic causes.`;
  }

  return `Less likely. Focus on key clinical and imaging discriminators.`;
}

/* =========================== */

function injectVersionLabel() {
  const el = document.createElement("div");
  el.textContent = APP_VERSION;

  el.style.position = "fixed";
  el.style.bottom = "6px";
  el.style.right = "10px";
  el.style.fontSize = "11px";
  el.style.opacity = "0.4";
  el.style.pointerEvents = "none";

  document.body.appendChild(el);
}

/* =========================== */

function chooseCase() {
  return allCases[Math.floor(Math.random() * allCases.length)];
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
    chip.onclick = () => {
      appState.differentials.splice(i, 1);
      renderDifferentialChips();
    };
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

function init() {
  resetCase();

  injectVersionLabel(); // 🔹 VERSION LABEL ADDED

  els.addDifferentialBtn.onclick = addDifferential;
  els.checkDifferentialsBtn.onclick = checkDifferentials;
}

init();
