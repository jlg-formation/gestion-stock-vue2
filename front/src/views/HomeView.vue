<template>
  <main>
    <h1>Gérer efficacement votre stock !</h1>
    <router-link to="/stock" class="button primary">
      <span>Voir le stock</span>
      <fa-icon icon="fa-solid fa-angle-right" />
    </router-link>
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
