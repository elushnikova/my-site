<template>
  <div id="app">
    <app-nav />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@/router';
import AppNav from '@/components/AppNav.vue';

export default Vue.extend({
  name: 'App',
  router,

  components: {
    AppNav,
  },
});
</script>
