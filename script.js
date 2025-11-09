// Fade-in after loading
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").classList.add("visible");
});

// Mobile navigation toggle
const menuBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuBtn.addEventListener("click", () => navMenu.classList.toggle("active"));

// Detect if device is mobile
const isMobile = /Android|iPhone|iPad|iPod|webOS|Opera Mini|IEMobile/i.test(navigator.userAgent);

// Get the approximate screen width
const screenWidth = window.innerWidth || document.documentElement.clientWidth;

// If it's a mobile device pretending to be desktop
if (isMobile && screenWidth > 900) {
  window.location.href = "blocked.html";
}
