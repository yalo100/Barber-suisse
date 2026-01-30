const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const updateError = (element, message, show) => {
  element.textContent = message;
  element.style.display = show ? "block" : "none";
};

const validateField = (input, errorElement, validator, message) => {
  const isValid = validator(input.value.trim());
  updateError(errorElement, message, !isValid);
  return isValid;
};

const validateForm = () => {
  const isNameValid = validateField(
    nameInput,
    nameError,
    (value) => value.length > 0,
    "Please enter your name."
  );

  const isEmailValid = validateField(
    emailInput,
    emailError,
    (value) => emailPattern.test(value),
    "Please enter a valid email."
  );

  const isMessageValid = validateField(
    messageInput,
    messageError,
    (value) => value.length > 0,
    "Please enter a message."
  );

  return isNameValid && isEmailValid && isMessageValid;
};

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (validateForm()) {
      alert("Thank you for contacting Barber Swiss. We will be in touch soon!");
      form.reset();
      updateError(nameError, "", false);
      updateError(emailError, "", false);
      updateError(messageError, "", false);
    }
  });
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
