// import i18next from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import { initReactI18next } from 'react-i18next';

// i18next.use(LanguageDetector).use(initReactI18next).init({
//   debug: true,
//   // lng: 'en',
//   fallbackLng: 'en',
//   returnObjects: true,
// });

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import language resources
import translationEN from '../src/components/locales/en/translation.json';
import translationUR from '../src/components/locales/ur/translation.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      ur: {
        translation: translationUR,
      },
    },
    lng: 'en', // Set default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
