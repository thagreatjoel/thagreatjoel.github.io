// -------------------------------------------
// 🧊 Great Club – Unified Script
// -------------------------------------------

// 🌀 Fade-in effect after loading
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  if (loader) loader.style.display = "none";
  if (content) content.classList.add("visible");
});

// 📱 Mobile navigation toggle
const menuBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// 🔍 Detect if device is mobile
const isMobile = /Android|iPhone|iPad|iPod|webOS|Opera Mini|IEMobile/i.test(navigator.userAgent);

// 💻 Get screen width
const screenWidth = window.innerWidth || document.documentElement.clientWidth;

// 🚫 Block "Desktop Mode" on mobile browsers
if (isMobile && screenWidth > 900) {
  window.location.href = "blocked.html";
}
