'use client'

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    "Ak Jol": "Ak Jol",
                    "Tour list": "Tour list",
                    "Booking": "Booking",
                    "Account": "Account",
                    "About": "About",
                    "profile": "Profile",
                    "wishlists": "Wishlists",
                    "support": "Support",
                    "log out": "Log out",
                }
            },
            ru: {
                translation: {
                    "Ak Jol": "Ак Жол",
                    "Tour list": "Список туров",
                    "Booking": "Бронирование",
                    "Account": "Аккаунт",
                    "About": "О нас",
                    "profile": "Профиль",
                    "wishlists": "Список желаемого",
                    "support": "Поддержка",
                    "log out": "Выйти",
                }
            },
            kg: {
                translation: {
                    "Ak Jol": "Ак Жол",
                    "Tour list": "Турлар тизмеги",
                    "Booking": "Билеттерди броньдоо",
                    "Account": "Аккаунт",
                    "About": "Биз жөнүндө",
                    "profile": "Профиль",
                    "wishlists": "Тилектер тизмеги",
                    "support": "Колдоо",
                    "log out": "Чыгуу",
                }
            }
        }
    });

export default i18n;
