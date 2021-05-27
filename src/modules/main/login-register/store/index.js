import axios from 'axios';

import router from '@/router';
import { showMessage } from "@/shared/utils/messages.utils";


const state = {
    loginRegister:  {
        loginRegisterCard: false, //false login  true register
        loginData: {
            email: null,
            password: null,
        },
        registerData: {
            name: null,
            surname: null,
            username: null,
            email: null,
            password: null,
            password_confirmation: null,
            country_id: null,
        },
        loginRegisterStatus: null,
    },
};

const getters = {
    getLoginRegisterData(state) {
        return state.loginRegister;
    },
};
const mutations = {
    USER_REGISTER_STATUS(state, registerStatus) {
        state.loginRegister.loginRegisterStatus = registerStatus;
    },
    USER_LOGIN_STATUS(state, status) {
        state.loginRegister.loginRegisterStatus = status;
    },

};

const actions = {
    register({ commit }, registerData) {
        axios
            .post('https://guess-what-rank-api.herokuapp.com/api/register', {
                name: registerData.name,
                surname: registerData.surname,
                username: registerData.username,
                email: registerData.email,
                password: registerData.password,
                password_confirmation: registerData.password_confirmation,
                country_id: 1,
            })
            .then((response) => {
                showMessage('Registration Successful!');

                const registerStatus = response.status;
                commit('USER_REGISTER_STATUS', registerStatus);
            })
            .catch(() => {
                showMessage("Login information is incorrect");
                commit('USER_REGISTER_STATUS', 422);
            })
    },
    login({ dispatch }, loginData) {
         axios
            .post('https://guess-what-rank-api.herokuapp.com/api/login', {
                email: loginData.email,
                password: loginData.password,
            })
            .then((response) => {
                localStorage.setItem("access_token", response.data.result.data.access_token);
                showMessage('Login successful. Welcome!');
                dispatch('Users/setUserData', response.data.result.data.user, { root: true});
                router.push({path: '/start'});
            })
            .catch(() => {
                showMessage("Login information is incorrect");
            })
    },
};

export default {
    state,
    namespaced: true,
    getters,
    mutations,
    actions,
};
