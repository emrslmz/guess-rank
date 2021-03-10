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
            router.push('/login-register');
            console.log(error);
        })
    },
    // logoutMe() {
    //         Authorization: `Bearer ${localStorage.removeItem('access_token')}`,
    // }
}

export default {
    state,
    getters,
    actions
}