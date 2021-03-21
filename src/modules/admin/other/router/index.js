import Games from '@/modules/admin/other/game/router/';
import Levels from '@/modules/admin/other/level/router/';

export default [{
    path: '/admin/other',
    name: 'AdminOther',
    component: () => import('@/modules/admin/other/main/views/AdminOther.vue'),
    children: [...Games, ...Levels],
}];

