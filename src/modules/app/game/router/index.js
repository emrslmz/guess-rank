export default [
    {
        name: 'Game',
        path: 'game',
        meta: {
            title: 'Game page',
        },
        component: () => import('@/modules/app/game/views/Game.vue'),
    },
];
