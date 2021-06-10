import axios from 'axios';
import request_api from '@/services/request/request_api';
import auth from '@/services/authorization/auth';
import { showMessage } from '@/shared/utils/messages.utils';
import router from '@/router';

const state = {
  adminOptionData: {
      optionsData: [],
      selectedOptionData: {},
      optionStatus: null,
  },
};

const getters = {
    getAdminOptionData(state) {
        return state.adminOptionData;
    },
};

const mutations = {
    GET_ADMIN_OPTION(state, data) {
        state.adminOptionData.optionsData = data;
    },
    GET_ADMIN_OPTION_STATUS(state, data) {
        state.adminOptionData.optionStatus = data;
    },
    GET_SELECTED_OPTION(state, data) {
        state.adminOptionData.selectedOptionData = data;
    }
};

const actions = {
    async getAdminOption({ commit }) {
       await axios
            .get(`${request_api.video_option_url}`, auth)
            .then((response) => {
                commit('GET_ADMIN_OPTION', response.data.result.data);
                commit('GET_ADMIN_OPTION_STATUS', response.data.code);
            })
    },
    getSelectedAdminOption({ commit }, optionId) {
        axios
            .get(`${request_api.video_option_url}/${optionId}`, auth)
            .then((response) => {
                commit('GET_SELECTED_OPTION', response.data.result.data);
                commit('GET_ADMIN_OPTION_STATUS', response.data.code);
            })
    },
    patchSelectedAdminOption({ commit }, optionData) {
      axios
          .patch(`${request_api.video_option_url}/${optionData.video_option_id}`, {
              option_name: optionData.option_name,
              game_id: optionData.game_id,
              video_id: optionData.video_id,

          }, auth)
          .then((response) => {
              commit('GET_ADMIN_OPTION_STATUS', response.data.code);
              showMessage("The changes have been saved!");
          })
    },
    deleteOption({ commit }, optionData) {
        axios
            .delete(`${request_api.video_option_url}/${optionData.video_option_id}`, auth, {
                optionData
            })
            .then((response) => {
                commit('GET_ADMIN_OPTION_STATUS', response.data.code);
                showMessage("The transaction is successful!");
                router.push({ path: '/admin/other/option/all' });
            })
    },
    addOption({ commit }, optionData) {
        axios
            .post(`${request_api.video_option_url}`, {
                option_name: optionData.option_name,
                game_id: optionData.game_id,
                video_id: optionData.video_id,
            }, auth)
            .then((response) => {
                commit('GET_ADMIN_OPTION_STATUS', response.data.code);
                showMessage("The transaction is successful!");

                Object.keys(optionData).forEach((key) => {
                    optionData[key] = null;
                });
            })
    },
};


export default {
    state,
    getters,
    mutations,
    actions,
};
