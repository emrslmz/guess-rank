import Home from '@/modules/main/home/router';
import Admin from '@/modules/admin/production/router';

export default [{
    path: '/',
    component: () => import('@/core/views/App.vue'),
    children: [...Home, ...Admin],
}];

