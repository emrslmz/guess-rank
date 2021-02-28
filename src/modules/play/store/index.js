const state = {
    playValorant: [
        {
            id: 1,
            levelName: 'Level 1',
            levelId: '%rtewtzfgdgsgfhs',
            levelLock: false,  //false: lock true: unlock
            showStatus: true,  //true: display
            videoName: 'Cluch 1v1',
            videLink: 'TvEksPZuIak',
            videoOption: {
                correctOption: 'valorank_bronz1',
                wrongOptionFirst: 'valorank_demir3',
                wrongOptionSecond: 'valorank_gumus1',
                wrongOptionThird: '',
                wrongOptionFourth: 'valorank_altin2',
            }
        }
    ],
    emresolmaz: 'emreeeee'
};

const getters = {
    getValorantLevel(state) {
        return state.emresolmaz;
    }
};


export default {
    state,
    getters,
};
