import axios from 'axios';
import request from '@/services/request/request_api';
import auth from '@/services/authorization/auth';

const state = {
    getUserLevel: {
        levelData: {},
        levelDataStatus: null,
    }
};

const getters = {
    getUserLevelData() {
        return state.getUserLevel;
    }
};

const actions = {
    getLevel( commit , gameId) {
        axios
            .get(`${request.game_url}/${gameId}/user_levels/me`, auth)
            .then((response) => {

                state.getUserLevel.levelData = response.data.result.data.level;
                state.getUserLevel.levelDataStatus = response.data.code;

                console.log(state.getUserLevel.levelData);

            })
    },

};


export default {
    state,
    getters,
    actions,
};
