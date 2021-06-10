import axios from 'axios';
import request from '@/services/request/request_api';
import auth from '@/services/authorization/auth';

const state = {
    getUserLevel: {
        levelData: [],
    }
};

const getters = {
    getUserLevelData() {
        return state.getUserLevel;
    }
};

const mutations = {
    GET_USER_LEVEL(state, level) {
        state.getUserLevel.levelData = level;
    }
};

const actions = {
    async getLevel({ commit } , gameId) {
        const response = await axios
        .get(`${request.game_url}/${gameId}/user_levels/me`, auth);
        commit('GET_USER_LEVEL', response.data.result.data.level);
    },
};


export default {
    state,
    getters,
    mutations,
    actions,
};
