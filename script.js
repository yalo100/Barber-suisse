const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const languageButtons = document.querySelectorAll("[data-lang-switch]");
const translatableElements = document.querySelectorAll("[data-i18n]");
const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const translations = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.whatsapp": "WhatsApp",
    "hero.eyebrow": "Premium grooming in the heart of the city",
    "hero.title": "Precision cuts for the modern gentleman.",
    "hero.body":
      "Barber Suisse delivers a refined, high-end barbering experience. Settle into a calm space while we craft a style that feels sharp, confident, and effortless.",
    "hero.cta": "Book now",
    "hero.secondaryCta": "Explore services",
    "hero.statOneNumber": "10+",
    "hero.statOneLabel": "Years of expertise",
    "hero.statTwoNumber": "4.9",
    "hero.statTwoLabel": "Customer rating",
    "hero.statThreeNumber": "1200+",
    "hero.statThreeLabel": "Happy clients",
    "hero.hoursTitle": "Opening Hours",
    "hero.hoursWeek": "Mon - Fri: 9:00 - 19:00",
    "hero.hoursSat": "Saturday: 9:00 - 17:00",
    "hero.hoursSun": "Sunday: Closed",
    "services.title": "Services",
    "services.subtitle": "Tailored treatments designed for clean lines and effortless confidence.",
    "services.haircuts.title": "Haircuts",
    "services.haircuts.body":
      "Precision cuts tailored to your style with a clean finish and expert detailing.",
    "services.haircuts.price": "From CHF 35",
    "services.beard.title": "Beard Grooming",
    "services.beard.body": "Shape, trim, and condition your beard for a refined, polished look.",
    "services.beard.price": "From CHF 25",
    "services.package.title": "Special Package",
    "services.package.body": "Complete grooming experience combining haircut and beard service.",
    "services.package.price": "From CHF 55",
    "services.ritual.title": "Ritual Deluxe",
    "services.ritual.body": "Steam, hot towel, and premium care for a full reset.",
    "services.ritual.price": "From CHF 70",
    "experience.title": "The Barber Suisse experience",
    "experience.subtitle": "Designed for men who want precision, comfort, and a signature look.",
    "experience.stepOneTitle": "Consultation",
    "experience.stepOneBody": "We analyze your hair texture, face shape, and lifestyle.",
    "experience.stepTwoTitle": "Craftsmanship",
    "experience.stepTwoBody": "Every fade and beard line is sculpted with precision.",
    "experience.stepThreeTitle": "Detailing",
    "experience.stepThreeBody": "Finishing touches, styling, and aftercare tips.",
    "contact.title": "Contact",
    "contact.subtitle": "Reach out to reserve your appointment or ask about our services.",
    "contact.phoneTitle": "Phone",
    "contact.whatsappTitle": "WhatsApp",
    "contact.instagramTitle": "Instagram",
    "contact.nameLabel": "Name",
    "contact.namePlaceholder": "Your full name",
    "contact.emailLabel": "Email",
    "contact.emailPlaceholder": "you@email.com",
    "contact.messageLabel": "Message",
    "contact.messagePlaceholder": "Tell us what you need",
    "contact.submit": "Send Message",
    "footer.copy": "© 2026 Barber Suisse. All rights reserved.",
    "footer.contact": "Contact Us",
    "errors.name": "Please enter your name.",
    "errors.email": "Please enter a valid email.",
    "errors.message": "Please enter a message.",
    "alert.success": "Thank you for contacting Barber Suisse. We will be in touch soon!",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.experience": "Expérience",
    "nav.contact": "Contact",
    "nav.whatsapp": "WhatsApp",
    "hero.eyebrow": "Soins premium au cœur de la ville",
    "hero.title": "La coupe précise pour l'homme moderne.",
    "hero.body":
      "Barber Suisse propose une expérience haut de gamme, sobre et raffinée. Installez-vous et laissez-nous créer un style net, confiant et sans effort.",
    "hero.cta": "Réserver",
    "hero.secondaryCta": "Découvrir les services",
    "hero.statOneNumber": "10+",
    "hero.statOneLabel": "Ans d'expertise",
    "hero.statTwoNumber": "4,9",
    "hero.statTwoLabel": "Note clients",
    "hero.statThreeNumber": "1200+",
    "hero.statThreeLabel": "Clients satisfaits",
    "hero.hoursTitle": "Horaires",
    "hero.hoursWeek": "Lun - Ven : 9h00 - 19h00",
    "hero.hoursSat": "Samedi : 9h00 - 17h00",
    "hero.hoursSun": "Dimanche : fermé",
    "services.title": "Services",
    "services.subtitle": "Des soins sur-mesure pour des lignes nettes et une confiance assurée.",
    "services.haircuts.title": "Coupes de cheveux",
    "services.haircuts.body":
      "Coupes précises adaptées à votre style avec une finition impeccable.",
    "services.haircuts.price": "À partir de CHF 35",
    "services.beard.title": "Entretien de barbe",
    "services.beard.body": "Taille, nettoyage et soin pour une barbe élégante et soignée.",
    "services.beard.price": "À partir de CHF 25",
    "services.package.title": "Forfait spécial",
    "services.package.body": "Expérience complète combinant coupe et barbe.",
    "services.package.price": "À partir de CHF 55",
    "services.ritual.title": "Rituel Deluxe",
    "services.ritual.body": "Vapeur, serviette chaude et soin premium pour se régénérer.",
    "services.ritual.price": "À partir de CHF 70",
    "experience.title": "L'expérience Barber Suisse",
    "experience.subtitle": "Pensée pour les hommes qui veulent précision, confort et style signature.",
    "experience.stepOneTitle": "Consultation",
    "experience.stepOneBody": "Analyse de la texture, du visage et du style de vie.",
    "experience.stepTwoTitle": "Savoir-faire",
    "experience.stepTwoBody": "Chaque dégradé et ligne de barbe est sculpté avec précision.",
    "experience.stepThreeTitle": "Finitions",
    "experience.stepThreeBody": "Détails, coiffage et conseils d'entretien.",
    "contact.title": "Contact",
    "contact.subtitle": "Contactez-nous pour réserver ou poser vos questions.",
    "contact.phoneTitle": "Téléphone",
    "contact.whatsappTitle": "WhatsApp",
    "contact.instagramTitle": "Instagram",
    "contact.nameLabel": "Nom",
    "contact.namePlaceholder": "Votre nom complet",
    "contact.emailLabel": "Email",
    "contact.emailPlaceholder": "vous@email.com",
    "contact.messageLabel": "Message",
    "contact.messagePlaceholder": "Expliquez votre demande",
    "contact.submit": "Envoyer",
    "footer.copy": "© 2026 Barber Suisse. Tous droits réservés.",
    "footer.contact": "Nous contacter",
    "errors.name": "Veuillez saisir votre nom.",
    "errors.email": "Veuillez saisir un email valide.",
    "errors.message": "Veuillez saisir un message.",
    "alert.success": "Merci d'avoir contacté Barber Suisse. Nous vous répondrons bientôt !",
  },
};

