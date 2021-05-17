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
      optionAdd: {
          option_name: null,
          game_id: null,
          video_id: null,
      }
  },
};

const getters = {
    getAdminOptionData(state) {
        return state.adminOptionData;
    },
};

const actions = {
    getAdminOption() {
        axios
            .get(`${request_api.video_option_url}`, auth)
            .then((response) => {
                state.adminOptionData.optionStatus = response.data.code;
                state.adminOptionData.optionsData = response.data.result.data;
                console.log(response.data.result.data);
            })
    },
    getSelectedAdminOption(context, optionId) {
        axios
            .get(`${request_api.video_option_url}/${optionId}`, auth)
            .then((response) => {
                state.adminOptionData.selectedOptionData = response.data.result.data;
                state.adminOptionData.optionStatus = response.data.code;
            })
    },
    patchSelectedAdminOption(context, optionData) {
      axios
          .patch(`${request_api.video_option_url}/${optionData.video_option_id}`, {
              option_name: optionData.option_name,
              game_id: optionData.game_id,
              video_id: optionData.video_id,

          }, auth)
          .then((response) => {
              state.adminOptionData.optionStatus = response.data.code;
              showMessage("The changes have been saved!");
          })
    },
    deleteOption(context, optionData) {
        axios
            .delete(`${request_api.video_option_url}/${optionData.video_option_id}`, auth, {
                optionData
            })
            .then((response) => {
                state.adminOptionData.optionStatus = response.data.code;
                showMessage("The transaction is successful!");
                router.push({ path: '/admin/other/option/all' });
            })
    },
    addOption(context, optionData) {
        axios
            .post(`${request_api.video_option_url}`, {
                option_name: optionData.option_name,
                game_id: optionData.game_id,
                video_id: optionData.video_id,
            }, auth)
            .then((response) => {
                state.adminOptionData.optionStatus = response.data.code;
                showMessage("The transaction is successful!");

                Object.keys(state.adminOptionData.optionAdd).forEach((key) => {
                    state.adminOptionData.optionAdd[key] = null;
                });
            })
    },
};


export default {
    state,
    getters,
    actions,
};
