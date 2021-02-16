<template>
  <base-list class="c-nav-list" :class="{'c-nav-list--column': column}">
    <slot />
  </base-list>
</template>

<script lang="ts">
import Vue from 'vue';

import BaseList from '@/components/BaseList.vue';

export default Vue.extend({
  name: 'NavList',

  components: {
    BaseList,
  },

  props: {
    column: { type: Boolean, default: false },
  },
});
</script>

<style lang="scss">
.c-nav-list {
  display: flex;
  list-style-type: none;
}

.c-nav-list--column {
  flex-direction: column;
}
</style>
