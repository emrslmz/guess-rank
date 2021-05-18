import axios from 'axios';
import request_api from '@/services/request/request_api';
import auth from '@/services/authorization/auth';
import {showMessage} from "@/shared/utils/messages.utils";

const state = {
    addUserVideoView: {
        viewStatus: null,
    },
};

// const getters = {
//     getAddUserView(state) {
//       return state.addUserVideoView;
//     },
// };

const actions = {
    getPostUserView(context, { videoId, levelId}) {
        axios
            .post(`${request_api.video_url}/${videoId}/viewings`, {
                level_id: levelId,
            }, auth)
            .then((response) => {
                state.addUserVideoView.viewStatus = response.data.code;
                showMessage("The video is currently being watched..");
            })
    }
};


export default {
    state,
    // getters,
    actions,
};
