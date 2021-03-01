export default [{
    path: '/profile',
    name: 'UserProfile',
    component: () => import('@/modules/main/profiles/profile/views/UserProfile.vue'),
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
