import Vue from "vue";
import App from "./App.vue";

import "./styles.scss";

Vue.config.productionTip = false;

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");

new Vue({
  el: "#app",
  render: (h) => h(App),
});
