import i18n from 'i18next';
import Fetch from 'i18next-fetch-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

/**
 * A function that receives the content of the file and returns an JSON object.
 * 
 * @param {data} properties 
 */
const parseProperties = (properties) => {
  return properties.split('\n')
    .filter(line => '' !== line.trim())
    .map(line => line.split('='))
    .map(tokens => ({
      [tokens[0]]: tokens[1]
    }))
    .reduce((properties, property) => ({
      ...properties,
      ...property
    }), {})
}

i18n
  .use(Fetch)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'ko',
    backend: {
      loadPath: lng => `/messages/messages_${lng}.properties`,
      parse: data => parseProperties(data)
    },
    detection: {
      lookupLocalStorage: 'lang'
    },
    whitelist: ['en', 'ko', 'ja'],
    // Override default configurations for prefix and suffix to use dynamic values like {0}
    interpolation: {
      escapeValue: false,
      prefix: '{',
      suffix: '}'
    },
    debug: false
  });

export default i18n;