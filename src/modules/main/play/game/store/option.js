import axios from 'axios';
import request_api from '@/services/request/request_api';
import auth from '@/services/authorization/auth';

const state = {
    videoOption: {}
};

const getters = {
    getVideoOptionData() {
        return state.videoOption;
    },
};

const mutations = {
  GET_VIDEO_OPTION(state, data) {
      state.videoOption = data;
  }
};

const actions = {
    getVideoOption({ commit }, videoId) {
        axios
            .get(`${request_api.video_url}/${videoId}/options`, auth)
            .then((response) => {

                commit('GET_VIDEO_OPTION', response.data.result.data);
            })
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};
