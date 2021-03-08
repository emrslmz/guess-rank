export default [{
    path: '/start',
    name: 'StartPage',
    component: () => import('@/modules/main/start/views/Start.vue'),
    // children: [
    //     {
    //         path: 'sign-in-up',
    //         meta: {
    //             title: 'StartPage',
    //         },
    //         component: () => import('@/modules/home/components/LoginRegister.vue'),
    //     },
    // ]
}];
