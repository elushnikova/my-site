<template>
  <base-wrapper>
    <content-card v-for="sample in samples" :key="sample.slug" :item="sample" />
  </base-wrapper>
</template>

<script lang="ts">
import Vue from 'vue';
import AppView from '@/assets/AppView';

import BaseWrapper from '@/components/BaseWrapper.vue';
import ContentCard from '@/components/ContentCard.vue';

export default Vue.extend({
  name: AppView.Projects,

  components: {
    BaseWrapper,
    ContentCard,
  },

  metaInfo() {
    return {
      title: this.$t('view.samples') as string,
    };
  },

  data() {
    return {
      samples: [
        {
          slug: 'timer',
          name: this.$t('sample.timer.name'),
          desc: this.$t('sample.timer.desc'),
          links: [
            {
              name: this.$t('link.demo'),
              url: 'https://timer.elushnikova.dev/',
            },
            {
              name: this.$t('link.source'),
              url: 'https://github.com/elushnikova/timer',
            },
          ],
        },
        {
          slug: 'alphyn',
          name: this.$t('sample.alphyn.name'),
          desc: this.$t('sample.alphyn.desc'),
          links: [
            {
              name: this.$t('link.demo'),
              url: 'https://alphyn.team/',
            },
            {
              name: this.$t('link.source'),
              url: 'https://github.com/elushnikova/alphyn',
            },
          ],
        },
        {
          slug: 'my-site',
          name: this.$t('sample.site.name'),
          desc: this.$t('sample.site.desc'),
          links: [
            {
              name: this.$t('link.source'),
              url: 'https://github.com/elushnikova/my-site',
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
              url: 'https://github.com/elushnikova/weather-widget',
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
