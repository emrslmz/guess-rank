export default [{
    path: '/admin/other/game',
    name: 'AdminGame',
    component: () => import('@/modules/admin/other/game/views/AdminGame.vue'),
    children: [
        {
            path: '/admin/other/game/all',
            meta: {
                title: 'Added All Game'
            },
            component: () => import('@/modules/admin/other/game/components/AdminAddedGame.vue'),
        },
        {
            path: '/admin/other/game/add',
            meta: {
                title: 'Add Game'
            },
            component: () => import('@/modules/admin/other/game/components/AdminAddGame.vue'),
        },
    ]
}];
