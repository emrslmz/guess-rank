import axios from 'axios';
import request_api from '@/services/request/request_api';
import auth from '@/services/authorization/auth';

const state ={
    userAnswers: {
        selectedAnswerData: {},
    },
};

const getters = {
    getUserAnswer(state) {
       return state.userAnswers.selectedAnswerData;
    },
};

const mutations = {
    GET_SELECTED_ANSWER(state, data ) {
        state.userAnswers.selectedAnswerData = data;
    }
};

const actions = {
    async postUserAnswer({ commit }, {optionId, videoId}) {
       const response = await axios
            .post(`${request_api.video_option}/${optionId}/answers`, {
                video_id: videoId,
        }, auth)
        console.log(response.data.result.data);
       commit('GET_SELECTED_ANSWER', response.data.result.data);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
