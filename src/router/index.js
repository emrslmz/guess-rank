import { createRouter, createWebHistory } from 'vue-router';

import AppChildren from './app/index';
import AuthChildren from './auth/index';
import PublicChildren from './public/index';

const routes = [
  {
    path: '/',
    component: () => import('../modules/app/Index.vue'),
    children: AppChildren,
  },
  {
    path: '/',
    component: () => import('../modules/auth/Index.vue'),
    children: AuthChildren,
  },
  {
    path: '',
    component: () => import('../modules/public/Index.vue'),
    children: PublicChildren,
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes,
});

export default router;
