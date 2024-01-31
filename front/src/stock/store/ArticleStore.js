import { Store } from "vuex";
import { sleep } from "@/utils/misc";

export const articleStore = new Store({
  state: {
    articles: [
      { id: "a1", name: "Tournevis", price: 2.99, qty: 345 },
      { id: "a2", name: "Pelle", price: 4, qty: 12 },
    ],
  },
  actions: {
    empty(state) {
      state.articles = [];
    },
    async add(store, newArticle) {
      await sleep(300);
      store.state.articles.push(newArticle);
    },
    async remove(store, ids) {
      await sleep(300);
      store.state.articles = store.state.articles.filter(
        (a) => !ids.includes(a.id)
      );
    },
    async refresh() {
      await sleep(300);
    },
  },
});
