<template>
  <div>
    <app-card v-for="project in projects" :key="project.slug" :item="project" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppCard from '@/components/AppCard.vue';

export default Vue.extend({
  name: 'ProjectsView',

  components: {
    AppCard,
  },

  data() {
    return {
      projects: [
        {
          slug: 'lig-kz',
          name: 'LIG',
          desc: 'Доставка домашней еды в Алматы, Казахстан.',
          links: [{ name: 'сайт', url: 'https://lig.kz/' }],
        },
        {
          slug: 'smarter-uz',
          name: 'Smarter',
          desc: 'Сервис скидок в Ташкенте, Узбекистан.',
          links: [
            { name: 'лендинг', url: 'https://how.smarter.uz/' },
            { name: 'сайт', url: 'https://smarter.uz/' },
          ],
        },
        {
          slug: 'aqua-angels',
          name: 'Aqua Angels',
          desc: 'Доставка премиальной воды из Исландии.',
          links: [{ name: 'сайт', url: 'https://aqua-angels.com/' }],
        },
      ],
    };
  },
});
</script>
