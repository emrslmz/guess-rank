import Home from '@/modules/home/router';
import Admin from '@/modules/admin/router';

export default [{
    path: '/',
    component: () => import('@/core/views/App.vue'),
    children: [...Home, ...Admin],
}];

