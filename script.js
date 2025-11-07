// Fade-in after loading
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").classList.add("visible");
});

// Mobile navigation toggle
const menuBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuBtn.addEventListener("click", () => navMenu.classList.toggle("active"));
