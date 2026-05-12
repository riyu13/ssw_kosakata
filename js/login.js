// ============================================================
// USERS — data login tersimpan di data.js
// ============================================================
const USERS = [
  { username: "root", password: "toor", displayName: "先生" },
  { username: "andibagus", password: "Sayatampan", displayName: "Andi" },
  { username: "kntng7", password: "kentung007", displayName: "Bagus" },
  { username: "anisa", password: "anisa123", displayName: "Anisa" },
  { username: "Rifai677", password: "pai123", displayName: "Pai" },
  { username: "SyuKron94", password: "SyuKron1234", displayName: "Pai" },
  { username: "H.kusumantoro", password: "123admin", displayName: "Heri" },
  { username: "pricawwwshrn", password: "sandiarimasen", displayName: "Prisa" },
];

// ============================================================
// AUTH
// ============================================================
let currentUser = null;

function doLogin() {
  const u = document.getElementById("loginUser").value.trim();
  const p = document.getElementById("loginPass").value;
  const err = document.getElementById("loginError");
  err.textContent = "";
  if (!u || !p) {
    err.textContent = "Username dan password wajib diisi.";
    return;
  }
  const found = USERS.find((x) => x.username === u && x.password === p);
  if (!found) {
    err.textContent = "Username atau password salah.";
    return;
  }
  currentUser = found;
  sessionStorage.setItem(
    "jp_user",
    JSON.stringify({
      username: found.username,
      displayName: found.displayName,
    }),
  );
  startApp();
}

function doLogout() {
  currentUser = null;
  sessionStorage.removeItem("jp_user");
  document.getElementById("mainApp").classList.remove("visible");
  document.getElementById("loginScreen").style.display = "flex";
  document.getElementById("loginUser").value = "";
  document.getElementById("loginPass").value = "";
  document.getElementById("loginError").textContent = "";
}

function checkAutoLogin() {
  const stored = sessionStorage.getItem("jp_user");
  if (stored) {
    currentUser = JSON.parse(stored);
    startApp();
  }
}
