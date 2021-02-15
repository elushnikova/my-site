<template>
  <nav class="app-nav">
    <ul>
      <li v-for="route in views" :key="route.path">
        <router-link :to="{ name: route.name, params: { locale: $i18n.locale } }">
          {{ $t(`view.${route.name}`) }}
        </router-link>
      </li>

      <li class="ml-auto">
        <button @click="toggleLocale()">
          {{ $t('locale.next.name') }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { Location } from 'vue-router';
import { views } from '@/router';
import AppLocale from '@/assets/AppLocale';

export default Vue.extend({
  name: 'AppNav',

  data() {
    return {
      views,
    };
  },

  methods: {
    toggleLocale() {
      const nextLocale = this.$t('locale.next.code') as AppLocale;
      const nextLocation: Location = {
        name: this.$route.name as string,
        params: { locale: nextLocale },
      };

      this.$i18n.locale = nextLocale;
      this.$router.push(nextLocation);
    },
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
