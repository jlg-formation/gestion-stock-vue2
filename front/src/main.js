import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";

import "./styles.scss";
import router from "./router";

import "./icons/fontawesome";

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
