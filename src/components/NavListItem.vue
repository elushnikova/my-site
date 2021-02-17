<template>
  <li class="c-nav-list__item" :class="{ 'c-nav-list__item--bare': bare }">
    <slot />
  </li>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NavListItem',

  props: {
    bare: { type: Boolean, default: false },
  },
});
</script>

<style lang="scss">
$mx: 0.5em;

.c-nav-list__item {
  line-height: 1.5;

  &:not(.c-nav-list__item--bare) {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-right: $mx;

      &::after {
        content: "·";
        margin-left: $mx;
      }
    }
  }
}
</style>
