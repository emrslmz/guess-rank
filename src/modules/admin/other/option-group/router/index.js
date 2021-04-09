export default [{
    path: '/admin/other/option-group',
    name: 'AdminOptionGroup',
    component: () => import('@/modules/admin/other/option-group/views/AdminOptionGroup.vue'),
    children: [
        {
            path: '/admin/other/option-group/all',
            meta: {
                title: 'Added All Option Group'
            },
            component: () => import('@/modules/admin/other/option-group/components/AdminAddedOption.vue'),
        },
        {
            path: '/admin/other/option-group/add',
            meta: {
                title: 'Add Option Group'
            },
            component: () => import('@/modules/admin/other/option-group/components/AdminAddOptionGroup.vue'),
        },
    ]
}];
