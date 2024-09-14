// next-i18next.config.js
module.exports = {
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'en',
        localeDetection: true,
    },
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
};
