export default [{
    path: '/',
    name: 'HomePageDashboard',
    component: () => import('@/modules/home/views/Home.vue'),
    children: [
        {
            path: 'emres',
            meta: {
                title: 'Main',
            },
            component: () => import('@/modules/home/components/emres.vue'),
        },

    ]
}];
