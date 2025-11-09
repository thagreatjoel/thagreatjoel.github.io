// -------------------------------------------
// 🧊 Great Club – Basic Script
// -------------------------------------------

// Fade-in after loading
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
