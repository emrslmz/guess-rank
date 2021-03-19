export default [{
    path: '/admin/other/game',
    name: 'AdminGameCategory',
    component: () => import('@/modules/admin/other/game-category/views/GameCategory.vue'),
    // children: [
    //     {
    //         path: '/admin/other/game',
    //         meta: {
    //             title: 'Game Category Setting'
    //         },
    //         component: () => import('@/modules/admin/other/game-category/router/'),
    //     },
    // ]
}];
