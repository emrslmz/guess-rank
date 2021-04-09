import Games from '@/modules/admin/other/game/router/';
import Levels from '@/modules/admin/other/level/router/';
import Videos from '@/modules/admin/other/video/router/';
import VideoGroups from '@/modules/admin/other/video-group/router/';
import Options from '@/modules/admin/other/options/router/';
import OptionGroups from '@/modules/admin/other/option-group/router/';

export default [{
    path: '/admin/other',
    name: 'AdminOther',
    component: () => import('@/modules/admin/other/main/views/AdminOther.vue'),
    children: [...Games, ...Levels, ...Videos, ...VideoGroups, ...Options, ...OptionGroups],
}];

