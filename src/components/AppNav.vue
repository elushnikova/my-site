<template>
  <nav class="app-nav">
    <ul>
      <li v-for="route in views" :key="route.path">
        <router-link :to="{ name: route.name, params: { locale: $i18n.locale } }">
          {{ $t(`view.${route.name}`) }}
        </router-link>
      </li>

      <li class="ml-auto">
        <button @click="$i18n.locale = $t('locale.next.code')">
          {{ $t('locale.next.name') }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { views } from '@/router';

export default Vue.extend({
  name: 'AppNav',

  data() {
    return {
      views,
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

.ml-auto {
  margin-left: auto;
}
</style>
