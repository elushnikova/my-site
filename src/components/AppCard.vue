<template>
  <article lang="ru">
    <header>
      <h2>{{ item.name }}</h2>
      <p>{{ item.desc }}</p>
    </header>
    <footer v-if="item.links.length">
      <ul>
        <li v-for="link in item.links" :key="link.name">
          <a :href="link.url" :target="getTarget(link.url)" :title="link.title">
            {{ link.name }}
          </a>
        </li>
      </ul>
    </footer>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppCard',

  props: {
    item: { type: Object, required: true },
  },

  methods: {
    getTarget(url: string) {
      const isTel = url.match(/^tel:/);
      const isMail = url.match(/^mailto:/);
      return isTel || isMail ? undefined : '_blank';
    },
  },
});
</script>
