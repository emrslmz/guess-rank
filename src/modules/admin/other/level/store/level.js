import axios from 'axios';
import {showMessage} from '@/shared/utils/messages.utils';

const state = {
    levelInfo: {
        levelStatus: null,
        levelData: [],
        selectedLevelData: [],
        addLevelData: {

        },
    },
}

const getters = {
    getLevelInfo(state) {
        return state.levelInfo;
    }
}

const actions = {
    getLevel() {
        axios
            .get('https://guess-what-rank-api.herokuapp.com/api/levels', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((response) => {
                state.levelInfo.levelData = response.data.result.data;
                state.levelInfo.levelStatus = response.data.code;
            })
    },
    getSelectedLevel(context, levelId) {
        axios
            .get(`https://guess-what-rank-api.herokuapp.com/api/levels/${levelId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((response) => {
                // console.log(response.data.code);
                state.levelInfo.levelStatus = response.data.code;
                state.levelInfo.selectedLevelData = response.data.result.data;
            })
    },
    patchEditLevel(context, selectedLevel) {
        axios
            .patch(`https://guess-what-rank-api.herokuapp.com/api/levels/${selectedLevel.level_id}`, {
                level_name: selectedLevel.level_name,
                level_description: selectedLevel.level_description,
                is_locked: selectedLevel.is_locked,
                is_hidden: selectedLevel.is_hidden,
                game_id: selectedLevel.game_id,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((response) => {
                state.levelInfo.levelStatus = response.data.code;
                showMessage("The changes have been saved!")
            })
    },

}


export default {
    state,
    getters,
    actions,
}