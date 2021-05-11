import axios from 'axios';
import request from '@/services/request/request_api';
import auth from '@/services/authorization/auth';

const state = {
    getUserLevel: {
        levelData: [],
        levelDataStatus: null,
    }
};


const actions = {
    getLevel() {
        axios
            .get(`${request.get_user_level}`, auth)
            .then((response) => {
                console.log(response);
            })
    },
    createLevel() {
        axios
            .post(`${request.get_user_level}`, auth)
            .then((response) => {
                console.log(response);
            })
    }
};


export default {
    state,
    actions,
};
