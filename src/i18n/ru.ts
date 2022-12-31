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
    name: 'Лена Лушникова',
    desc: 'Пишу код на JS, люблю HTML и CSS. Влюбляюсь в разработку под Node.',
    github: 'Публикую код в GitHub.',
    email: 'Читаю входящие письма здесь.',
    job: {
      hint: 'Работаю с лучшими',
      title: 'Обучаю в Elbrus Bootcamp.',
    },
    intro: 'Привет. Я Лена, пишу код на JS. Работаю в часовом поясе UTC+3.',
  },
  link: {
    demo: 'демо',
    source: 'исходный код',
    site: 'сайт',
    landing: 'лендинг',
  },
  sample: {
    timer: {
      name: 'Таймер · 2022',
      desc: 'Счётчик для перерывов в лекции',
    },
    alphyn: {
      name: 'Альфин · 2022',
      desc: 'Резюме женской ИСБ команды "Альфин" (спортивные турниры, победы)',
    },
    site: {
      name: 'Этот сайт · 2021',
      desc: 'Краткий список моих работ, а также почта для связи',
    },
    weather: {
      name: 'Виджет погоды · 2021',
      desc: 'Показывает погоду в заданных местах или по геолокации устройства',
    },
    hours: {
      name: 'Правила по часам · 2020',
      desc: 'Попытка структурировать дневную жизнь на карантине (продлилась недолго)',
    },
  },
};

type LocaleType = typeof ru;

export default ru;
export { LocaleType };