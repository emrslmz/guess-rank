import axios from 'axios';
import router from '@/router';
import { showMessage } from "@/shared/utils/messages.utils";

const state = {
    userDatas: {
        userData: [],
        userDataStatus: null,
    }
}

const getters = {
    getUserData(state) {
        return state.userDatas;
    },
}

const mutations = {
    USER_LOGOUT(state) {
        state.userDatas = {
            userData: [],
            userDataStatus: null,
        }
    }
}

const actions = {
    userMe() {
        axios
            .get('https://guess-what-rank-api.herokuapp.com/api/me', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                }
            })
            .then((response) => {
                state.userDatas.userData = response.data.result.data;
                state.userDatas.userDataStatus = response.data.code;
            })
            .catch((error) => {
            console.log(error);
                router.push({ path: '/login-register' });
            })
    },
    logout({ commit }) {
        localStorage.removeItem('access_token');
        commit('USER_LOGOUT');
        router.push({ path: '/login-register' });
        showMessage('The exit is successful. Redirecting...');
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}