export default [{
    path: '/admin/user',
    name: 'AdminRegisteredUsers',
    component: () => import('@/modules/admin/users/views/Users.vue'),
    children: [
        {
            path: '/admin/user/users',
            meta: {
                title: 'Added Users',
            },
            component: () => import('@/modules/admin/users/components/AddedUsers.vue'),
        },
        {
            path: '/admin/user/users/:id',
            name: 'AdminUserEdit',
            meta: {
                title: 'Added Users',
            },
            component: () => import('@/modules/admin/users/components/AdminUserEdit.vue'),
        },
        {
            path: '/admin/user/add-user',
            meta: {
                title: 'Add User',
            },
            component: () => import('@/modules/admin/users/components/AddUser.vue'),
        },
        {
            path: '/admin/user/admins',
            meta: {
                title: 'Admin users',
            },
            component: () => import('@/modules/admin/users/components/AdminUsers.vue'),
        },
    ]
}];
