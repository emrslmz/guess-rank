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
    addVideoData: {
        video_name: null,
        video_url: null,
        video_group_id: null,
        video_game_id: null,
    },
  },
};

const getters = {
  getVideoInfo(state) {
    return state.videoInfo;
  },
};

const actions = {
  getVideo() {
    axios
        .get(`${request.video_url}`, auth)
        .then((response) => {
          state.videoInfo.videoData = response.data.result.data;
          state.videoInfo.videoStatus = response.data.code;
        })
    },
  getselectedVideo(context, videoId) {
    axios
        .get(`${request.video_url}/${videoId}`, auth)
        .then((response) => {
          state.videoInfo.selectedVideoData = response.data.result.data;
          state.videoInfo.videoStatus = response.data.code;
        })
    },
    patchEditVideo(context, selectedVideo) {
      axios
          .patch(`${request.video_url}/${selectedVideo.video_id}`, {
              video_name: selectedVideo.video_name,
              video_url: selectedVideo.video_url,
              video_group_id: selectedVideo.video_group_id,
              video_game_id: selectedVideo.video_game_id,
          }, auth)
          .then((response) => {
              state.videoInfo.videoStatus = response.data.code;
              showMessage("The changes have been saved!");
          })
    },
    postAddVideo(context, addVideoData) {
      axios
          .post(`${request.video_url}`, {
              video_name: addVideoData.video_name,
              video_url: addVideoData.video_url,
              video_group_id: addVideoData.video_group_id,
              video_game_id: addVideoData.video_game_id,
          }, auth)
          .then((response) => {
              state.videoInfo.videoStatus = response.data.code;
              showMessage("The transaction is successful!");

              Object.keys(state.videoInfo.addVideoData).forEach((key) => {
                  state.videoInfo.addVideoData[key] = null;
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
  actions,
};
