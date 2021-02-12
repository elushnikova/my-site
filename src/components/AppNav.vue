<template>
  <nav class="app-nav">
      <ul>
        <li v-for="route in routes" :key="route.path">
          <router-link :to="route.path">
            {{ route.name }}
          </router-link>
        </li>
      </ul>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { routes } from '@/router';

export default Vue.extend({
  name: 'AppNav',

  data() {
    return {
      routes,
    };
  },
});
</script>

<style lang="scss">
.app-nav {
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  li:not(:last-child) {
    margin-right: 8px;
  }
}
</style>
