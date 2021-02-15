<template>
  <div id="app" :lang="$i18n.locale">
    <app-nav />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppNav from '@/components/AppNav.vue';

export default Vue.extend({
  name: 'App',

  components: {
    AppNav,
  },
});
</script>
