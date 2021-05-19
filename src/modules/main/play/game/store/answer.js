import axios from 'axios';
import request_api from '@/services/request/request_api';
import auth from '@/services/authorization/auth';

const state ={
    userAnswers: {
    }
};

const getters = {

};

const actions = {
    async postUserAnswer(context, {optionId, videoId}) {
       const response = await axios
            .post(`${request_api.video_option}/${optionId}/answers`, {
                video_id: videoId,
        }, auth)
        console.log(response.data.result.data);
    }
};

export default {
    state,
    getters,
    actions,
};
