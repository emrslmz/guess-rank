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
};

const mutations = {
    GET_USER_DATA(state, data) {
        state.getUsersData.usersData = data.result.data;
        state.getUsersData.userStatus = data.code;
    }
};

const actions = {
    getUsers({commit}) {
        axios
            .get(`${request.users}`, auth)
            .then((response) => {
                commit('GET_USER_DATA',  response.data);
            })
    },
}

export default {
    mutations,
    state,
    getters,
    actions,
}
