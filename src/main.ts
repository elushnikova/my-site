import Vue from 'vue';
import VueMeta from 'vue-meta';
import i18n from '@/i18n';
import router from '@/router';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueMeta);

new Vue({
  i18n,
  router,
  render: (h) => h(App),
}).$mount('#app');
