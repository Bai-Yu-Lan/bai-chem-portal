import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import zhCN from './zh-CN.json';
import en from './en.json';

const resources = {
    cn: {
        translation: zhCN,
    },
    en: {
        translation: en,
    },

};

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: localStorage.getItem('lang') === 'en' ? 'en' : 'cn',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;