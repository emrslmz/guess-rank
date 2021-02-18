export default [{
    path: '/admin',
    meta: {
        title: 'Home',
    },
    name: 'HomePageDashboard',
    component: () => import('@/modules/admin/views/Admin.vue'),
    children: [{
        path: 'home',
        meta: {
            title: 'Main',
        },
        component: () => import('@/modules/admin/components/AdminHome.vue'),
    },
    ]
}];