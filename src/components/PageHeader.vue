<template>
  <header class="c-header">
    <base-transition>
      <nav :key="$i18n.locale">
        <nav-list>
          <nav-list-item v-for="view in views" :key="view.path">
            <page-header-item>
              <base-link-router :route="view" />
            </page-header-item>
          </nav-list-item>
        </nav-list>

        <page-header-item>
          <page-header-item-button-locale />
        </page-header-item>
      </nav>
    </base-transition>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

import { views } from '@/router';

import PageHeaderItemButtonLocale from '@/components/PageHeaderItemButtonLocale.vue';
import PageHeaderItem from '@/components/PageHeaderItem.vue';
import NavList from '@/components/NavList.vue';
import NavListItem from '@/components/NavListItem.vue';
import BaseLinkRouter from '@/components/BaseLinkRouter.vue';
import BaseTransition from '@/components/BaseTransition.vue';

export default Vue.extend({
  name: 'PageHeader',

  components: {
    PageHeaderItemButtonLocale,
    PageHeaderItem,
    NavList,
    NavListItem,
    BaseLinkRouter,
    BaseTransition,
  },

  data() {
    return {
      views,
    };
  },
});
</script>

<style lang="scss">
@use "@/assets/styles/_mixins";

.c-header {
  @include mixins.padding;
  position: relative;
  height: 2em;
  font-size: 0.8em;

  nav {
    position: absolute;
    top: 0;
    left: mixins.$gap;
    right: mixins.$gap;
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
