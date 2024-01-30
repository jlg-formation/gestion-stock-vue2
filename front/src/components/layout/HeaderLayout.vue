<template>
  <header>
    <a href="#">
      <img src="assets/logo.svg" alt="Logo Gestion Stock" />
      <span>Gestion Stock</span>
    </a>
  </header>
</template>

<script>
export default {
  name: "HeaderLayout",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  background: #eee;
  height: 3em;
  padding: 0 0.5em;
  display: flex;
  align-items: center;

  img {
    height: 2.5em;
  }
}
</style>
