import axios from 'axios';
import request_api from "@/services/request/request_api";
import auth from "@/services/authorization/auth";

const state = {
    videoOption: {}
};

const getters = {
    getVideoOptionData() {
        return state.videoOption;
    },
};

const actions = {
    getVideoOption(context, videoId) {
        axios
            .get(`${request_api.video_url}/${videoId}/options`, auth)
            .then((response) => {
                console.log(response.data.result.data);
                state.videoOption = response.data.result.data;
            })
    }
};

export default {
    state,
    getters,
    actions,
};
