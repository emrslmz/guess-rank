import axios from 'axios';
import {showMessage} from '@/shared/utils/messages.utils';
import router from '@/router';
import request from '@/services/request/request_api';
import auth from '@/services/authorization/auth';

const state = {
    gameInfo: {
        gameStatus: null,
        gameData: [],
        selectedGameData: [],
        addGameData: {
            game_name: null,
            game_id: null,
            game_description: null,
            is_available: null,
            is_hidden: null,
            game_background_color: null,
            game_color: null,
        },
    },
};

const getters = {
    getGameInfo(state) {
        return state.gameInfo;
    },
};

const actions = {
    getGame() {
        axios
            .get(`${request.game_url}`, auth )
            .then((response) => {
                state.gameInfo.gameData = response.data.result.data;
                state.gameInfo.gameStatus = response.data.code;
            })
    },
    getSelectedGame(context, gameId) {
        axios
            .get(`${request.game_url}/${gameId}`, auth)
            .then((response) => {
                // console.log(response.data.code);
                state.gameInfo.gameStatus = response.data.code;
                state.gameInfo.selectedGameData = response.data.result.data;
            })
    },
    postAddGame(context, addGameData) {
        axios
            .post('https://guess-what-rank-api.herokuapp.com/api/games', {
                game_name: addGameData.game_name,
                game_description: addGameData.game_description,
                is_available: addGameData.is_available,
                is_hidden: addGameData.is_hidden,
                game_background_color: addGameData.game_background_color,
                game_color: addGameData.game_color,
            }, auth)
            .then((response) => {
                state.gameInfo.gameStatus = response.data.code;
                showMessage("The transaction is successful!");

                Object.keys(state.gameInfo.addGameData).forEach((key) => {
                    state.gameInfo.addGameData[key] = null;
                });
            })
    },
    patchEditGame(context, selectedData) {
        axios
            .patch(`${request.game_url}/${selectedData.game_id}`, {
                // game_id: selectedData.game_id,
                game_name: selectedData.game_name,
                game_description: selectedData.game_description,
                is_available: selectedData.is_available,
                is_hidden: selectedData.is_hidden,
                game_background_color: selectedData.game_background_color,
                game_color: selectedData.game_color,

            }, auth)
            .then((response) => {
                state.gameInfo.gameStatus = response.data.code;
                showMessage("The changes have been saved!")
            })
    },
    deleteGame(context, selectedDeleteData) {
        axios
            .delete(`${request.game_url}/${selectedDeleteData.game_id}`, auth, {
                selectedDeleteData
            })
            .then((response) => {
                state.gameInfo.gameStatus = response.data.code;
                showMessage("The transaction is successful!");
                router.push({ path: '/admin/other/game/all' });
        })
    }
}

export default {
    state,
    getters,
    actions,
}
