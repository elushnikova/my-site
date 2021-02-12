import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import i18n from '@/i18n';
import load from '@/router/load';
import AppView from '@/assets/AppView';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: i18n.t('view.home') as string,
    component: load(AppView.Home),
  },
  {
    path: '/samples',
    name: i18n.t('view.samples') as string,
    component: load(AppView.Samples),
  },
  {
    path: '/projects',
    name: i18n.t('view.projects') as string,
    component: load(AppView.Projects),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
export { routes };
