import axios from 'axios';

const state = {
    getEditItemData: [],
}

const getters = {
    getEditData(state) {
        return state.getEditItemData;
    }
}


const actions = {
    getEditItem(context, itemId) {
        axios
            .get(`https://guess-what-rank-api.herokuapp.com/api/items/${itemId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((response) => {

                state.getEditItemData = response.data.result.data;
                console.log(response.data.result.data);
            })
    },
}

export default {
    state,
    getters,
    actions,
}