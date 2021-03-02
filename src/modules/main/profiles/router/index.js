export default [{
    path: '/profile',
    name: 'UserProfile',
    component: () => import('@/modules/main/profiles/views/UserProfile.vue'),
    children: [
        {
            path: '/profiles',
            meta: {
                title: 'Profile',
            },
            component: () => import('@/modules/main/profiles/components/Profiles.vue'),
        },
        {
            path: '/profile/setting',
            meta: {
                title: 'ProfileSetting',
            },
            component: () => import('@/modules/main/profiles/components/Setting.vue'),
        },
    ]
}];
