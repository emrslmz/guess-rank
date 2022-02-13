import AuthServices from '../services/auth.services';

import config from '@/core/config';

import router from '@/router';

export const setAuthenticationInformation = async ({ commit }, data) => {
    localStorage.setItem(config.VITE_TOKEN_NAME, data.access_token);

    const dt = new Date();
    dt.setHours(dt.getHours() + 1);

    document.cookie = `access_token=${localStorage.getItem(config.VITE_TOKEN_NAME)};expires=${dt.toUTCString()}`;

    await commit('SET_USER_DATA', {
        ...data,
        access_token: undefined,
    });
};

export const login = async ({ dispatch }, payload) => {
    const data  = await new AuthServices().login(payload);
    console.log(data.result.data);
    await dispatch('setAuthenticationInformation', data.result.data);
};

export const register = async ({ dispatch }, payload) => {
    const { data } = await new AuthServices().register({...payload});
    console.log(data);
    await dispatch('setAuthenticationInformation', data);
};


export const fetchMe = async ({ commit }) => {
    if (localStorage.getItem(config.VITE_TOKEN_NAME)) {
        const { data } = await new AuthServices().fetchMe();

        await commit('SET_USER_DATA', {
            ...data,
        });
    }
};

export const logout = async ({ commit }) => {

    localStorage.removeItem(config.VITE_TOKEN_NAME);
    await commit('SET_USER_DATA', null);

    document.cookie = `${config.VITE_TOKEN_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;


    const routerName = router.currentRoute.value.name;
    if (!['Login', 'Register', 'PasswordForget', 'PasswordRenewal'].includes(routerName)) {
        await router.push({
            name: 'Login',
        });
    }
};
