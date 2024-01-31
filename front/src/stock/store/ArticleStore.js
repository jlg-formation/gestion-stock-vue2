import { Store } from "vuex";
import { sleep } from "@/utils/misc";

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
    async add(state, newArticle) {
      await sleep(2000);
      console.log("store add -> newArticle: ", newArticle);
      state.articles.push({ ...newArticle });
    },
  },
});
