import i18n from 'i18next';
import Fetch from 'i18next-fetch-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Fetch)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ko',
    backend: {
      loadPath: lng => {
        return `/messages/messages_${lng}.json`
      },
    },
    load: 'languageOnly',
    detection: {
      lookupLocalStorage: 'lang'
    },
    keySeparator: false,
    whitelist: ['en', 'ko', 'ja'],
    // Override default configurations for prefix and suffix to use dynamic values like {0}
    interpolation: {
      escapeValue: false,
      prefix: '{',
      suffix: '}'
    },
    debug: false,
    react: {
      wait: true
    }
  });

export default i18n;