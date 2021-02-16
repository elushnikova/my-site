<template>
  <transition name="base">
    <slot />
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseTransition',
});
</script>

<style lang="scss">
.base-enter-active,
.base-leave-active {
  transition: opacity 100ms;
}

.base-enter,
.base-leave-to {
  opacity: 0;
}
</style>
