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
    isLogged() {
        return !!localStorage.getItem('access_token');
    }
};
const mutations = {
    USER_REGISTER_STATUS(state, registerStatus) {
        state.loginRegister.loginRegisterStatus = registerStatus;
    },
    USER_LOGIN_STATUS(state, userLoginStatus) {
        state.loginRegister.loginRegisterStatus = userLoginStatus;
    },

};

const actions = {
    userRegister({ commit }, registerData) {
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
                // this.showMessage('Successdsadsadfully added!');
                showMessage('asa');

                const registerStatus = response.status;
                commit('USER_REGISTER_STATUS', registerStatus);

            })
    },
    userLogin({ commit }, loginData) {
        axios
            .post('https://guess-what-rank-api.herokuapp.com/api/login', {
                email: loginData.email,
                password: loginData.password,
            })
            .then((response) => {
                localStorage.setItem("access_token", response.data.result.data.access_token);
                // console.log(localStorage.getItem('access_token'));
                showMessage('asa');


                router.push({path: '/category'});
                commit('USER_LOGIN_STATUS', response.status);
            })
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};