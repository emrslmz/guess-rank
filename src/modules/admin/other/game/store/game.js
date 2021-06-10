import axios from 'axios';
import {showMessage} from '@/shared/utils/messages.utils';
import router from '@/router';
import request from '@/services/request/request_api';
import auth from '@/services/authorization/auth';

const state = {
    gameInfo: {
        gameData: [],
        selectedGameData: [],
    },
};

const getters = {
    getGameInfo(state) {
        return state.gameInfo;
    },
};

const mutations = {
    GET_GAME(state, data) {
        state.gameInfo.gameData = data;
    },
    GET_SELECTED_GAME(state, data) {
        state.gameInfo.selectedGameData = data;
    }
};

const actions = {
    async getGame({ commit }) {
       await axios
            .get(`${request.game_url}`, auth )
            .then((response) => {
                commit('GET_GAME', response.data.result.data);
            })
    },
    getSelectedGame({ commit }, gameId) {
        axios
            .get(`${request.game_url}/${gameId}`, auth)
            .then((response) => {
                commit('GET_SELECTED_GAME', response.data.result.data);
            })
    },
    addGame(context, gameData) {
        axios
            .post('https://guess-what-rank-api.herokuapp.com/api/games', {
                game_name: gameData.game_name,
                game_description: gameData.game_description,
                is_available: gameData.is_available,
                is_hidden: gameData.is_hidden,
                game_background_color: gameData.game_background_color,
                game_color: gameData.game_color,
            }, auth)
            .then(() => {
                showMessage("The transaction is successful!");
            })
    },
    patchEditGame(context, selectedData) {
        axios
            .patch(`${request.game_url}/${selectedData.game_id}`, {
                game_name: selectedData.game_name,
                game_description: selectedData.game_description,
                is_available: selectedData.is_available,
                is_hidden: selectedData.is_hidden,
                game_background_color: selectedData.game_background_color,
                game_color: selectedData.game_color,
            }, auth)
            .then(() => {
                showMessage("The changes have been saved!")
            })
    },
    deleteGame(context, selectedDeleteData) {
        axios
            .delete(`${request.game_url}/${selectedDeleteData.game_id}`, auth, {
                selectedDeleteData
            })
            .then(() => {
                showMessage("The transaction is successful!");
                router.push({ path: '/admin/other/game/all' });
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}
