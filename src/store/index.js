import Vue from 'vue';
import Vuex from 'vuex';


import Play from '@/modules/play/store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Play,
    },
});