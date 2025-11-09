// -------------------------------------------
// 🧊 Great Club – Smart Access Script
// -------------------------------------------

// Fade-in effect after loading
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  if (loader) loader.style.display = "none";
  if (content) content.classList.add("visible");
});

// Mobile navigation toggle
const menuBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// Detect if device is mobile
const isMobile = /Android|iPhone|iPad|iPod|webOS|Opera Mini|IEMobile/i.test(navigator.userAgent);

// Get effective screen width (corrected for pixel density)
const cssWidth = (window.innerWidth || document.documentElement.clientWidth) / window.devicePixelRatio;

// 🚫 Block only mobile users in *forced desktop mode*
if (isMobile && cssWidth > 900) {
  window.location.href = "blocked.html";
}
