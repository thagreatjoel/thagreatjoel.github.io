// Wait for full site load
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Fade out loader and show content
  loader.classList.add("hidden");
  setTimeout(() => {
    loader.style.display = "none";
    content.classList.add("visible");
  }, 800);
});

// Mobile menu toggle
const menuBtn = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("active"));
}

// Small scroll to hide address bar (mobile)
setTimeout(() => window.scrollTo(0, 1), 600);  setTimeout(() => {
    window.scrollTo(0, 1);
  }, 500);
});

// mobile nav toggle
const menuBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => navMenu.classList.toggle("active"));
}
// Mobile menu toggle
const menuBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
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
