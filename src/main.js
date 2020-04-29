import './plugins/bootstrap-vue';
import '@babel/polyfill';
import 'mutationobserver-shim';

import Vue from 'vue';

import Axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");
