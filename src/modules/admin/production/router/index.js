export default [{
    path: '/admin',
    meta: {
        title: 'Home',
    },
    name: 'AdminPageDashboard',
    component: () => import('@/modules/admin/production/views/Admin.vue'),
    children: [{
        path: 'home',
        name: 'AdminHome',
        meta: {
            title: 'Main',
        },
        component: () => import('@/modules/admin/production/components/AdminHome.vue'),
    },
    ]
}];