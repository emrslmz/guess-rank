export default [
    {
        name: 'Market',
        path: 'market',
        meta: {
            title: 'Market page',
        },
        component: () => import('@/modules/app/market/views/Market.vue'),
    },
];
