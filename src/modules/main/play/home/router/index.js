import Game from '@/modules/main/play/game/router';

export default [{
    path: '/play',
    name: 'Play',
    component: () => import('@/modules/main/play/home/views/Home.vue'),
    children: [...Game],
}];

