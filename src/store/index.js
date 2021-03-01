import Vue from 'vue';
import Vuex from 'vuex';


import Play from '@/modules/main/play/store';
import General from '@/store/dashboard/index';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        General,
        Play,
    },
});