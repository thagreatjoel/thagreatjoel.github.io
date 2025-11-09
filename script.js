// -------------------------------------------
// 🧊 Great Club – Safe Access Script (Final)
// -------------------------------------------

// Fade-in effect
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  if (loader) loader.style.display = "none";
  if (content) content.classList.add("visible");
});

// Mobile menu toggle
const menuBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// Device detection
const ua = navigator.userAgent;
const isMobile = /Android|iPhone|iPad|iPod|webOS|Opera Mini|IEMobile/i.test(ua);
const isDesktop = /Windows NT|Macintosh|Linux x86_64|X11/i.test(ua);

// Screen width adjusted for DPI
const cssWidth = (window.innerWidth || document.documentElement.clientWidth) / window.devicePixelRatio;

// ✅ Allow all real desktops
if (isDesktop) {
  console.log("✅ Real desktop user – allowed");
}
// ✅ Allow normal mobile users
else if (isMobile && cssWidth <= 900) {
  console.log("✅ Mobile user – allowed");
}
// 🚫 Block mobiles forcing desktop mode
else if (isMobile && cssWidth > 900) {
  console.log("🚫 Mobile user in desktop mode – blocked");
  window.location.href = "blocked.html";
}
// ✅ Allow unknown/others (like bots, TVs)
else {
  console.log("✅ Unknown device – allowed");
}
