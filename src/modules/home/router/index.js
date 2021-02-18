export default [{
    path: '/',
    name: 'HomePageDashboard',
    component: () => import('@/modules/home/views/Home.vue'),
    children: [
        {
            path: 'start',
            meta: {
                title: 'StartPage',
            },
            component: () => import('@/modules/home/components/Start.vue'),
        },

    ]
}];
