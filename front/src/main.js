import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import { isProd } from "@/utils/misc";

import "./styles.scss";
import router from "./router";

import "./icons/fontawesome";

Vue.config.productionTip = false;

if (isProd()) {
  console.log = () => {};
}

Vue.use(Vuex);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
