import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import beforeEnter from '@/router/beforeEnter';
import load from '@/router/load';
import AppView from '@/assets/AppView';

Vue.use(VueRouter);

const views: Array<RouteConfig> = [
  {
    path: '',
    name: 'home',
    component: load(AppView.Home),
  },
  {
    path: 'samples',
    name: 'samples',
    component: load(AppView.Samples),
  },
  {
    path: 'projects',
    name: 'projects',
    component: load(AppView.Projects),
  },
];

const routes: Array<RouteConfig> = [
  {
    path: '/:locale',
    component: {
      render: (h) => h('router-view'),
    },
    beforeEnter,
    children: views,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
export { views };
