// Page loader with smooth fade and safety timeout
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  const loadingText = document.getElementById("loadingText");

  let progress = 0;
  const interval = setInterval(() => {
    if (progress < 100) {
      progress += 5;
      loadingText.textContent = `Loading... ${progress}%`;
    } else {
      clearInterval(interval);
      loadingText.textContent = "Ready!";
      loader.classList.add("hidden");
      setTimeout(() => {
        loader.style.display = "none";
        content.classList.add("visible");
      }, 800);
    }
  }, 60); // fake loading progress for smooth animation
});

// Mobile menu toggle
const menuBtn = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("active"));
}

// Mobile fullscreen (address bar hides)
setTimeout(() => window.scrollTo(0, 1), 600);      img.addEventListener("error", imageLoaded);
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
