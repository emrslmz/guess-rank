import Vue from 'vue'
import App from './core/views/App.vue'
import router from './router';
import VueYoutube from 'vue-youtube'
import store from './store';
import MessagesMixin from './shared/mixins/MessagesMixin';

Vue.use(VueYoutube)
Vue.config.productionTip = false
Vue.mixin(MessagesMixin);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
