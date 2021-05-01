import axios from 'axios';
import request from '@/services/request/request_api';
import auth from '@/services/authorization/auth';

const state = {
    getUsersData: {
        usersData: [],
        userStatus: null,
    },
}

const getters = {
    getUsersData(state) {
        return state.getUsersData;
    }
}

const actions = {
    getUsers() {
        axios
            .get(`${request.users}`, auth)
            .then((response) => {
                state.getUsersData.usersData =  response.data.result.data;
                state.getUsersData.userStatus = response.data.code;
            })
    },
}


export default {
    state,
    getters,
    actions,
}
