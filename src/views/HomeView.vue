<template>
  <div>
    <app-card :item="myCard" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppCard from '@/components/AppCard.vue';

export default Vue.extend({
  name: 'HomeView',

  components: {
    AppCard,
  },

  data() {
    return {
      myCard: {
        slug: 'my-card',
        name: 'Елена Лушникова',
        desc: 'фронтенд-разработчик',
        links: [
          { title: 'Примеры кода', name: 'github.com/elushnikova', url: 'https://github.com/elushnikova' },
          { title: 'Почта для связи', name: 'hello@elushnikova.dev', url: 'mailto:hello@elushnikova.dev' },
        ],
      },
    };
  },
});
</script>
