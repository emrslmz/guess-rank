import axios from 'axios';
const state = {

}

const getters = {

}

const actions = {
    getGameCategory() {
        axios
            .get('\'https://guess-what-rank-api.herokuapp.com/api/game')
    }
}


export default {
    state,
    getters,
    actions,
}