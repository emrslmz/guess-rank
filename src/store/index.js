import Vue from 'vue';
import Vuex from 'vuex';

import General from '@/store/dashboard/index';
import Play from '@/modules/main/play/store';
import LoginRegister from '@/modules/main/login-register/store/index';

import AddedUsers from '@/modules/admin/users/store/added-user';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        General,
        Play,
        LoginRegister,
        AddedUsers
    },
});