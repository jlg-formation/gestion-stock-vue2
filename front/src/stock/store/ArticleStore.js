import { Store } from "vuex";
import { api } from "../api";

export const articleStore = new Store({
  state: {
    articles: undefined,
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
