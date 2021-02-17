import { NavigationGuard, Location } from 'vue-router';
import i18n from '@/i18n';
import AppLocale from '@/assets/AppLocale';

const beforeEnter: NavigationGuard = (to, _, next) => {
  const { locale } = to.params;
  const isSupported = Object.values(AppLocale).includes(locale as AppLocale);
  const isCurrent = i18n.locale === locale;

  if (!isSupported) {
    const fallbackLocation: Location = {
      name: to.name as string,
      params: { locale: AppLocale.Russian },
    };
    return next(fallbackLocation);
  }

  if (!isCurrent) {
    i18n.locale = locale;
  }

  return next();
};

export default beforeEnter;
