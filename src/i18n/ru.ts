import AppLocale from '@/assets/AppLocale';
import AppLocaleName from '@/assets/AppLocaleName';

const ru = {
  locale: {
    current: {
      name: AppLocaleName.Russian,
      code: AppLocale.Russian,
    },
    next: {
      name: AppLocaleName.English,
      code: AppLocale.English,
    },
  },
  view: {
    home: 'Главная',
    samples: 'Примеры кода',
    projects: 'Проекты',
  },
  my: {
    name: 'Елена Лушникова',
    desc: 'Фронтенд-разработчик',
    github: 'Примеры кода',
    email: 'Почта для связи',
    intro: 'Привет. Я Елена, фронтенд-разработчик. Работаю в часовом поясе UTC+3.',
  },
  link: {
    demo: 'демо',
    source: 'исходный код',
    site: 'сайт',
    landing: 'лендинг',
  },
  sample: {
    site: {
      name: 'Этот сайт',
      desc: 'Краткий список моих работ, а также почта для связи',
    },
    weather: {
      name: 'Виджет погоды',
      desc: 'Показывает погоду в заданных местах или по геолокации устройства',
    },
    hours: {
      name: 'Правила по часам',
      desc: 'Попытка структурировать дневную жизнь на карантине (продлилась недолго)',
    },
  },
  project: {
    lig: {
      name: 'LIG',
      desc: 'Доставка домашней еды в Алматы, Казахстан',
    },
    smarter: {
      name: 'Smarter',
      desc: 'Сервис скидок в Ташкенте, Узбекистан',
    },
    aqua: {
      name: 'Aqua Angels',
      desc: 'Доставка премиальной воды из Исландии',
    },
  },
};

type LocaleType = typeof ru;

export default ru;
export { LocaleType };
