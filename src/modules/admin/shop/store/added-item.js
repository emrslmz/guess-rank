import axios from 'axios';

const state = {
    shopItems: [],
}

const getters = {
    getShopItems(state) {
        return state.shopItems;
    }
}

const mutations = {

}

const actions = {
    getItems() {
        axios
            .get('https://guess-what-rank-api.herokuapp.com/api/items', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((response) => {
               state.shopItems = response.data.result.data;
               console.log(response.data.result.data);
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
};