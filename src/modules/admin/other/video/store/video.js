import axios from 'axios';
import {showMessage} from '@/shared/utils/messages.utils';
import router from '@/router';
import request from '@/services/request/request_api';
import auth from '@/services/authorization/auth';

const state = {
  videoInfo: {
    videoStatus: null,
    videoData: [],
    selectedVideoData: [],
  },
};

const getters = {
  getVideoInfo(state) {
    return state.videoInfo;
  },
};

const mutations = {
    GET_VIDEO_STATUS(state, data) {
        state.videoInfo.videoStatus = data;
    },
    GET_ADMIN_VIDEO(state, data) {
      state.videoInfo.videoData = data;
    },
    GET_ADMIN_SELECTED_VIDEO(state, data) {
        state.videoInfo.selectedVideoData = data;
    }
};

const actions = {
  getVideo({ commit }) {
    axios
        .get(`${request.video_url}?all=1`, auth)
        .then((response) => {
            commit('GET_VIDEO_STATUS', response.data.code);
            commit('GET_ADMIN_VIDEO', response.data.result.data);
        })
    },
  getselectedVideo({ commit }, videoId) {
    axios
        .get(`${request.video_url}/${videoId}?all=1`, auth)
        .then((response) => {
            commit('GET_ADMIN_SELECTED_VIDEO', response.data.result.data)
            commit('GET_VIDEO_STATUS', response.data.code);

        })
    },
    patchEditVideo({ commit }, selectedVideo) {
      axios
          .patch(`${request.video_url}/${selectedVideo.video_id}`, {
              video_name: selectedVideo.video_name,
              video_url: selectedVideo.video_url,
              video_group_id: selectedVideo.video_group_id,
              video_game_id: selectedVideo.video_game_id,
              answer_option_id: selectedVideo.answer_option_id,
          }, auth)
          .then((response) => {
              commit('GET_VIDEO_STATUS', response.data.code);
              showMessage("The changes have been saved!");
          })
    },
    postAddVideo({ commit }, addVideoData) {
      axios
          .post(`${request.video_url}`, {
              video_name: addVideoData.video_name,
              video_url: addVideoData.video_url,
              video_group_id: addVideoData.video_group_id,
              video_game_id: addVideoData.video_game_id,
              answer_option_id: addVideoData.answer_option_id,

          }, auth)
          .then((response) => {
              commit('GET_VIDEO_STATUS', response.data.code);
              showMessage("The transaction is successful!");

              Object.keys(addVideoData).forEach((key) => {
                  addVideoData[key] = null;
              });
          })
    },
    deleteVideo(context, deleteVideoData) {
      axios
          .delete(`${request.video_url}/${deleteVideoData.video_id}`, auth, {
              deleteVideoData
          })
          .then((response) => {
              state.videoInfo.videoStatus = response.data.code;
              showMessage("The transaction is successful!");
              router.push({ path: '/admin/other/video/all' });
          })
    },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
