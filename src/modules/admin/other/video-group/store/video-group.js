import axios from 'axios';
import {showMessage} from "@/shared/utils/messages.utils";
import router from "@/router";

const state = {
    videoGroupInfo: {
        videoGroupStatus: null,
        videoGroupData: [],
        selectedVideoGroupData: [],
        addVideoGroupData: {
            videos: [],
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
    },
    postAddVideoGroup(context, addVideoGroupData) {
        axios
            .post('https://guess-what-rank-api.herokuapp.com/api/video_groups', {
                videos: addVideoGroupData.videos,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((response) => {
                state.videoGroupInfo.videoGroupStatus = response.data.code;
                showMessage("The transaction is successful!");

                Object.keys(state.videoGroupInfo.addVideoGroupData).forEach((key) => {
                    state.videoGroupInfo.addVideoGroupData[key] = [];
                });
            })
    },
    deleteVideoGroup(context, deleteVideoGroupData) {
      axios
          .delete(`https://guess-what-rank-api.herokuapp.com/api/video_groups/${deleteVideoGroupData.video_group_id}`, {
              headers: {
                  Authorization: `Bearer ${localStorage.getItem('access_token')}`,
              },
          }, {
              deleteVideoGroupData
          })
          .then((response) => {
              state.videoGroupInfo.videoGroupStatus = response.data.code;
              showMessage("The transaction is successful!");
              router.push({ path: '/admin/other/video-group/all' });
          })
    },
};

export default {
  state,
  getters,
  actions,
};