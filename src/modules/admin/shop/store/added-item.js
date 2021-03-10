import axios from 'axios';

const state = {
getItems: [],
}

const getters = {

}

const mutations = {
    GET_ITEMS_PUSH(state, data) {
        state.getItems = data;
    }
}

const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions,
};