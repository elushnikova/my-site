<template>
  <button class="c-header__button c-header__button--locale" @click="toggle()">
    {{ $t("locale.next.name") }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import { Location } from 'vue-router';

import AppLocale from '@/assets/AppLocale';

export default Vue.extend({
  name: 'PageHeaderItemButtonLocale',

  methods: {
    toggle(): void {
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
.c-header__button {
  font-size: inherit;
}
</style>
