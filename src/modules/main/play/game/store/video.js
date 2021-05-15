import axios from "axios";
import request from "@/services/request/request_api";
import auth from "@/services/authorization/auth";

const state = {
    selectedUserVideoData: [],
};

const getters = {
    getUserSelectedVideoData(state) {
        return state.selectedUserVideoData;
    }
};

const actions = {
    getUserSelectedVideo(context, videoId) {
        axios
            .get(`${request.video_url}/${videoId}`, auth)
            .then((response) => {
                state.selectedUserVideoData = response.data.result.data;
            })
    },
};

export default {
    state,
    getters,
    actions,
}
