export default [{
    path: '/admin/other/level',
    name: 'AdminLevel',
    component: () => import('@/modules/admin/other/level/views/AdminLevel.vue'),
    children: [
        {
            path: '/admin/other/level/all',
            meta: {
                title: 'Added All Level'
            },
            component: () => import('@/modules/admin/other/level/components/AdminAddedLevel.vue'),
        },
        {
            path: '/admin/other/level/all/:id',
            name: 'LevelsEdit',
            meta: {
                title: 'Added All Level'
            },
            component: () => import('@/modules/admin/other/level/components/AdminLevelEditDelete.vue'),
        },
        {
            path: '/admin/other/level/add',
            meta: {
                title: 'Add Level'
            },
            component: () => import('@/modules/admin/other/level/components/AdminAddLevel.vue'),
        },
    ]
}];
