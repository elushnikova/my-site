<template>
  <div class="app">
    <page-header />
    <router-view :key="$i18n.locale" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import PageHeader from '@/components/PageHeader.vue';

export default Vue.extend({
  name: 'App',

  components: {
    PageHeader,
  },

  metaInfo() {
    return {
      titleTemplate: `${this.$t('my.name')} · %s`,
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          name: 'description',
          content: this.$t('my.intro') as string,
        },
      ],
    };
  },
});
</script>

<style lang="scss">
@use "@/assets/styles/_mixins";

* {
  box-sizing: border-box;
}

.app {
  @include mixins.maxWidth;
  position: relative;
  margin: 0 auto;

  font-family: "Ubuntu Mono", "Consolas", monospace;
  font-size: 16px;

  button {
    font-family: inherit;
  }
}
</style>
