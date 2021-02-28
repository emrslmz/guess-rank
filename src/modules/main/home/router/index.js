import Profile from '@/modules/main/profile/router';
import Play from '@/modules/main/play/router';
import LoginRegister from '@/modules/main/login-register/router/';

export default [{
    path: '/',
    name: 'HomePageDashboard',
    component: () => import('@/modules/main/home/views/Home.vue'),
    children: [...Profile, ...Play, ...LoginRegister]
}];
