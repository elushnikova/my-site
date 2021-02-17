<template>
  <div class="c-header__item">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PageHeaderItem',
});
</script>

<style lang="scss">
.c-header__item {
  display: flex;
  align-items: flex-end;

  &:last-child {
    margin-left: auto;
  }
}
</style>
