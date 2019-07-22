<template>
  <div class="headera">
    <input id="input_item" type="text" v-model="nextItem" />
    <button id="button_add" @click="addNewItem">Add</button>
  </div>
</template>

<script>
export default {
  name: "headera",
  data() {
    return {
        nextItem : ""
    };
  },
  methods: {
    addNewItem() {
        this.$emit("addItem", this.nextItem);

    }
  }
};
</script>

<style scoped>
@import url(../../public/static/css/all.css);
</style>
