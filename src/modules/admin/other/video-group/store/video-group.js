import axios from 'axios';

const state = {
    videoGroupInfo: {
        videoGroupStatus: null,
        videoGroupData: [],
        selectedVideoGroupData: [],
        addVideoGroupData: {

        },
    },
};

const getters = {
    getVideoGroupInfo(state) {
        return state.videoGroupInfo;
    },
};

const actions = {
    getVideoGroup() {
        axios
            .get('https://guess-what-rank-api.herokuapp.com/api/video_groups', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((response) => {
                state.videoGroupInfo.videoGroupData = response.data.result.data;
                state.videoGroupInfo.videoGroupStatus = response.data.code;
            })
    },
    getSelectedVideoGroup(context, videoGroupId) {
        axios
            .get(`https://guess-what-rank-api.herokuapp.com/api/video_groups/${videoGroupId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((response) => {
                state.videoGroupInfo.selectedVideoGroupData = response.data.result.data;
                state.videoGroupInfo.videoGroupStatus = response.data.code;
            })
    }
};

export default {
  state,
  getters,
  actions,
};