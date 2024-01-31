<template>
  <div id="app">
    <HeaderLayout />
    <BodyLayout />
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from "./components/layout/HeaderLayout.vue";
import BodyLayout from "./components/layout/BodyLayout.vue";
import FooterLayout from "./components/layout/FooterLayout.vue";

export default {
  name: "App",
  components: {
    HeaderLayout,
    FooterLayout,
    BodyLayout,
  },
};
</script>

<style scoped lang="scss">
#app {
  font-family: sans-serif;

  min-height: 100vh;

  display: flex;
  flex-flow: column;
  justify-content: space-between;
}
</style>
