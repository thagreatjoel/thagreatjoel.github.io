window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Force reload images fresh each time
  const images = [...document.images];
  let loaded = 0;
  const total = images.length;

  function imageLoaded() {
    loaded++;
    if (loaded === total) finishLoading();
  }

  function finishLoading() {
    loader.classList.add("hidden");
    setTimeout(() => {
      loader.style.display = "none";
      content.classList.add("visible");
    }, 1000);
  }

  if (images.length === 0) finishLoading();
  else images.forEach(img => {
    if (img.complete) imageLoaded();
    else {
      img.addEventListener("load", imageLoaded);
      img.addEventListener("error", imageLoaded);
    }
  });

  // Force fullscreen-like effect for mobile
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
// Mobile menu toggle
const menuBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
