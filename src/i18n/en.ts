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
    name: 'Lena Lushnikova',
    desc: 'JS developer fond of HTML and CSS. Falling in love with Node.',
    github: 'Code samples',
    email: 'Contact email',
    intro: 'Greetings. I\'m Lena, JS developer. Working at UTC+3 time zone.',
  },
  link: {
    demo: 'demo',
    source: 'source code',
    site: 'site',
    landing: 'landing',
  },
  sample: {
    timer: {
      name: 'Timer',
      desc: 'Countdown timer for lecture breaks',
    },
    alphyn: {
      name: 'Alphyn',
      desc: 'Resume for HMB female team "Alphyn" (sport tournaments, wins)',
    },
    site: {
      name: 'This site',
      desc: 'Short list of my works, plus contact email',
    },
    weather: {
      name: 'Weather widget',
      desc: 'Displays weather for given places or current device geolocation',
    },
    hours: {
      name: 'Hour rules',
      desc: 'An attempt to structure daily life during lockdown (didn\'t last long)',
    },
  },
  project: {
    lig: {
      name: 'LIG',
      desc: 'Home meals delivery in Almaty, Kazakhstan',
    },
    smarter: {
      name: 'Smarter',
      desc: 'Discount service in Tashkent, Uzbekistan',
    },
    aqua: {
      name: 'Aqua Angels',
      desc: 'Premium water delivery from Iceland',
    },
  },
};

export default en;
