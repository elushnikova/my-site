<template>
  <div class="app" :lang="$i18n.locale">
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
});
</script>

<style lang="scss">
@use "@/assets/styles/_mixins";

* {
  box-sizing: border-box;
}

.app {
  @include mixins.maxWidth;
  margin: 0 auto;

  font-family: "Consolas", "Courier New", monospace;
  font-size: 16px;

  button {
    font-family: inherit;
  }
}
</style>
