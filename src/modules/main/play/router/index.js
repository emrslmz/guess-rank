export default [{
    path: '/category',
    name: 'Category',
    component: () => import('@/modules/main/play/views/Play.vue'),
    children: [
        {
            path: '/category/valorant',
            name: 'PlayValorant',
            meta: {
                title: 'Play Valorant',
            },
            component: () => import('@/modules/main/play/components/stable/selected/PlayValorant.vue'),
        },
        {
            path: '/category/valorant/play/:id',
            name: 'PlayerValorant',
            meta: {
                title: 'Player Valorant',
            },
            component: () => import('@/modules/main/play/components/stable/play/PlayerValorant.vue'),
        },
    ]
}];