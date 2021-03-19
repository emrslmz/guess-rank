export default [{
    path: '/admin/other/game',
    name: 'AdminGameCategory',
    component: () => import('@/modules/admin/other/game-category/views/GameCategory.vue'),
    children: [
        {
            path: '/admin/other/game/all',
            meta: {
                title: 'Added All Game Category'
            },
            component: () => import('@/modules/admin/other/game-category/components/AddedGameCategory.vue'),
        },
        {
            path: '/admin/other/game/add',
            meta: {
                title: 'Add Game Category'
            },
            component: () => import('@/modules/admin/other/game-category/components/AddGameCategory.vue'),
        },
    ]
}];
