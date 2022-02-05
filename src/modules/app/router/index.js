export default [{
    path: 'app',
    name: 'App',
    component: () => import('../views/App.vue'),
    children: [
        {
            path: 'game',
            name: 'Game',
            meta: {
                title: 'Game page',
            },
            component: () => import('../../app/modules/game/views/Game.vue'),
        },
    ]
}];
