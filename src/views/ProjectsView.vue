<template>
  <base-wrapper>
    <content-card v-for="project in projects" :key="project.slug" :item="project" />
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
      title: this.$t('view.projects') as string,
    };
  },

  data() {
    return {
      projects: [
        {
          slug: 'lig-kz',
          name: this.$t('project.lig.name'),
          desc: this.$t('project.lig.desc'),
          links: [
            { name: this.$t('link.site'), url: 'https://lig.kz/' },
          ],
        },
        {
          slug: 'smarter-uz',
          name: this.$t('project.smarter.name'),
          desc: this.$t('project.smarter.desc'),
          links: [
            { name: this.$t('link.landing'), url: 'https://how.smarter.uz/' },
          ],
        },
        {
          slug: 'aqua-angels',
          name: this.$t('project.aqua.name'),
          desc: this.$t('project.aqua.desc'),
          links: [
            { name: this.$t('link.site'), url: 'https://aqua-angels.com/' },
          ],
        },
      ],
    };
  },
});
</script>
