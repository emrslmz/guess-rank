import axios from 'axios';
import { showMessage } from '@/shared/utils/messages.utils';
import router from '@/router';
import request from '@/services/request/request_api';
import auth from '@/services/authorization/auth';

const state = {
    levelInfo: {
        levelStatus: null,
        levelData: [],
        selectedLevelData: [],
    },
}

const getters = {
    getLevelInfo(state) {
        return state.levelInfo;
    }
};

const mutations = {
    GET_ADMIN_LEVEL(state, data) {
        state.levelInfo.levelData = data.result.data;
    },
    GET_ADMIN_LEVEL_STATUS(state, code) {
        state.levelInfo.levelStatus = code;
    },
    GET_SELECTED_LEVEL(state, data) {
        state.levelInfo.selectedLevelData = data.result.data;
    },
};

const actions = {
    getLevelAdmin({ commit }) {
        axios
            .get(`${request.level_url}`, auth)
            .then((response) => {
                commit('GET_ADMIN_LEVEL', response.data);
                commit('GET_ADMIN_LEVEL_STATUS', response.data.code);
            })
    },
    getSelectedLevel({ commit }, levelKey) {
        axios
            .get(`${request.level_url}/key/${levelKey}`, auth)
            .then((response) => {
                commit('GET_SELECTED_LEVEL', response.data);
                commit('GET_ADMIN_LEVEL_STATUS', response.data.code);
            })
    },
    patchEditLevel({ commit }, selectedLevel) {
        axios
            .patch(`${request.level_url}/${selectedLevel.level_id}`, {
                level_name: selectedLevel.level_name,
                level_description: selectedLevel.level_description,
                is_locked: selectedLevel.is_locked,
                is_hidden: selectedLevel.is_hidden,
                game_id: selectedLevel.game_id,
                level_video_group_id: selectedLevel.level_video_group_id,
            }, auth)
            .then((response) => {
                commit('GET_ADMIN_LEVEL_STATUS', response.data.code);
                showMessage("The changes have been saved!");
            })
    },
    addLevelAdmin({ commit }, addLevelData) {
        axios
            .post(`${request.level_url}`, {
                level_name: addLevelData.level_name,
                level_description: addLevelData.level_description,
                is_locked: addLevelData.is_locked,
                is_hidden: addLevelData.is_hidden,
                game_id: addLevelData.game_id,
                level_video_group_id: addLevelData.level_video_group_id,
            }, auth)
            .then((response) => {
                commit('GET_ADMIN_LEVEL_STATUS', response.data.code);
                showMessage("The transaction is successful!");
            })
    },
    deleteLevel({ commit }, deleteLevelData) {
        axios
            .delete(`${request.level_url}/${deleteLevelData.level_id}`, auth, {
                deleteLevelData
            })
            .then((response) => {
                commit('GET_ADMIN_LEVEL_STATUS', response.data.code);
                showMessage("The transaction is successful!");
                router.push({ path: '/admin/other/level/all' });
            })
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
}
