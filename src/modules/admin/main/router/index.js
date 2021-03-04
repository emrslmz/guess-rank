export default [{
    path: '/admin/home',
    name: 'AdminHomePage',
    component: () => import('@/modules/admin/main/views/AdminHome.vue'),
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
