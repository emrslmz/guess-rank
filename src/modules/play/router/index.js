export default [{
    path: '/play',
    name: 'Play',
    component: () => import('@/modules/play/views/Play.vue'),
    children: [
        {
            path: '/valorant',
            meta: {
                title: 'PlayValorant',
            },
            component: () => import('@/modules/play/components/stable/selected/PlayValorant.vue'),
        },
    ]
}];
