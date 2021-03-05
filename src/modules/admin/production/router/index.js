import AdminHome from '@/modules/admin/main/router/';
import AdminShop from '@/modules/admin/shop/router/';
import AdminUser from '@/modules/admin/users/router/';

export default [{
    path: '/admin',
    name: 'AdminPage',
    component: () => import('@/modules/admin/production/views/Admin.vue'),
    children: [...AdminHome, ...AdminShop, ...AdminUser]
}];
