export default [{
    path: '/play/game',
    name: 'Games',
    component: () => import('@/modules/main/play/game/views/Game.vue'),
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
