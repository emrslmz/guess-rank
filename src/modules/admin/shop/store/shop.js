import axios from 'axios';
import {showMessage} from "@/shared/utils/messages.utils";
import router from "@/router";

const state = {
    shopInfo: {
        shopStatus: null,
        shopData: [],
        selectedShopData: [],
        addShopData: {
            name: null,
            price: null,
            discount: null,
            is_available: false,
            is_hidden: false,
            game_id: null,
        },
    },
};

const getters = {
    getShopInfo(state) {
        return state.shopInfo;
    },
};

const actions = {
    getShopItem() {
        axios
            .get('https://guess-what-rank-api.herokuapp.com/api/items', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((response) => {
                state.shopInfo.shopData = response.data.result.data;
                state.shopInfo.shopStatus = response.data.code;
            })
    },
    getSelectedItem(context, itemId) {
        axios
            .get(`https://guess-what-rank-api.herokuapp.com/api/items/${itemId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((response) => {
                // console.log(response);
                state.shopInfo.selectedShopData = response.data.result.data;
                state.shopInfo.shopStatus =response.data.code;
            })
    },
    patchEditItem(context, selectedItem) {
        axios
            .patch(`https://guess-what-rank-api.herokuapp.com/api/items/${selectedItem.item_id}`, {
                name: selectedItem.name,
                discount: selectedItem.discount,
                price: selectedItem.price,
                game_id: selectedItem.game_id,
                is_available: selectedItem.is_available,
                is_hidden: selectedItem.is_hidden,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((response) => {
                state.shopInfo.shopStatus = response.data.code;
                showMessage("The changes have been saved!");
            })
    },
    deleteItem(context, deleteItemData) {
        axios
            .delete(`https://guess-what-rank-api.herokuapp.com/api/items/${deleteItemData.item_id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            }, {
                deleteItemData
            })
            .then((response) =>{
                console.log(response);
                state.shopInfo.shopStatus = response.data.code;
                showMessage("The transaction is successful!");
                router.push({ path: '/admin/shop/items' });
            })
    },
    postAddItem(context, addItemData) {
        axios
            .post('https://guess-what-rank-api.herokuapp.com/api/items', {
                name: addItemData.name,
                price: addItemData.price,
                discount: addItemData.discount,
                is_available: addItemData.is_available,
                is_hidden: addItemData.is_hidden,
                game_id: addItemData.game_id,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((response) => {
                state.shopInfo.shopStatus = response.data.code;
                showMessage("The transaction is successful!");

                state.shopInfo.addShopData.name = null;
                state.shopInfo.addShopData.price = null;
                state.shopInfo.addShopData.discount = null;
                state.shopInfo.addShopData.is_available = false;
                state.shopInfo.addShopData.is_hidden = false;
                state.shopInfo.addShopData.game_id = null;

            })
    }
};

export default {
    state,
    getters,
    actions,
};