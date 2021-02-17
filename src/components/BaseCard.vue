<template>
  <article class="c-card">
    <slot />
  </article>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseCard',
});
</script>

<style lang="scss">
@use "@/assets/styles/_mixins";

.c-card {
  @include mixins.maxWidth;
  margin-top: 1em;

  &:last-child {
    margin-bottom: 3em;
  }
}
</style>
