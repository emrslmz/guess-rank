import { createStore } from 'vuex';

import Core from './core';
import Auth from '../modules/auth/store';
import Profile from '../modules/app/profile/store';
import Market from '../modules/app/market/store';

// Create a new store instance.
export default createStore({
  modules: {
    Core,
    Auth,
    Profile,
    Market,
  },
});
