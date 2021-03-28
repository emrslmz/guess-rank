import axios from 'axios';

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
            .get('https://guess-what-rank-api.herokuapp.com/api/users', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                },
            })
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