export default [{
    path: '/admin/other/movement/user-level',
    name: 'UserLevelStats',
    component: () => import('@/modules/admin/other/movement/user-level/views/UserLevels.vue'),
    // children: [
    //     {
    //         path: '/admin/other/video/all',
    //         meta: {
    //             title: 'Added All Video'
    //         },
    //         component: () => import('@/modules/admin/other/video/components/AdminAddedVideo.vue'),
    //     },
    // ],
}];
