import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SamplesView from '@/views/SamplesView.vue';
import ProjectsView from '@/views/ProjectsView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Главная',
    component: HomeView,
  },
  {
    path: '/samples',
    name: 'Примеры кода',
    component: SamplesView,
  },
  {
    path: '/projects',
    name: 'Проекты',
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
