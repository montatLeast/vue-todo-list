<template>
  <div class="footera">
    <div class="buttons">
      <button class="selector" @click="getState('All')">ALL</button>
      <button class="selector" @click="getState('Active')">Active</button>
      <button class="selector" @click="getState('Complete')">Complete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "footera",
  data() {
    return {
        
    };
  },
  methods: {
    getState(msg) {
      this.$emit("getItemByState", msg);
    }
  }
};
</script>

<style scoped>
@import url(../../public/static/css/all.css);
</style>
