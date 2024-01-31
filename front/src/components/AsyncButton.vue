<script>
export default {
  name: "AsyncButton",
  props: {
    icon: String,
    action: Function,
  },
  data() {
    return {
      isDoing: false,
    };
  },
  methods: {
    async doAction() {
      try {
        this.isDoing = true;
        await this.action();
      } catch (err) {
        console.log("err: ", err);
      } finally {
        this.isDoing = false;
      }
    },
  },
};
</script>

<template>
  <button @click="doAction" :disabled="isDoing">
    <fa-icon
      :icon="isDoing ? 'fa-solid fa-circle-notch' : icon"
      :spin="isDoing"
    />
  </button>
</template>

<style scoped lang="scss"></style>
