<script>
import { articleStore } from "../store/ArticleStore";

export default {
  name: "ListView",
  data() {
    return {
      selectedArticles: new Set(),
    };
  },
  computed: {
    articles() {
      return articleStore.state.articles;
    },
  },
  methods: {
    select(a) {
      console.log("select");
      this.selectedArticles.has(a)
        ? this.selectedArticles.delete(a)
        : this.selectedArticles.add(a);
      this.selectedArticles = new Set(this.selectedArticles);
    },
    async remove() {
      const ids = [...this.selectedArticles].map((a) => a.id);
      await articleStore.dispatch("remove", ids);
    },
    async refresh() {
      console.log("refreshing");
      await articleStore.dispatch("refresh");
      console.log("refreshed");
    },
  },
};
</script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <button title="Rafraîchir" @click="refresh">
          <fa-icon icon="fa-solid fa-rotate-right" />
        </button>
        <router-link append to="add" class="button" title="Ajouter">
          <fa-icon icon="fa-solid fa-plus" />
        </router-link>
        <button
          title="Supprimer"
          :hidden="selectedArticles.size === 0"
          @click="remove()"
        >
          <fa-icon icon="fa-solid fa-trash-can" />
        </button>
      </nav>
      <div class="error"></div>
      <table>
        <thead>
          <th class="name">Nom</th>
          <th class="price">Prix</th>
          <th class="qty">Quantité</th>
        </thead>
        <tbody>
          <tr
            v-for="a in articles"
            :key="a.id"
            @click="select(a)"
            :class="{ selected: selectedArticles.has(a) }"
          >
            <td class="name">{{ a.name }}</td>
            <td class="price number">{{ a.price }} €</td>
            <td class="qty number">{{ a.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  gap: 0.5em;
}

div.error {
  height: 2em;
  display: flex;
  align-items: center;
  font-weight: bold;
}

table {
  border: 0.1em solid #aaa;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 0.3em;
  overflow: hidden;

  th,
  td {
    padding: 0.5em 1em;
  }

  thead {
    background: #aaa;
  }

  tbody {
    cursor: pointer;
    tr:nth-child(even) {
      background: #eee;
    }

    tr:hover {
      background: #ddd;
    }

    tr.selected {
      background: #ccc;
    }

    .number {
      text-align: right;
    }
  }
}
</style>
