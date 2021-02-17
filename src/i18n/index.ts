import Vue from 'vue';
import VueI18n from 'vue-i18n';
import AppLocale from '@/assets/AppLocale';
import ru from '@/i18n/ru';
import en from '@/i18n/en';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: AppLocale.Russian,
  messages: {
    ru,
    en,
  },
});

export default i18n;
