export default [{
    path: '/login-register',
    name: 'LoginRegister',
    component: () => import('@/modules/main/login-register/views/LoginRegister.vue'),
    // children: [
    //     {
    //         path: 'sign-in-up',
    //         meta: {
    //             title: 'StartPage',
    //         },
    //         component: () => import('@/modules/main/components/LoginRegister.vue'),
    //     },
    // ]
}];
