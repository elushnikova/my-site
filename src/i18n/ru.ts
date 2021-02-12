import AppLocale from '@/assets/AppLocale';
import AppLocaleName from '@/assets/AppLocaleName';

const ru = {
  locale: {
    current: {
      name: AppLocaleName.Russian,
      code: AppLocale.Russian,
    },
  },
  view: {
    home: 'Главная',
    samples: 'Примеры кода',
    projects: 'Проекты',
  },
  my: {
    name: 'Елена Лушникова',
    desc: 'фронтенд-разработчик',
    github: 'Примеры кода',
    email: 'Почта для связи',
  },
  link: {
    demo: 'демо',
    source: 'исходный код',
    site: 'сайт',
    landing: 'лендинг',
  },
  sample: {
    card: {
      name: 'Визитка',
      desc: 'Карточка с ссылкой на Гитхаб и почтой для связи.',
    },
    weather: {
      name: 'Виджет погоды',
      desc: 'Показывает погоду в заданных местах или по геолокации устройства.',
    },
    hours: {
      name: 'Правила по часам',
      desc: 'Попытка структурировать дневную жизнь на карантине (продлилась недолго).',
    },
  },
  project: {
    lig: {
      name: 'LIG',
      desc: 'Доставка домашней еды в Алматы, Казахстан.',
    },
    smarter: {
      name: 'Smarter',
      desc: 'Сервис скидок в Ташкенте, Узбекистан.',
    },
    aqua: {
      name: 'Aqua Angels',
      desc: 'Доставка премиальной воды из Исландии.',
    },
  },
};

type LocaleType = typeof ru;

export default ru;
export { LocaleType };
