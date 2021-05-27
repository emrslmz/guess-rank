import axios from 'axios';
import router from '@/router';
import { showMessage } from '@/shared/utils/messages.utils';

const state = {
    me: null,
    authError: null,
}

const getters = {

}

const mutations = {
    USER_LOGOUT(state) {
        state.me = null;
        state.authError = null;
    },
    SET_USER_DATA(state, data) {
        state.me = data;
    },
}

const actions = {
    //LOGGED USER DATA
     setUserData({ commit }, data) {
         commit('SET_USER_DATA', data);
    },

    fetchMe({ dispatch }) {
       axios
            .get('https://guess-what-rank-api.herokuapp.com/api/me', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                }
            })
            .then((response) => {
                dispatch('setUserData', response.data.result.data)
            })
            .catch(() => {
                return false;
            });
    },
    //USER LOGOUT
    logout({ commit }) {
        localStorage.removeItem('access_token');
        commit('USER_LOGOUT');
        router.push({path: '/login-register'});
        showMessage('The exit is successful. Redirecting...');
    },
    //GENERAL SETTING CHANGE
    generalSetting(context, userData) {
        axios
            .patch('https://guess-what-rank-api.herokuapp.com/api/me', {
                name: userData.name,
                surname: userData.surname,
                email: userData.email,
                username: userData.username,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then(() => {
                showMessage("The changes were saved!")
            })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
