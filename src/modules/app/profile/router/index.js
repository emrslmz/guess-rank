export default [
    {
        name: 'Profile',
        path: 'profile',
        meta: {
            title: 'Profile page',
        },
        component: () => import('@/modules/app/profile/views/Profile.vue'),
    },
];
