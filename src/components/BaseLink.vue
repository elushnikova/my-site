<template>
  <a
    class="c-link"
    :href="link.url"
    :title="link.title"
    :target="getTarget(link.url)"
  >
    {{ link.name }}
  </a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseLink',

  props: {
    link: {
      type: Object,
      required: true,
      validator(value) {
        const hasName = typeof value.name === 'string';
        const hasUrl = typeof value.url === 'string';
        return hasName && hasUrl;
      },
    },
  },

  methods: {
    getTarget(url: string): undefined | string {
      const isTel = url.match(/^tel:/);
      const isMail = url.match(/^mailto:/);
      return isTel || isMail ? undefined : '_blank';
    },
  },
});
</script>
