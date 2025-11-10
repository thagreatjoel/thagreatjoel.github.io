// Wait for all images to load before showing the site
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Wait until images fully loaded
  const images = document.images;
  let loadedCount = 0;
  const total = images.length;

  for (let img of images) {
    if (img.complete) {
      loadedCount++;
    } else {
      img.addEventListener("load", () => {
        loadedCount++;
        if (loadedCount === total) revealPage();
      });
    }
  }

  if (loadedCount === total) revealPage();

  function revealPage() {
    loader.classList.add("hidden");
    setTimeout(() => {
      loader.style.display = "none";
      content.classList.add("visible");
    }, 1000);
  }

  // Fullscreen effect for mobile browsers
  setTimeout(() => {
    window.scrollTo(0, 1);
  }, 500);
});

// Mobile menu toggle
const menuBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
