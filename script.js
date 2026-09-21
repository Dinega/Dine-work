```javascript
// ===============================
// NAZ FOUNDATION - LANGUAGE SYSTEM
// Kreyòl / Français / English / Español
// ===============================

const translations = {
  ht: {
    skip: "Ale nan kontni an",
    missionNav: "Misyon nou",
    workNav: "Aksyon nou yo",
    contactNav: "Kontak",
    donate: "Fè yon don",

    heroOverline: "SOLIDARITE • DIYITE • AVNI",
    heroTitle: "Yon jès jodi a ka chanje yon lavi demen.",
    heroText:
      "Naz Foundation travay pou pote manje, edikasyon ak espwa bay moun ak kominote ki bezwen sipò.",
    heroButton: "Dekouvri misyon nou",

    missionTitle: "Poukisa nou la",
    missionText:
      "Nou kwè chak moun merite manje, edikasyon, diyite ak yon chans pou konstwi yon pi bon avni.",

    actionsTitle: "Aksyon nou yo",

    foodTitle: "Nouri fanmi yo",
    foodText:
      "Nou ede fanmi ki nan bezwen jwenn manje ak sipò esansyèl.",

    schoolTitle: "Lekòl pou timoun yo",
    schoolText:
      "Nou ankouraje aksè timoun yo ak edikasyon pou yo ka prepare yon pi bon avni.",

    communityTitle: "Kominote ki pi solid",
    communityText:
      "Nou travay ansanm ak kominote yo pou kreye chanjman ki dire lontan.",

    galleryTitle: "Galri nou",
    contactTitle: "Kontakte nou",
    contactText:
      "Pou plis enfòmasyon oswa pou kolabore avèk Naz Foundation, kontakte nou.",

    donateTitle: "Sipòte misyon nou",
    donateText:
      "Chak don ka ede nou bay manje, sipòte timoun yo epi pote plis espwa nan kominote yo.",
    donateButton: "Fè yon don sou PayPal",

    footerText:
      "Ansanm, nou ka bati yon demen miyò."
  },

  fr: {
    skip: "Aller au contenu",
    missionNav: "Notre mission",
    workNav: "Nos actions",
    contactNav: "Contact",
    donate: "Faire un don",

    heroOverline: "SOLIDARITÉ • DIGNITÉ • AVENIR",
    heroTitle: "Un geste aujourd’hui peut changer une vie demain.",
    heroText:
      "Naz Foundation œuvre pour apporter de la nourriture, de l’éducation et de l’espoir aux personnes et aux communautés qui ont besoin de soutien.",
    heroButton: "Découvrir notre mission",

    missionTitle: "Pourquoi nous sommes là",
    missionText:
      "Nous croyons que chaque personne mérite de la nourriture, de l’éducation, de la dignité et une chance de construire un avenir meilleur.",

    actionsTitle: "Nos actions",

    foodTitle: "Nourrir les familles",
    foodText:
      "Nous aidons les familles dans le besoin à accéder à la nourriture et au soutien essentiel.",

    schoolTitle: "L’école pour les enfants",
    schoolText:
      "Nous favorisons l’accès des enfants à l’éducation afin de leur permettre de préparer un avenir meilleur.",

    communityTitle: "Des communautés plus fortes",
    communityText:
      "Nous travaillons avec les communautés pour créer des changements durables.",

    galleryTitle: "Notre galerie",
    contactTitle: "Contactez-nous",
    contactText:
      "Pour plus d’informations ou pour collaborer avec Naz Foundation, contactez-nous.",

    donateTitle: "Soutenez notre mission",
    donateText:
      "Chaque don peut nous aider à fournir de la nourriture, soutenir les enfants et apporter davantage d’espoir aux communautés.",
    donateButton: "Faire un don avec PayPal",

    footerText:
      "Ensemble, nous pouvons construire un avenir meilleur."
  },

  en: {
    skip: "Skip to content",
    missionNav: "Our mission",
    workNav: "Our actions",
    contactNav: "Contact",
    donate: "Donate",

    heroOverline: "SOLIDARITY • DIGNITY • FUTURE",
    heroTitle: "A gesture today can change a life tomorrow.",
    heroText:
      "Naz Foundation works to provide food, education and hope to people and communities who need support.",
    heroButton: "Discover our mission",

    missionTitle: "Why we are here",
    missionText:
      "We believe everyone deserves food, education, dignity and a chance to build a better future.",

    actionsTitle: "Our actions",

    foodTitle: "Feeding families",
    foodText:
      "We help families in need access food and essential support.",

    schoolTitle: "Education for children",
    schoolText:
      "We promote access to education so children can prepare for a better future.",

    communityTitle: "Stronger communities",
    communityText:
      "We work together with communities to create lasting change.",

    galleryTitle: "Our gallery",
    contactTitle: "Contact us",
    contactText:
      "For more information or to collaborate with Naz Foundation, please contact us.",

    donateTitle: "Support our mission",
    donateText:
      "Every donation can help us provide food, support children and bring more hope to communities.",
    donateButton: "Donate with PayPal",

    footerText:
      "Together, we can build a better tomorrow."
  },

  es: {
    skip: "Ir al contenido",
    missionNav: "Nuestra misión",
    workNav: "Nuestras acciones",
    contactNav: "Contacto",
    donate: "Donar",

    heroOverline: "SOLIDARIDAD • DIGNIDAD • FUTURO",
    heroTitle: "Un gesto hoy puede cambiar una vida mañana.",
    heroText:
      "Naz Foundation trabaja para proporcionar alimentos, educación y esperanza a las personas y comunidades que necesitan apoyo.",
    heroButton: "Descubre nuestra misión",

    missionTitle: "Por qué estamos aquí",
    missionText:
      "Creemos que toda persona merece alimentos, educación, dignidad y una oportunidad para construir un futuro mejor.",

    actionsTitle: "Nuestras acciones",

    foodTitle: "Alimentar a las familias",
    foodText:
      "Ayudamos a las familias necesitadas a obtener alimentos y apoyo esencial.",

    schoolTitle: "Educación para los niños",
    schoolText:
      "Promovemos el acceso de los niños a la educación para que puedan prepararse para un futuro mejor.",

    communityTitle: "Comunidades más fuertes",
    communityText:
      "Trabajamos junto con las comunidades para crear cambios duraderos.",

    galleryTitle: "Nuestra galería",
    contactTitle: "Contáctanos",
    contactText:
      "Para obtener más información o colaborar con Naz Foundation, contáctanos.",

    donateTitle: "Apoya nuestra misión",
    donateText:
      "Cada donación puede ayudarnos a proporcionar alimentos, apoyar a los niños y llevar más esperanza a las comunidades.",
    donateButton: "Donar con PayPal",

    footerText:
      "Juntos podemos construir un mañana mejor."
  }
};


// ===============================
// FONCTION DE TRADUCTION
// ===============================

function changeLanguage(language) {

  // Vérifie que la langue existe
  if (!translations[language]) {
    console.error("Langue introuvable :", language);
    return;
  }

  const texts = translations[language];

  // Tous les éléments avec data-i18n
  document.querySelectorAll("[data-i18n]").forEach((element) => {

    const key = element.getAttribute("data-i18n");

    if (texts[key] !== undefined) {
      element.textContent = texts[key];
    }

  });

  // Change la langue HTML
  document.documentElement.lang = language;

  // Sauvegarde la langue choisie
  localStorage.setItem("nazFoundationLanguage", language);

  // Met à jour les boutons
  document.querySelectorAll(".lang").forEach((button) => {

    const buttonLanguage = button.getAttribute("data-lang");

    button.classList.toggle(
      "active",
      buttonLanguage === language
    );

  });

  console.log("Langue changée :", language);
}


// ===============================
// BOUTONS DE LANGUE
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".lang").forEach((button) => {

    button.addEventListener("click", () => {

      const language = button.getAttribute("data-lang");

      changeLanguage(language);

    });

  });


  // ===============================
  // LANGUE PAR DÉFAUT
  // ===============================

  const savedLanguage =
    localStorage.getItem("nazFoundationLanguage");

  if (savedLanguage && translations[savedLanguage]) {
    changeLanguage(savedLanguage);
  } else {
    changeLanguage("ht");
  }


  // ===============================
  // LIEN PAYPAL
  // ===============================

  const paypalButtons =
    document.querySelectorAll("[data-paypal]");

  paypalButtons.forEach((button) => {

    button.addEventListener("click", () => {

      window.open(
        "https://www.paypal.me/MorleusNazaire",
        "_blank",
        "noopener,noreferrer"
      );

    });

  });

});
```