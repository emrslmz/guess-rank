import Dashboard from '@/modules/app/dashboard/router';
import Game from '@/modules/app/game/router';
import Profile from '@/modules/app/profile/router';
import Market from '@/modules/app/market/router';

export default [...Dashboard, ...Game, ...Profile, ...Market];
