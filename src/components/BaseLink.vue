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

<style lang="scss">
@use "@/assets/styles/_colors";

.c-link {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: colors.$link;
  transition: color 300ms;

  &:hover,
  &:visited {
    color: colors.$linkDarken1;
  }

  &:visited:hover {
    color: colors.$linkDarken2;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    display: inline-block;
    width: 0;
    height: 1px;
    color: inherit;
    border-bottom: 1px solid;
    transition: width 300ms;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {
    &::after {
      width: 100%;
    }
  }
}
</style>
