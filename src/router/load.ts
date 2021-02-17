import AppView from '@/assets/AppView';

function load(view: AppView) {
  return () => import(`@/views/${view}.vue`);
}

export default load;
