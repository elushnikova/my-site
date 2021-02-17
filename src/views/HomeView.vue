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
            title: this.$t('my.github'),
            name: 'github.com/elushnikova',
            url: 'https://github.com/elushnikova',
          },
          {
            title: this.$t('my.email'),
            name: 'hello@elushnikova.dev',
            url: 'mailto:hello@elushnikova.dev',
          },
        ],
      },
    };
  },
});
</script>
