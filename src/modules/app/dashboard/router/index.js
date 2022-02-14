export default [
  {
    name: 'App',
    path: '/app',
    meta: {
      title: 'ANA SAYFA',
    },
    component: () => import('../views/Dashboard.vue'),
  },
];
