export default [{
    path: '/admin',
    meta: {
        title: 'Home',
    },
    name: 'AdminPage',
    component: () => import('@/modules/admin/production/views/Admin.vue'),
    children: [{
        path: '/admin/home',
        name: 'AdminHome',
        meta: {
            title: 'Main',
        },
        component: () => import('@/modules/admin/production/components/main/AdminHome.vue'),
        },
    ]
}];