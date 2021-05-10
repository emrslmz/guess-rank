import UserLevelStats from '@/modules/admin/other/movement/user-level/router/';
import UserVideoViewing from '@/modules/admin/other/movement/video-viewing/router/';

export default [{
    path: '/admin/other/movement',
    name: 'UserMovements',
    component: () => import('@/modules/admin/other/movement/main/views/Home.vue'),
    children: [...UserLevelStats, ...UserVideoViewing],
}];

