window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").classList.add("visible");
});

const menuBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuBtn.addEventListener("click", () => navMenu.classList.toggle("active"));
// Force fullscreen-like view on mobile
window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo(0, 1);
  }, 100); // wait for render
});