const updateError = (element, message, show) => {
  element.textContent = message;
  element.style.display = show ? "block" : "none";
};

const setLanguage = (language) => {
  const dictionary = translations[language] || translations.en;
  document.body.dataset.lang = language;
  document.documentElement.lang = language;

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  placeholderElements.forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      element.setAttribute("placeholder", dictionary[key]);
    }
  });

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.langSwitch === language ? "true" : "false");
  });
};

const validateField = (input, errorElement, validator, message) => {
  const isValid = validator(input.value.trim());
  updateError(errorElement, message, !isValid);
  return isValid;
};

const validateForm = (language) => {
  const dictionary = translations[language] || translations.en;
  const isNameValid = validateField(
    nameInput,
    nameError,
    (value) => value.length > 0,
    dictionary["errors.name"]
  );

  const isEmailValid = validateField(
    emailInput,
    emailError,
    (value) => emailPattern.test(value),
    dictionary["errors.email"]
  );

  const isMessageValid = validateField(
    messageInput,
    messageError,
    (value) => value.length > 0,
    dictionary["errors.message"]
  );

  return isNameValid && isEmailValid && isMessageValid;
};

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const language = document.body.dataset.lang || "en";

    if (validateForm(language)) {
      alert((translations[language] || translations.en)["alert.success"]);
      form.reset();
      updateError(nameError, "", false);
      updateError(emailError, "", false);
      updateError(messageError, "", false);
    }
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langSwitch);
  });
});

setLanguage(document.body.dataset.lang || "en");

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
