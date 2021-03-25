import Vue from 'vue';
import Vuex from 'vuex';

import General from '@/store/dashboard/index';
import Play from '@/modules/main/play/store';
import LoginRegister from '@/modules/main/login-register/store/index';
import UserMe from '@/modules/main/home/store/index';
import GeneralSetting from '@/modules/main/profiles/store/generalSetting';

import AddedUsers from '@/modules/admin/users/store/users';
import AddedItems from "@/modules/admin/shop/store/added-item";
import ItemEdit from '@/modules/admin/shop/store/item-edit-delete';
import Game from '@/modules/admin/other/game/store/game';
import Level from '@/modules/admin/other/level/store/level'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        General,
        Play,
        LoginRegister,
        AddedUsers,
        UserMe,
        GeneralSetting,
        AddedItems,
        ItemEdit,
        Game,
        Level,
    },
});