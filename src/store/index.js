import Vue from 'vue';
import Vuex from 'vuex';

import General from '@/store/dashboard/index';
import Play from '@/modules/main/play/store';
import LoginRegister from "@/modules/main/login-register/store/index";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        General,
        Play,
        LoginRegister,
    },
});