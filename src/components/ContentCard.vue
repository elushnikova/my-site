<template>
  <base-card class="c-content-card">
    <header>
      <h2>{{ item.name }}</h2>
      <p>{{ item.desc }}</p>
    </header>

    <footer v-if="item.links.length">
      <nav-list :column="wrapLinks">
        <nav-list-item
          :bare="wrapLinks"
          v-for="link in item.links"
          :key="link.name"
        >
          <base-link :link="link" />
        </nav-list-item>
      </nav-list>
    </footer>
  </base-card>
</template>

<script lang="ts">
import Vue from 'vue';

import BaseCard from '@/components/BaseCard.vue';
import BaseLink from '@/components/BaseLink.vue';
import NavList from '@/components/NavList.vue';
import NavListItem from '@/components/NavListItem.vue';

export default Vue.extend({
  name: 'ContentCard',

  components: {
    BaseCard,
    BaseLink,
    NavList,
    NavListItem,
  },

  props: {
    item: {
      type: Object,
      required: true,
      validator(value) {
        const hasName = typeof value.name === 'string';
        const hasDesc = typeof value.desc === 'string';
        return hasName && hasDesc;
      },
    },
    wrapLinks: { type: Boolean, default: false },
  },
});
</script>

<style lang="scss">
@use "@/assets/styles/_mixins";

.c-content-card {
  header,
  footer {
    @include mixins.padding;
  }

  header p {
    margin: 0;
  }
}
</style>
