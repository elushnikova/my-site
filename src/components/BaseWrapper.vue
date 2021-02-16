<template>
  <div class="c-wrapper">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseWrapper',
});
</script>
