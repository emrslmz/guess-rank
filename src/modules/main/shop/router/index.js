export default [{
    path: '/shop',
    name: 'Shop',
    component: () => import('@/modules/main/shop/views/Shop.vue'),
    // children: [
    //     {
    //         path: '/category/valorant',
    //         name: 'PlayValorant',
    //         meta: {
    //             title: 'Play Valorant',
    //         },
    //         component: () => import('@/modules/main/play/components/stable/selected/PlayValorant.vue'),
    //     },
    // ]
}];