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
        {
            path: '/play/game/:id/level/:key',
            name: 'SelectVideo',
            meta: {
                title: 'SelectVideoPage',
            },
            component: () => import('@/modules/main/play/game/components/SelectVideo.vue'),
        },
        {
            path: '/play/game/:id/level/:key/:id',
            name: 'AfterWatchVideo',
            meta: {
                title: 'WatchVideoPage',
            },
            component: () => import('@/modules/main/play/game/components/BeforeWatchVideo.vue'),
        },
    ]
}];
