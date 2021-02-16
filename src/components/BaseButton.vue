<template>
  <button class="c-button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseButton',
});
</script>

<style lang="scss">
@use "@/assets/styles/_colors";

.c-button {
  padding: 0.2em 1em;
  background-color: colors.$greyLighten;
  border: 1px solid colors.$greyLighten;
  border-radius: 1em;
  transition: border-color 300ms;

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {
    border-color: colors.$grey;
  }
}
</style>
