export default [{
    path: '/profile',
    name: 'UserProfile',
    component: () => import('@/modules/profile/views/UserProfile.vue'),
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
