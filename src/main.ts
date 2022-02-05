import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './index.css'
import './assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';


const appInstance = createApp(App);

appInstance.use(router);
appInstance.mount('#app');
