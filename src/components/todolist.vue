<template>
  <div class="todolist">
    <headera @addItem="addItem"></headera>
    <ol>
    <li is="listitem" v-for="(item,index) in items_show" :class="{even : index%2==0}" 
    v-bind:key="index" v-bind:item1="item" v-bind:idx="index" @deleteItem="deleteItem"></li>
    </ol>
    <footera @getItemByState="getItemByState"></footera>

  </div>
</template>

<script>
import listitem from "./list-item.vue";
import footera from "./footera.vue"
import headera from "./headera.vue"

export default {
  name: "todolist",
  components: {
    listitem,
    footera,
    headera,
  },
  data() {
    return {
      items_show: [],
      items_all: [],
      nextItemId: 0
    };
  },
  methods: {
    addItem(nextItem) {
      let item = {
        id: this.nextItemId++,
        content: nextItem,
        status: false
      };
      this.items_show.push(item);
      this.items_all.push(item);
    },
    getItemByState(msg){
      if(msg==="All"){
        this.getAll();
      }else if(msg==="Active"){
        this.getActive();
      }else{
        this.getComplete();
      }
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
