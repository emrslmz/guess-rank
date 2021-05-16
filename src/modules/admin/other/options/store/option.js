import axios from 'axios';
import request_api from '@/services/request/request_api';
import auth from '@/services/authorization/auth';

const state = {
    adminOptionData: {},
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
                state.adminOptionData = response.data.result.data;
            })
    },
    getSelectedAdminOption(context, optionId) {
        axios
            .get(`${request_api.video_option_url}/${optionId}`, auth)
            .then((response) => {
                console.log(response);
            })
    }
};


export default {
    state,
    getters,
    actions,
};
