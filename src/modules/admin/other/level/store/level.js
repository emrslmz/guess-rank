import axios from "axios";

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
                console.log(response.data.code);
                state.levelInfo.levelStatus = response.data.code;
                state.levelInfo.selectedLevelData = response.data.result.data;
            })
    }
}


export default {
    state,
    getters,
    actions,
}