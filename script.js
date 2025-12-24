/* ========== LOGO SWITCHER (LIGHT/DARK PREFERENCE) ========== */
function setLogoForTheme() {
  const logo = document.getElementById("site-logo");
  if (!logo) return;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  logo.src = prefersDark
    ? "photos/logo/andreas-header-dark.png"
    : "photos/logo/andreas-header-light.png";
}

setLogoForTheme();

window.matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", setLogoForTheme);

/* ========== GOOGLE REVIEW BUTTON ========== */
function openGoogleReview() {
  const googleReviewsUrl =
    "https://www.google.com/search?q=Andrea+Salumeria+Reviews";
  window.open(googleReviewsUrl, "_blank");
}

/* ========== HERO SLIDESHOW ========== */
const heroSlides = document.querySelectorAll(".hero-slide");
let currentHeroIndex = 0;
const heroIntervalMs = 6500; // 6.5 seconds per slide

function showHeroSlide(index) {
  heroSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextHeroSlide() {
  if (heroSlides.length === 0) return;
  currentHeroIndex = (currentHeroIndex + 1) % heroSlides.length;
  showHeroSlide(currentHeroIndex);
}

if (heroSlides.length > 0) {
  showHeroSlide(currentHeroIndex);
  setInterval(nextHeroSlide, heroIntervalMs);
}