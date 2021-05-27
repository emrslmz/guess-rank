import Vue from 'vue'
import App from './core/views/App.vue'
import router from './router';
import VueYoutube from 'vue-youtube'
import store from './store';
import MessagesMixin from './shared/mixins/MessagesMixin';
import MixinMe from '@/shared/mixins/me';
import VueElementLoading from "vue-element-loading";


Vue.use(VueYoutube)
Vue.config.productionTip = false
Vue.mixin(MessagesMixin);
Vue.mixin(MixinMe);
Vue.component("VueElementLoading", VueElementLoading);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
