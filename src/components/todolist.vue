<template>
  <div class="todolist">
    <input id="input_item" type="text" v-model="nextItem" />
    <button id="button_add" @click="addNewItem">Add</button>

      <div
        is="listitem"
        v-for="(item,index) in items"
        v-bind:key="index"
        v-bind:item1="item"
      ></div>

    <div class="buttons">
      <button class="seletor">ALL</button>
      <button class="seletor">Active</button>
      <button class="seletor">Complete</button>
    </div>
  </div>
</template>

<script>
import listitem from "./list-item.vue";
export default {
  name: "todolist",
  components: {
    listitem
  },
  data() {
    return {
      nextItem: '',
      items:[],

      nextItemId:0
    };
  },
  methods: {
    addNewItem(){
      let item = {
        id : this.nextItemId++,
        content : this.nextItem
      }
      this.items.push(item);
      
    }
  }
};
</script>

<style scoped>
@import url(../../public/static/css/all.css);
</style>
