// ---------- NORMALISE ----------
function normalize(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// ---------- LEVENSHTEIN ----------
function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;
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
  const na = normalize(a);
  const nb = normalize(b);
  if (!na || !nb) return 0;
  const dist = levenshtein(na, nb);
  return 1 - dist / Math.max(na.length, nb.length);
}

// ---------- MATCH ----------
function getAllNames(diff) {
  return [diff.name, ...(diff.aliases || [])];
}

function matchDifferential(userInput, ideals) {
  const normInput = normalize(userInput);

  // Exact / alias match
  for (const diff of ideals) {
    const names = getAllNames(diff);
    if (names.some(n => normalize(n) === normInput)) {
      return diff;
    }
  }

  // Fuzzy match
  let best = null;
  let bestScore = 0;

  for (const diff of ideals) {
    const names = getAllNames(diff);
    for (const name of names) {
      const score = similarityScore(userInput, name);
      if (score > bestScore) {
        bestScore = score;
        best = diff;
      }
    }
  }

  if (bestScore >= 0.72) return best;

  return null;
}

// ---------- CORE ----------
function checkDifferentials(userDiffs, caseData) {
  const ideals = caseData.differentials;

  return userDiffs.map(diff => {
    const matched = matchDifferential(diff, ideals);

    if (!matched) {
      return `<div class="feedback-item feedback-bad">
        <strong>${diff}</strong><br>Not recognised
      </div>`;
    }

    return `<div class="feedback-item ${
      matched.weight === "strong"
        ? "feedback-good"
        : matched.weight === "partial"
        ? "feedback-warn"
        : "feedback-bad"
    }">
      <strong>${matched.name}</strong><br>
      ${matched.why}
    </div>`;
  }).join("");
}
