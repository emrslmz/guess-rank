import Vue from 'vue';
import Vuex from 'vuex';

import General from '@/store/dashboard/index';
import LoginRegister from '@/modules/main/login-register/store/index';
import Users from '@/modules/main/home/store/index';
import UserLevel from '@/modules/main/play/game/store/level'
import UserSelectVideo from '@/modules/main/play/game/store/video';
import UserSelectedVideoOption from '@/modules/main/play/game/store/option';
import UserVideoView from '@/modules/main/play/game/store/video-views';
import UserVideoAnswer from '@/modules/main/play/game/store/answer';

import AddedUsers from '@/modules/admin/users/store/users';
import Shop from '@/modules/admin/shop/store/shop';
import Game from '@/modules/admin/other/game/store/game';
import Level from '@/modules/admin/other/level/store/level'
import Video from '@/modules/admin/other/video/store/video';
import VideoGroup from '@/modules/admin/other/video-group/store/video-group';
import Option from '@/modules/admin/other/options/store/option';
import AdminVideoView from '@/modules/admin/other/movement/video-viewing/store/viewing';


Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    modules: {
        General,
        LoginRegister,
        AddedUsers,
        Users,
        Shop,
        Game,
        Level,
        Video,
        VideoGroup,
        UserLevel,
        UserSelectVideo,
        UserSelectedVideoOption,
        Option,
        AdminVideoView,
        UserVideoView,
        UserVideoAnswer,
    },
});
