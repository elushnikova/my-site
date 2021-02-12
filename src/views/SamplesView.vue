<template>
  <div>
    <app-card v-for="sample in samples" :key="sample.slug" :item="sample" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppCard from '@/components/AppCard.vue';

export default Vue.extend({
  name: 'SamplesView',

  components: {
    AppCard,
  },

  data() {
    return {
      samples: [
        {
          slug: 'my-card',
          name: 'Визитка',
          desc: 'Карточка с ссылкой на Гитхаб и почтой для связи.',
          links: [
            { name: 'демо', url: 'https://elushnikova-card.netlify.app/demo' },
          ],
        },
        {
          slug: 'weather-widget',
          name: 'Виджет погоды',
          desc:
            'Показывает погоду в заданных местах или по геолокации устройства.',
          links: [
            { name: 'демо', url: 'https://owm-widget.netlify.app/demo' },
            {
              name: 'исходный код',
              url: 'https://gitlab.com/elushnikova/weather-widget',
            },
          ],
        },
        {
          slug: 'hour-rules',
          name: 'Правила по часам',
          desc:
            'Попытка структурировать дневную жизнь на карантине (продлилась недолго).',
          links: [
            { name: 'демо', url: 'https://hour-rules.netlify.app/' },
            {
              name: 'исходный код',
              url: 'https://github.com/elushnikova/hour-rules',
            },
          ],
        },
      ],
    };
  },
});
</script>
