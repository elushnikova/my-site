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
    github: 'Publishing code at GitHub.',
    email: 'Reading your emails here.',
    review: 'Can review your code.',
    job: 'Open to work in web development.',
    intro: 'Greetings. I\'m Lena, JS developer. Working at UTC+3 time zone.',
  },
  link: {
    demo: 'demo',
    source: 'source code',
    site: 'site',
    landing: 'landing',
  },
  sample: {
    elevator: {
      name: 'Elevator · 2023',
      desc: 'Simplified model of an elevator. Proof of concept for student task and a source of screenshots/casts for task description.',
    },
    timer: {
      name: 'Timer · 2022',
      desc: 'Countdown timer for lecture breaks',
    },
    alphyn: {
      name: 'Alphyn · 2022',
      desc: 'Resume for HMB female team "Alphyn" (sport tournaments, wins)',
    },
    site: {
      name: 'This site · 2021',
      desc: 'Short list of my works, plus contact email',
    },
    weather: {
      name: 'Weather widget · 2021',
      desc: 'Displays weather for given places or current device geolocation',
    },
    hours: {
      name: 'Hour rules · 2020',
      desc: 'An attempt to structure daily life during lockdown (didn\'t last long)',
    },
  },
};

export default en;
