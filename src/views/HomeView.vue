<template>
  <div>
    <app-card :item="myCard" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppView from '@/assets/AppView';
import AppCard from '@/components/AppCard.vue';

export default Vue.extend({
  name: AppView.Home,

  components: {
    AppCard,
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
