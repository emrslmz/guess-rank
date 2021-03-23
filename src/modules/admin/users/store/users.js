import axios from 'axios';

const state = {
    getUsersData: {
        usersData: [],
        dataStatus: null,
        totalData: null,
    },
}

const getters = {
    getUsersData(state) {
        return state.getUsersData;
    }
}

const mutations = {
    GETUSERDATASTATUS(state, getUsersDataStatus) {
        state.getUsersData.dataStatus = getUsersDataStatus;
    }
}

const actions = {
    getUsers({ commit }) {
        axios
            .get('https://guess-what-rank-api.herokuapp.com/api/users', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                },
            })
            .then((response) => {
                console.log(response)
                const getUsersDataStatus = response;
                commit('GETUSERDATASTATUS', getUsersDataStatus);
                state.getUsersData.usersData = response.data.result.data;
            })
    },
}


export default {
    state,
    getters,
    mutations,
    actions,
}