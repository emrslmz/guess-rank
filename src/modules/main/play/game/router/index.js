export default [{
    path: '/play/game',
    name: 'GamesHome',
    component: () => import('@/modules/main/play/game/views/Game.vue'),
    children: [
        {
            path: '/play/game/:id',
            name: 'SelectLevel',
            meta: {
                title: 'SelectLevelPage',
            },
            component: () => import('@/modules/main/play/game/components/SelectVideo.vue'),
        },
        {
            path: '/play/game/:id/video/:key',
            name: 'BeforeWatchVideo',
            meta: {
                title: 'WatchVideoPage',
            },
            component: () => import('@/modules/main/play/game/components/BeforeWatchVideo.vue'),
        },
    ]
}];
