import Vue from 'vue';
import VueI18n from 'vue-i18n';
import AppLocale from '@/assets/AppLocale';
import ru from '@/i18n/ru';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: AppLocale.Russian,
  messages: {
    ru,
  },
});

export default i18n;
