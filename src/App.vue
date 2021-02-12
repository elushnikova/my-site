<template>
  <div id="app" :lang="$i18n.locale">
    <app-nav />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import i18n from '@/i18n';
import router from '@/router';
import AppNav from '@/components/AppNav.vue';

export default Vue.extend({
  name: 'App',
  i18n,
  router,

  components: {
    AppNav,
  },
});
</script>
