import Vue from 'vue';
import Vuex from 'vuex';

import General from '@/store/dashboard/index';
import LoginRegister from '@/modules/main/login-register/store/index';
import UserMe from '@/modules/main/home/store/index';
import GeneralSetting from '@/modules/main/profiles/store/generalSetting';
import UserLevel from '@/modules/main/play/game/store/level'
import UserSelectVideo from '@/modules/main/play/game/store/video';

import AddedUsers from '@/modules/admin/users/store/users';
import Shop from '@/modules/admin/shop/store/shop';
import Game from '@/modules/admin/other/game/store/game';
import Level from '@/modules/admin/other/level/store/level'
import Video from '@/modules/admin/other/video/store/video';
import VideoGroup from '@/modules/admin/other/video-group/store/video-group';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        General,
        LoginRegister,
        AddedUsers,
        UserMe,
        GeneralSetting,
        Shop,
        Game,
        Level,
        Video,
        VideoGroup,
        UserLevel,
        UserSelectVideo,
    },
});
