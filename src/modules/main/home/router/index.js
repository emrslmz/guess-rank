import Profile from '@/modules/main/profiles/router';
import LoginRegister from '@/modules/main/login-register/router/';
import Start from '@/modules/main/start/router/';
import Play from '@/modules/main/play/home/router/';
import Shop from '@/modules/main/shop/router/';
import Games from '@/modules/main/extras/games/router/'

export default [{
    path: '/',
    name: 'HomePageDashboard',
    component: () => import('@/modules/main/home/views/Home.vue'),
    children: [...Profile, ...Play, ...LoginRegister, ...Start, ...Shop, ...Games],
}];
