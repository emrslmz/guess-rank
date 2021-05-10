export default [{
    path: '/admin/other/movement/user-video-view',
    name: 'UserVideoViewing',
    component: () => import('@/modules/admin/other/movement/video-viewing/views/VideoViewings.vue'),
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
