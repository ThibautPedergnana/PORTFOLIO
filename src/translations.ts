type Language = "fr" | "en";

export const translations = {
  fr: {
    frontendDeveloper: "DÉVELOPPEUR FRONTEND",
    hello: "Bonjour !",
    iam: "Je suis Thibaut",
    webDeveloper: "Développeur Web",
    developerDescription:
      "Je développe des interfaces web optimisées, garantissant une expérience utilisateur fluide et intuitive. J'intègre des APIs, gère l'authentification et me concentre sur la performance des applications.",
    viewWork: "Voir mon travail",
    download: "Télécharger CV",
    skills: "Compétences",
    skillsList: "Liste des outils et technologies que j'utilise :",
    sportsResults: "Résultats Sportifs",
    rcpl: "Sélection de Champion Aléatoire",
    booking: " Clone de Booking.com",
    hrnet: "Gestionnaire d'Employés",
    groupomania: "Réseau Social d'Entreprise",
    contactName: "Nom",
    contactNameInput: "Votre nom",
    contactEmailInput: "Votre adresse mail",
    contactMessageInput: "Votre message",
    contactOther: "Autres",
    contactSend: "Envoyer",
    view: "Voir",
    copy: "Copier dans le presse-papier",
    copied: '"{value}" a été copié dans le presse-papier !',
    messageSent: "Votre message a été envoyé avec succès !",
    // Ajoute d'autres traductions FR ici
  },
  en: {
    frontendDeveloper: "FRONTEND DEVELOPER",
    hello: "Hello !",
    iam: "I am Thibaut",
    webDeveloper: "Web Developer",
    developerDescription:
      "I develop optimized web interfaces, ensuring a smooth and intuitive user experience. I integrate APIs, manage authentication, and focus on application performance.",
    viewWork: "View my work",
    download: "Download CV",
    skills: "Skills",
    skillsList: "List of tools and technologies that I use :",
    sportsResults: "Sports Results Review",
    rcpl: "Random Champion Picker LoL",
    booking: "Booking.com Clone",
    hrnet: "Employees Management",
    groupomania: "Corporate Social Network",
    contactName: "Name",
    contactNameInput: "Your Name",
    contactEmailInput: "Your email",
    contactMessageInput: "Your message",
    contactOther: "Other Ways",
    contactSend: "Send",
    view: "View",
    copy: "Copy in clipboard",
    copied: '"{value}" has been copied to the clipboard!',
    messageSent: "Your message has been successfully sent!",
    // Ajoute d'autres traductions EN ici
  },
};

export const getTranslation = (
  language: Language,
  key: keyof (typeof translations)["fr"]
) => {
  return translations[language][key];
};
