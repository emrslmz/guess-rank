const state = {
    playValorant: [
        {
            id: 1,
            levelName: 'Level 1',
            levelId: '%rtewtzfgdgsgfhs',
            levelLock: false,  //false: lock true: unlock
            showStatus: true,  //true: display
            videoName: 'Cluch 1v1',
            videoLink: 'TvEksPZuIak',
            videoTime:
            videoOption: {
                correctOption: 'valorank_bronz1',
                wrongOptionFirst: 'valorank_demir3',
                wrongOptionSecond: 'valorank_gumus1',
                wrongOptionThird: '',
                wrongOptionFourth: 'valorank_altin2',
            }
        },
        {
            id: 2,
            levelName: 'Level 2',
            levelId: '%rtewtzfgdgsgfhs',
            levelLock: true,  //false: lock true: unlock
            showStatus: true,  //true: display
            videoName: 'Cluch 1v1',
            videoLink: 'TvEksPZuIak',
            videoOption: {
                correctOption: 'valorank_bronz1',
                wrongOptionFirst: 'valorank_demir3',
                wrongOptionSecond: 'valorank_gumus1',
                wrongOptionThird: '',
                wrongOptionFourth: 'valorank_altin2',
            }
        },
    ],
};

const getters = {
    getValorantLevel(state) {
        return state.playValorant;
    }
};


export default {
    state,
    getters,
};
