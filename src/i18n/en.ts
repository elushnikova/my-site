import AppLocale from '@/assets/AppLocale';
import AppLocaleName from '@/assets/AppLocaleName';
import { LocaleType } from '@/i18n/ru';

const en: LocaleType = {
  locale: {
    current: {
      name: AppLocaleName.English,
      code: AppLocale.English,
    },
    next: {
      name: AppLocaleName.Russian,
      code: AppLocale.Russian,
    },
  },
  view: {
    home: 'Home',
    samples: 'Code samples',
    projects: 'Projects',
  },
  my: {
    name: 'Elena Lushnikova',
    desc: 'frontend developer',
    github: 'Code samples',
    email: 'Contact email',
  },
  link: {
    demo: 'demo',
    source: 'source code',
    site: 'site',
    landing: 'landing',
  },
  sample: {
    card: {
      name: 'Personal card',
      desc: 'Small card with a link to GitHub and contact email.',
    },
    weather: {
      name: 'Weather widget',
      desc: 'Displays weather for given places or current device geolocation.',
    },
    hours: {
      name: 'Hour rules',
      desc: 'An attempt to structure daily life during lockdown (didn\'t last long)',
    },
  },
  project: {
    lig: {
      name: 'LIG',
      desc: 'Home meals delivery in Almaty, Kazakhstan.',
    },
    smarter: {
      name: 'Smarter',
      desc: 'Discount service in Tashkent, Uzbekistan.',
    },
    aqua: {
      name: 'Aqua Angels',
      desc: 'Premium water delivery from Iceland.',
    },
  },
};

export default en;
