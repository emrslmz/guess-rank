import axios from 'axios';
import {showMessage} from '@/shared/utils/messages.utils';
import router from '@/router';
import request from '@/services/request/request_api';
import auth from '@/services/authorization/auth';

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
            .get(`${request.video_group_url}`, auth)
            .then((response) => {
                state.videoGroupInfo.videoGroupData = response.data.result.data;
                state.videoGroupInfo.videoGroupStatus = response.data.code;
            })
    },
    getSelectedVideoGroup(context, videoGroupId) {
        axios
            .get(`${request.video_group_url}/${videoGroupId}`, auth)
            .then((response) => {
                state.videoGroupInfo.selectedVideoGroupData = response.data.result.data;
                state.videoGroupInfo.videoGroupStatus = response.data.code;
            })
    },
    postAddVideoGroup(context, addVideoGroupData) {
        axios
            .post(`${request.video_group_url}`, {
                videos: addVideoGroupData.videos,
            }, auth)
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
          .delete(`${request.video_group_url}/${deleteVideoGroupData.video_group_id}`, auth, {
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
