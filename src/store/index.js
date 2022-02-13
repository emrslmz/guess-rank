import { createStore } from 'vuex';

import Core from './core';
import Auth from '../modules/auth/store';

// Create a new store instance.
export default createStore({
  modules: {
    Core,
    Auth,
  },
});
