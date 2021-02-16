<template>
  <base-transition>
    <div class="c-wrapper" :key="$i18n.locale">
      <slot />
    </div>
  </base-transition>
</template>

<script lang="ts">
import Vue from 'vue';

import BaseTransition from '@/components/BaseTransition.vue';

export default Vue.extend({
  name: 'BaseWrapper',

  components: {
    BaseTransition,
  },
});
</script>

<style lang="scss">
.c-wrapper {
  position: absolute;
  width: 100%;
}
</style>
