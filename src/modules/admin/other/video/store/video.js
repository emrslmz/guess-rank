import axios from 'axios';
import {showMessage} from "@/shared/utils/messages.utils";

const state = {
  videoInfo: {
    videoStatus: null,
    videoData: [],
    selectedVideoData: [],
    addVideoData: {

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
        .get('https://guess-what-rank-api.herokuapp.com/api/videos', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        })
        .then((response) => {
          state.videoInfo.videoData = response.data.result.data;
          state.videoInfo.videoStatus = response.data.code;
        })
    },
  getselectedVideo(context, videoId) {
    axios
        .get(`https://guess-what-rank-api.herokuapp.com/api/videos/${videoId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        })
        .then((response) => {
          state.videoInfo.selectedVideoData = response.data.result.data;
          state.videoInfo.videoStatus = response.data.code;
        })
    },
    patchEditVideo(context, selectedVideo) {
      axios
          .patch(`https://guess-what-rank-api.herokuapp.com/api/videos/${selectedVideo.video_id}`, {
              video_name: selectedVideo.video_name,
              video_url: selectedVideo.video_url,
              video_group_id: selectedVideo.video_group_id,
              video_game_id: selectedVideo.video_game_id,
          }, {
              headers: {
                  Authorization: `Bearer ${localStorage.getItem('access_token')}`,
              },
          })
          .then((response) => {
              state.videoInfo.videoStatus = response.data.code;
              showMessage("The changes have been saved!");
          })
    },
};

export default {
  state,
  getters,
  actions,
};