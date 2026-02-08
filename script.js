const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const header = document.querySelector(".site-header");
const compactHeaderOffset = 80;

const updateHeaderOnScroll = () => {
  if (!header) {
    return;
  }

  header.classList.toggle("is-compact", window.scrollY > compactHeaderOffset);
};

if (header) {
  let isTicking = false;

  const onScroll = () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        updateHeaderOnScroll();
        isTicking = false;
      });
      isTicking = true;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("load", updateHeaderOnScroll);
  updateHeaderOnScroll();
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") {
      return;
    }
    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const serviceCards = document.querySelectorAll(".service-card");

if (serviceCards.length > 0) {
  serviceCards.forEach((card) => card.classList.add("service-card--reveal"));

  const revealOnScroll = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  serviceCards.forEach((card) => revealOnScroll.observe(card));
}
