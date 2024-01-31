<template>
  <main>
    <h1>Gérer efficacement votre stock !</h1>
    <router-link to="/stock" class="button primary">Voir le stock</router-link>
    <button>Voir le stock</button>
    <button disabled>Voir le stock</button>
  </main>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped lang="scss">
main {
  flex: 0;
}
</style>
