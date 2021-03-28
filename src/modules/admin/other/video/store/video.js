import axios from 'axios';

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
  }
};

export default {
  state,
  getters,
  actions,
};