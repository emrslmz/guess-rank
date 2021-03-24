import axios from 'axios';
import {showMessage} from '@/shared/utils/messages.utils';

const state = {
    gameInfo: {
        gameData: [],
        selectedGameData: [],
        gameStatus: null,
    },
}

const getters = {
    getGameInfo(state) {
        return state.gameInfo;
    }
}

const actions = {
    getGame() {
        axios
            .get('https://guess-what-rank-api.herokuapp.com/api/games', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((response) => {
                state.gameInfo.gameData = response.data.result.data;
                state.gameInfo.gameStatus = response.data.code;
                showMessage('Games added');
            })
    },
    getSelectedGame(context, gameId) {
        axios
            .get(`https://guess-what-rank-api.herokuapp.com/api/games/${gameId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((response) => {
                console.log(response.data.code);
                state.gameInfo.gameStatus = response.data.code;
                state.gameInfo.selectedGameData = response.data.result.data;
            })
    },
    patchEditGame(context, selectedData) {
        axios
            .patch(`https://guess-what-rank-api.herokuapp.com/api/games/${selectedData.game_id}`, {
                // game_id: selectedData.game_id,
                game_name: selectedData.game_name,
                game_description: selectedData.game_description,
                is_available: selectedData.is_available,
                is_hidden: selectedData.is_hidden,
                game_background_color: selectedData.game_background_color,
                game_color: selectedData.game_color,

            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((response) => {
                console.log(response);
                showMessage("The changes have been saved!")
            })
    }
}


export default {
    state,
    getters,
    actions,
}