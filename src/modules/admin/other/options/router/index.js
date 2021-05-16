export default [{
    path: '/admin/other/option',
    name: 'AdminOption',
    component: () => import('@/modules/admin/other/options/views/AdminOption.vue'),
    children: [
        {
            path: '/admin/other/option/all',
            meta: {
                title: 'Added All Option'
            },
            component: () => import('@/modules/admin/other/options/components/AdminAddedOption.vue'),
        },
        {
            path: '/admin/other/option/:id',
            name: 'OptionEdit',
            meta: {
                title: 'Added All Option'
            },
            component: () => import('@/modules/admin/other/options/components/AdminOptionEditDelete.vue'),
        },
        {
            path: '/admin/other/option/add',
            meta: {
                title: 'Add Option'
            },
            component: () => import('@/modules/admin/other/options/components/AdminAddOption.vue'),
        },
    ]
}];
