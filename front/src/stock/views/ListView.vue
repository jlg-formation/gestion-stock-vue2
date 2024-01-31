<script>
import { articleStore } from "../store/ArticleStore";
import AsyncButton from "@/components/AsyncButton.vue";

export default {
  name: "ListView",
  components: {
    AsyncButton,
  },
  data() {
    return {
      selectedArticles: new Set(),
      errorMsg: "",
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
      try {
        this.errorMsg = "";
        const ids = [...this.selectedArticles].map((a) => a.id);
        await articleStore.dispatch("remove", ids);
        this.selectedArticles.clear();
      } catch (err) {
        console.log("err: ", err);
        this.errorMsg = "Erreur Technique";
      }
    },
    async refresh() {
      try {
        this.errorMsg = "";
        console.log("refreshing");
        await articleStore.dispatch("refresh");
        console.log("refreshed");
      } catch (err) {
        console.log("err: ", err);
        this.errorMsg = "Erreur Technique";
      }
    },
  },
};
</script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <AsyncButton
          title="Rafraîchir"
          :action="refresh"
          icon="fa-solid fa-rotate-right"
        >
        </AsyncButton>
        <router-link append to="add" class="button" title="Ajouter">
          <fa-icon icon="fa-solid fa-plus" />
        </router-link>
        <AsyncButton
          :hidden="selectedArticles.size === 0"
          title="Supprimer"
          :action="remove"
          icon="fa-solid fa-trash-can"
        >
        </AsyncButton>
      </nav>
      <div class="error">
        {{ errorMsg }}
      </div>
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
