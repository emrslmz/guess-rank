export default [{
    path: '/admin/other/video-group',
    name: 'AdminVideoGroup',
    component: () => import('@/modules/admin/other/video-group/views/AdminVideoGroup.vue'),
    children: [
        {
            path: '/admin/other/video-group/all',
            meta: {
                title: 'Added All Video Groups'
            },
            component: () => import('@/modules/admin/other/video-group/components/AdminAddedVideoGroup.vue'),
        },
        {
            path: '/admin/other/video-group/add',
            meta: {
                title: 'Add Video Groups'
            },
            component: () => import('@/modules/admin/other/video-group/components/AdminAddVideo.vue'),
        },
    ],
}];
