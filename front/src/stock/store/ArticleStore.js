import { Store } from "vuex";

export const articleStore = new Store({
  state: {
    articles: [
      { id: "a1", name: "Tournevis", price: 2.99, qty: 345 },
      { id: "a2", name: "Pelle", price: 4, qty: 12 },
    ],
  },
  mutations: {
    empty(state) {
      state.articles = [];
    },
  },
});
