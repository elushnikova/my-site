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
          name: this.$t('sample.card.name'),
          desc: this.$t('sample.card.desc'),
          links: [
            {
              name: this.$t('link.demo'),
              url: 'https://elushnikova-card.netlify.app/demo',
            },
          ],
        },
        {
          slug: 'weather-widget',
          name: this.$t('sample.weather.name'),
          desc: this.$t('sample.weather.desc'),
          links: [
            {
              name: this.$t('link.demo'),
              url: 'https://owm-widget.netlify.app/demo',
            },
            {
              name: this.$t('link.source'),
              url: 'https://gitlab.com/elushnikova/weather-widget',
            },
          ],
        },
        {
          slug: 'hour-rules',
          name: this.$t('sample.hours.name'),
          desc: this.$t('sample.hours.desc'),
          links: [
            {
              name: this.$t('link.demo'),
              url: 'https://hour-rules.netlify.app/',
            },
            {
              name: this.$t('link.source'),
              url: 'https://github.com/elushnikova/hour-rules',
            },
          ],
        },
      ],
    };
  },
});
</script>
