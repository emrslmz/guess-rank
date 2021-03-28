import CaseOpen from '@/modules/main/extras/games/case-open/router';

export default [{
    path: '/games',
    name: 'Games',
    component: () => import('@/modules/main/extras/games/main/views/Games.vue'),
    children: [...CaseOpen],
}];

