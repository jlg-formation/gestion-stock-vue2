<template>
  <div id="app">
    <HeaderLayout />
    <BodyLayout />
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from "@/components/layout/HeaderLayout.vue";
import BodyLayout from "@/components/layout/BodyLayout.vue";
import FooterLayout from "@/components/layout/FooterLayout.vue";

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
