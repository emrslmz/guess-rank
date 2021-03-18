import axios from 'axios';
import {showMessage} from '@/shared/utils/messages.utils';

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
    changeItem(context, getEditData) {
        axios
            .patch(`https://guess-what-rank-api.herokuapp.com/api/items/${getEditData.item_id}`, {
                name: state.getEditItemData.name,
                discount: state.getEditItemData.discount,
                price: state.getEditItemData.price,
                is_hidden: state.getEditItemData.is_hidden,
                is_available: state.getEditItemData.is_available,
            }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                }
            })
            .then((response) => {
                console.log(response);
                showMessage("The changes have been saved!")
            })
            .catch(() => {
                showMessage("ERROR! Changes could not be saved")
            })
    }
}

export default {
    state,
    getters,
    actions,
}