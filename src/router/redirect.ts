import { RawLocation } from 'vue-router';
import AppLocale from '@/assets/AppLocale';

const redirect = (): RawLocation => ({
  name: 'home',
  params: {
    locale: AppLocale.Russian,
  },
});

export default redirect;
