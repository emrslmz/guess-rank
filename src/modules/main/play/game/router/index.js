export default [{
    path: '/play/game',
    name: 'Games',
    component: () => import('@/modules/main/play/game/views/Game.vue'),
    children: [
        {
            path: '/play/game/:id',
            name: 'SelectLevel',
            meta: {
                title: 'SelectLevelPage',
            },
            component: () => import('@/modules/main/play/game/components/SelectLevel.vue'),
        },
    ]
}];
