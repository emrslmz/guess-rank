const state = {
    playGame: {
        readyStatus: false,
        watchVideo: {
            videoAfterStartTime: 1,
            showVideo: false,
            showOptionTime: 5,
            showOption: false,
            isWorking: false,
            playerVars: {
                autoplay: 1,
                controls: 0,
            },
        },
    }
};

const getters = {
    getPlayGame(state) {
        return state.playGame;
    },
};

const actions = {
    countdownVideo() {
        setInterval(() => {
            if (state.playGame.watchVideo.videoAfterStartTime > 0) {
                state.playGame.watchVideo.videoAfterStartTime--;
            } else {
                state.playGame.watchVideo.showVideo = true;
            }
        },1000);
    },
    countdownOption() {
        setInterval(() => {
            if (state.playGame.watchVideo.showOptionTime > 0) {
                state.playGame.watchVideo.showOptionTime--;
            } else {
                state.playGame.watchVideo.showOption = true;
            }
        },1000);
    },
};


export default {
    state,
    getters,
    actions,
};