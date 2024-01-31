import Vue from "vue";
import App from "./App.vue";

import "./styles.scss";
import router from "./router";

import "./icons/fontawesome";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
