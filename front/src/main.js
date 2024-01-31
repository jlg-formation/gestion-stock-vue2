import Vue from "vue";
// import App from "./App.vue";

import "./styles.scss";

Vue.config.productionTip = false;

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");

new Vue({
  // render: (h) => h(App),
  el: "#app",
  // render: (h) => h(App),
  //   components: {
  //     App,
  //   },
  data: function () {
    return {
      firstName: "Ryan",
    };
  },
  template: `
  <div>
  <p>Hello truc</p>
  </div>
  `,
});
