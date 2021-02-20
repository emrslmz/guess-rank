export default [{
    path: '/login-register',
    name: 'LoginRegister',
    component: () => import('@/modules/login-register/views/LoginRegister.vue'),
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
