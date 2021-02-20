export default [{
    path: '/',
    name: 'HomePageDashboard',
    component: () => import('@/modules/home/views/Home.vue'),
    children: [
        {
            path: 'sign-in-up',
            meta: {
                title: 'StartPage',
            },
            component: () => import('@/modules/home/components/LoginRegister.vue'),
        },
        {
            path: 'play',
            meta: {
                title: 'PlayPage',
            },
            component: () => import('@/modules/home/components/play/Play.vue'),
        },

    ]
}];
