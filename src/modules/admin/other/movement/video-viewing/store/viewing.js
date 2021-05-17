import axios from 'axios';
import request_api from '@/services/request/request_api';
import auth from '@/services/authorization/auth';

const state = {
    userVideoViewData: {
        viewingsData: [],
        videoId: null,
        viewingStatus: null,
    },
};

const getters = {
    getUserVideoViewData(state) {
        return state.userVideoViewData;
    }
};

const actions = {
    getUserVideoViewing(context, videoId) {
        axios
            .get(`${request_api.video_url}/${videoId}/viewings`, auth)
            .then((response) => {
                state.userVideoViewData.viewingsData = response.data.result.data;
                state.userVideoViewData.viewingStatus = response.data.code;
                console.log(response.data.result.data);
            })
    },
};

export default {
  state,
  getters,
  actions,
};
