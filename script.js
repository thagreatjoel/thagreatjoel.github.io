window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Safety check to ensure elements exist
  if (!loader || !content) return;

  // Fade out loader, fade in content
  loader.classList.add("hidden");
  setTimeout(() => {
    loader.style.display = "none";
    content.classList.add("visible");
  }, 800);
});

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("active"));
  }
});

// Hide address bar on mobile
setTimeout(() => window.scrollTo(0, 1), 600);if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
// Mobile menu toggle
const menuBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
