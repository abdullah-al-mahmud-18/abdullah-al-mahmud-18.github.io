// Footer copyright year
const currentYearEl = document.getElementById("current-year");
if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear();
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

// Observe all reveal elements
document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

// Typing effect for hero subtitle
const heroSubtitle = document.querySelector(".hero-subtitle");
const originalText = heroSubtitle.textContent;
heroSubtitle.textContent = "";

let i = 0;
function typeWriter() {
  if (i < originalText.length) {
    heroSubtitle.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Start typing effect after page load
setTimeout(typeWriter, 1000);

// Parallax effect for background
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".hero");
  parallaxElements.forEach((element) => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
  document.body.style.transform = "translateY(0)";
});

// Initialize page with loading state
document.body.style.opacity = "0";
document.body.style.transform = "translateY(20px)";
document.body.style.transition = "opacity 0.8s ease, transform 0.8s ease";
