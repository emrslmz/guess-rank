import axios from 'axios';
import request_api from '@/services/request/request_api';
import auth from '@/services/authorization/auth';
import {showMessage} from "@/shared/utils/messages.utils";
import router from "@/router";

const state = {
  adminOptionData: {
      optionsData: {},
      selectedOptionData: {},
  }
};

const getters = {
    getAdminOptionData(state) {
        return state.adminOptionData;
    }
};


const actions = {
    getAdminOption() {
        axios
            .get(`${request_api.video_option_url}`, auth)
            .then((response) => {
                console.log(response.data.result.data);
                state.adminOptionData.optionsData = response.data.result.data;
            })
    },
    getSelectedAdminOption(context, optionId) {
        axios
            .get(`${request_api.video_option_url}/${optionId}`, auth)
            .then((response) => {
                state.adminOptionData.selectedOptionData = response.data.result.data;
                console.log(response);
            })
    },
    deleteOption(context, optionData) {
        axios
            .delete(`${request_api.video_option_url}/${optionData.video_option_id}`, auth, {
                optionData
            })
            .then((response) => {
                console.log(response);
                showMessage("The transaction is successful!");
                router.push({ path: '/admin/other/option/all' });
            })
    }
};


export default {
    state,
    getters,
    actions,
};
