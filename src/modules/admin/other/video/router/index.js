export default [{
    path: '/admin/other/video',
    name: 'AdminVideo',
    component: () => import('@/modules/admin/other/video/views/AdminVideo.vue'),
    children: [
        {
            path: '/admin/other/video/all',
            meta: {
                title: 'Added All Video'
            },
            component: () => import('@/modules/admin/other/video/components/AdminAddedVideo.vue'),
        },
        {
            path: '/admin/other/video/add',
            meta: {
                title: 'Add Video'
            },
            component: () => import('@/modules/admin/other/video/components/AdminAddVideo.vue'),
        },
        {
            path: '/admin/other/video/edit/:id',
            name: 'VideosEdit',
            meta: {
                title: 'Add Video'
            },
            component: () => import('@/modules/admin/other/video/components/AdminVideoEditDelete.vue'),
        },
    ],
}];
