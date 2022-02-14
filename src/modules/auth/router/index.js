export default [{
    path: '',
    name: 'Auth',
    component: () => import('../views/Auth.vue'),
    children: [
        {
            path: 'login',
            name: 'Login',
            meta: {
                title: 'Login page',
            },
            component: () => import('../../auth/components/Login.vue'),
        },
        {
            path: 'register',
            name: 'Register',
            meta: {
                title: 'Register page',
            },
            component: () => import('../../auth/components/Register.vue'),
        },
    ]
}];
