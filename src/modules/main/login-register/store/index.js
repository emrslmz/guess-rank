import axios from 'axios';
import router from '@/router';

const state = {
    loginRegister:  {
        loginData: {
            email: null,
            password: null,
        },
        registerData: {
            name: null,
            email: null,
            password: null,
        },
        loginRegisterStatus: null,
    }
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
    USERREGISTERSTATUS(state, registerStatus) {
        this.state.loginRegister.loginRegisterStatus = registerStatus;
    },
    USERLOGINSTATUS(state, userLoginStatus) {
        this.state.loginRegister.loginRegisterStatus = userLoginStatus;
    }
};

const actions = {
    userRegister({ commit }, registerData) {
        axios
            .post('https://guess-what-rank-api.herokuapp.com/api/register', {
                name: registerData.name,
                email: registerData.email,
                password: registerData.password,
                password_confirmation: registerData.password,
            })
            .then((response) => {
                console.log(response);

                const registerStatus = this.response.data;
                commit('USERREGISTERSTATUS', registerStatus);
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
                console.log(localStorage.getItem('access_token'));


                const userLoginStatus = this.response;

                router.push({path: '/category'});

                commit('USERLOGINSTATUS', userLoginStatus);


            })
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};