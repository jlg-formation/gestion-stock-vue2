<template>
  <div id="app">
    <HeaderLayout />
  </div>
</template>

<script>
import HeaderLayout from "./components/layout/HeaderLayout.vue";

export default {
  name: "App",
  components: {
    HeaderLayout,
  },
};
</script>

<style>
#app {
  font-family: sans-serif;
}
</style>
