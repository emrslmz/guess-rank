import GameCategory from '@/modules/admin/other/game/router/';

export default [{
    path: '/admin/other',
    name: 'AdminOther',
    component: () => import('@/modules/admin/other/main/views/AdminOther.vue'),
    children: [...GameCategory]
}];

