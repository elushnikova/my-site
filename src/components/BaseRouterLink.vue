<template>
  <router-link :to="target">
    {{ text }}
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import { Location } from 'vue-router';
import { TranslateResult } from 'vue-i18n';

export default Vue.extend({
  name: 'BaseRouterLink',

  props: {
    route: {
      type: Object,
      required: true,
      validator(value) {
        const hasName = typeof (value.name) === 'string';
        return hasName;
      },
    },
  },

  computed: {
    text(): TranslateResult {
      const translationKey = `view.${this.route.name}`;
      return this.$t(translationKey);
    },

    target(): Location {
      return {
        name: this.route.name,
        params: {
          locale: this.$i18n.locale,
        },
      };
    },
  },
});
</script>

<style lang="scss">
a:not(.router-link-exact-active) {
  text-decoration: none;
}
</style>
