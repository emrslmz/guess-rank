import Profile from '@/modules/profile/router';
import Play from '@/modules/play/router';
import LoginRegister from '@/modules/login-register/router';

export default [{
    path: '/',
    name: 'HomePageDashboard',
    component: () => import('@/modules/home/views/Home.vue'),
    children: [...Profile, ...Play, ...LoginRegister]
}];
