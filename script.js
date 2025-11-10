window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  const loadingText = document.getElementById("loadingText");

  const images = [...document.images];
  let loaded = 0;
  const total = images.length;

  // update loading percentage
  function updateProgress() {
    const percent = Math.floor((loaded / total) * 100);
    loadingText.textContent = `Loading... ${percent}%`;
  }

  // when image loads or errors
  function imageLoaded() {
    loaded++;
    updateProgress();
    if (loaded === total) finishLoading();
  }

  function finishLoading() {
    loadingText.textContent = "Ready!";
    loader.classList.add("hidden");
    setTimeout(() => {
      loader.style.display = "none";
      content.classList.add("visible");
    }, 1000);
  }

  if (total === 0) finishLoading();
  else images.forEach(img => {
    if (img.complete) imageLoaded();
    else {
      img.addEventListener("load", imageLoaded);
      img.addEventListener("error", imageLoaded);
    }
  });

  // mobile fullscreen
  setTimeout(() => {
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
