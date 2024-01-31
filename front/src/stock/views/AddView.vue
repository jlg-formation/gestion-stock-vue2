<script>
export default {
  name: "HomeView",
  data() {
    return {
      newArticle: {
        name: "Truc",
        price: 0,
        qty: 1,
      },
    };
  },
  methods: {
    handleSubmit: () => {
      console.log("onsubmit");
    },
  },
};
</script>

<template>
  <main>
    <h1>Ajouter un article</h1>
    <form @submit.prevent="handleSubmit()">
      <label>
        <span>Nom</span>
        <input type="text" v-model="newArticle.name" />
        <span class="error"></span>
      </label>
      <label>
        <span>Prix</span>
        <input type="number" v-model="newArticle.price" />
        <span class="error"></span>
      </label>
      <label>
        <span>Quantité</span>
        <input type="number" v-model="newArticle.qty" />
        <span class="error"></span>
      </label>
      <div class="error"></div>
      <button class="primary">
        <fa-icon icon="fa-solid fa-plus" />
        <span>Ajouter</span>
      </button>
    </form>
  </main>
</template>

<style scoped lang="scss">
form {
  display: flex;
  flex-flow: column;
  gap: 0.5em;

  width: 100%;
  max-width: 25em;

  label {
    display: flex;
    flex-flow: column;

    input {
      padding: 0.5em 1em;
      border: 0.1em solid #aaa;
      border-radius: 0.3em;
    }
  }

  div.error {
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
