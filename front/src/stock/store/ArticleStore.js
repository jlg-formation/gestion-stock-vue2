import { Store } from "vuex";
import { api } from "../api";

export const articleStore = new Store({
  state: {
    articles: [
      { id: "a1", name: "Tournevis", price: 2.99, qty: 345 },
      { id: "a2", name: "Pelle", price: 4, qty: 12 },
    ],
  },
  actions: {
    async add(store, newArticle) {
      await api.add(newArticle);
      store.state.articles = await api.getArticles();
    },
    async remove(store, ids) {
      await api.remove(ids);
      store.state.articles = await api.getArticles();
    },
    async refresh(store) {
      store.state.articles = await api.getArticles();
    },
  },
});
