import axios from 'axios';
import router from '@/router';

const state = {
    userDatas: {
        userData: null,
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
            userData: null,
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
            router.push({ path: 'login-register' });
            console.log(error);
        })
    },
    logout({ commit }) {
        localStorage.removeItem('access_token');
        commit('USER_LOGOUT');
        router.push({ path: 'login-register' });
    }
    // logoutMe() {
    //         Authorization: `Bearer ${localStorage.removeItem('access_token')}`,
    // }
}

export default {
    state,
    getters,
    mutations,
    actions
}