import axios from 'axios';
import request from '@/services/request/request_api';
import auth from '@/services/authorization/auth';

const state = {
    selectedUserVideoData: [],
};

const getters = {
    getUserSelectedVideoData(state) {
        return state.selectedUserVideoData;
    }
};

const mutations = {
    GET_USER_SELECTED_VIDEO(state, data) {
        state.selectedUserVideoData = data;
    }
};

const actions = {
    getUserSelectedVideo({ commit }, videoId) {
        axios
            .get(`${request.video_url}/${videoId}`, auth)
            .then((response) => {
                  commit('GET_USER_SELECTED_VIDEO', response.data.result.data);
            })
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
}
