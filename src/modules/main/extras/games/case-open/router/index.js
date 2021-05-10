export default [{
    path: '/games/case-open',
    name: 'CaseOpen',
    component: () => import('@/modules/main/extras/games/case-open/views/CaseOpenHome.vue'),
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
