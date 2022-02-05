export default [
    {
        path: 'game',
        name: 'Game',
        meta: {
            title: 'Game page',
        },
        component: () => import('../views/Game.vue'),
    },
];
