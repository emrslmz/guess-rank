import axios from 'axios';

const state = {
    shopItem: {
        itemData: [],
        itemStatus: null,
    },
}

const getters = {
    getShopItems(state) {
        return state.shopItem;
    }
}

const mutations = {
    GET_ITEM_STATUS(state, status) {
        state.shopItem.itemStatus = status;
    }
}

const actions = {
    getItems({ commit }) {
        axios
            .get('https://guess-what-rank-api.herokuapp.com/api/items', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((response) => {
               state.shopItem.itemData = response.data.result.data;
               commit('GET_ITEM_STATUS', response.status);

               console.log(response)
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
};