<template>
  <ul class="c-list">
    <slot />
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseList',
});
</script>

<style lang="scss">
.c-list {
  margin: 0;
  padding: 0;
}
</style>
