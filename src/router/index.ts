import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import i18n from '@/i18n';
import HomeView from '@/views/HomeView.vue';
import SamplesView from '@/views/SamplesView.vue';
import ProjectsView from '@/views/ProjectsView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: i18n.t('view.home') as string,
    component: HomeView,
  },
  {
    path: '/samples',
    name: i18n.t('view.samples') as string,
    component: SamplesView,
  },
  {
    path: '/projects',
    name: i18n.t('view.projects') as string,
    component: ProjectsView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
export { routes };
