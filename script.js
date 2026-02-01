const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const currentYear = document.getElementById("currentYear");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const updateError = (element, show, message) => {
  element.textContent = message;
  element.style.display = show ? "block" : "none";
};

const validateField = (input, errorElement, validator, message) => {
  const isValid = validator(input.value.trim());
  updateError(errorElement, !isValid, message);
  return isValid;
};

const validateForm = () => {
  const isNameValid = validateField(
    nameInput,
    nameError,
    (value) => value.length > 0,
    "Veuillez saisir votre nom."
  );

  const isEmailValid = validateField(
    emailInput,
    emailError,
    (value) => emailPattern.test(value),
    "Veuillez saisir un email valide."
  );

  const isMessageValid = validateField(
    messageInput,
    messageError,
    (value) => value.length > 0,
    "Veuillez saisir votre message."
  );

  return isNameValid && isEmailValid && isMessageValid;
};

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (validateForm()) {
      alert("Merci ! Votre message a bien été envoyé.");
      form.reset();
      updateError(nameError, false, "");
      updateError(emailError, false, "");
      updateError(messageError, false, "");
    }
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
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
