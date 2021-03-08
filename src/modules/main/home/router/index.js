import Profile from '@/modules/main/profiles/router';
import Play from '@/modules/main/play/router';
import LoginRegister from '@/modules/main/login-register/router/';
import Start from '@/modules/main/start/router/';

export default [{
    path: '/',
    name: 'HomePageDashboard',
    component: () => import('@/modules/main/home/views/Home.vue'),
    children: [...Profile, ...Play, ...LoginRegister, ...Start]
}];
