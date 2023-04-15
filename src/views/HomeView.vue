<template>
  <base-wrapper>
    <content-card :item="myCard" wrap-links />
  </base-wrapper>
</template>

<script lang="ts">
import Vue from 'vue';
import AppView from '@/assets/AppView';

import BaseWrapper from '@/components/BaseWrapper.vue';
import ContentCard from '@/components/ContentCard.vue';

export default Vue.extend({
  name: AppView.Home,

  components: {
    BaseWrapper,
    ContentCard,
  },

  metaInfo() {
    return {
      title: this.$t('my.desc') as string,
    };
  },

  data() {
    return {
      myCard: {
        slug: 'my-card',
        name: this.$t('my.name'),
        desc: this.$t('my.desc'),
        links: [
          {
            name: this.$t('my.job'),
            url: 'https://www.linkedin.com/in/elushnikova/',
          },
          {
            title: 'github.com/elushnikova',
            name: this.$t('my.github'),
            url: 'https://github.com/elushnikova',
          },
          {
            title: 'hello@elushnikova.dev',
            name: this.$t('my.email'),
            url: 'mailto:hello@elushnikova.dev',
          },
          {
            title: 'calendly.com/elushnikova/chat',
            name: this.$t('my.review'),
            url: 'https://calendly.com/elushnikova/chat',
          },
        ],
      },
    };
  },
});
</script>
