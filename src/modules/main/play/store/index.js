const state = {
    playValorant: [
        {
            id: 1,
            levelName: 'Level 1',
            levelId: 'emres',
            levelLock: true,  //false: lock true: unlock
            showStatus: true,  //true: display
            videoName: 'ECluch 1v1',
            videoLink: 'TvEksPZuIak',
            videoOption: [
                {
                    optionId: 1,
                    optionName: 'Valorant Altın 2',
                    optionRank: 'valorank_altin1.png',
                    correctStatus: false,
                },
                {
                    optionId: 1,
                    optionName: 'Valorant Valorant',
                    optionRank: 'rank_valorant.png',
                    correctStatus: false,
                },
                {
                    optionId: 1,
                    optionName: 'Valorant Olumsuz 2',
                    optionRank: 'valorank_olumsuz2.png',
                    correctStatus: false,
                },
                {
                    optionId: 1,
                    optionName: 'Valorant Platin 1',
                    optionRank: 'valorank_platin1.png',
                    correctStatus: true,
                },
            ],
        },
        {
            id: 2,
            levelName: 'Level 2',
            levelId: 'beratsolmaz',
            levelLock: false,  //false: lock true: unlock
            showStatus: true,  //true: display
            videoName: 'BCluch 1v1',
            videoLink: '-Hy9at7y8Eo',
            videoOption: [
                {
                    optionId: 1,
                    optionName: 'Valorant Altın 2',
                    optionRank: 'valorank_altin1.png',
                    correctStatus: true,
                },
                {
                    optionId: 1,
                    optionName: 'Valorant Gumus 3',
                    optionRank: 'valorank_gumus1.png',
                    correctStatus: false,
                },
                {
                    optionId: 1,
                    optionName: 'Valorant Bronz 1',
                    optionRank: 'valorank_bronz1.png',
                    correctStatus: false,
                },
                {
                    optionId: 1,
                    optionName: 'Valorant Platin 1',
                    optionRank: 'valorank_platin1.png',
                    correctStatus: false,
                },
            ],
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
