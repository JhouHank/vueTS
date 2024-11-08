import type { RouterOptions, Router, RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  //  { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
  //  { path: '/my', name: 'My', component: () => import('@/views/My.vue') },
];

const options: RouterOptions = {
  history: createWebHashHistory(),
  routes,
};

const router: Router = createRouter(options);

export default router;
