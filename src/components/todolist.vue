<template>
  <div class="todolist">
    <input id="input_item" type="text" v-model="nextItem" />
    <button id="button_add" @click="addNewItem">Add</button>
    <ol>
    <li is="listitem" v-for="(item,index) in items_show" :class="{even : index%2==0}" 
    v-bind:key="index" v-bind:item1="item" v-bind:idx="index" @deleteItem="deleteItem"></li>
    </ol>
    <div class="buttons">
      <button class="selector" @click="getAll">ALL</button>
      <button class="selector" @click="getActive">Active</button>
      <button class="selector" @click="getComplete">Complete</button>
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
      nextItem: "",
      items_show: [],
      items_all: [],
      nextItemId: 0
    };
  },
  methods: {
    addNewItem() {
      let item = {
        id: this.nextItemId++,
        content: this.nextItem,
        status: false
      };
      this.items_show.push(item);
      this.items_all.push(item);
    },
    getAll() {
      this.items_show = Array.from(this.items_all);
    },
    getActive() {
      this.items_show = this.items_all.filter(i => i.status === false);
    },
    getComplete() {
      this.items_show = this.items_all.filter(i => i.status === true);
    },
    updateState(item) {
      let i_selected = this.items_all.find(i => i.id === item.id);
      i_selected.status = true;
    },
    deleteItem(item){
      let idx_1 = this.items_show.indexOf(item);
      this.items_show.splice(idx_1, 1);
      let idx_2 = this.items_all.indexOf(item);
      this.items_all.splice(idx_2, 1);
    }
  }
};
</script>

<style scoped>
@import url(../../public/static/css/all.css);
</style>
