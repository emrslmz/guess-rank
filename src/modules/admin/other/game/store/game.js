import axios from 'axios';
import {showMessage} from "@/shared/utils/messages.utils";

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
    }
}


export default {
    state,
    getters,
    actions,
}