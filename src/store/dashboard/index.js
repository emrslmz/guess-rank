const state = {
    profileSettingRightCard: 1,
}

const getters = {
    getProfileRightCard(state) {
        return state.profileSettingRightCard;
    }
}

const mutations = {
    openSettingCardRightProfile(state) {
        if (state.profileSettingRightCard === 2 ) {
            state.profileSettingRightCard = 1;
        } else {
            state.profileSettingRightCard = 2;
        }
    },
    openReferenceCardRightProfile(state) {
        if (state.profileSettingRightCard === 3 ) {
            state.profileSettingRightCard = 1;
        } else {
            state.profileSettingRightCard = 3;
        }
    }
}
export default {
    state,
    getters,
    mutations
}