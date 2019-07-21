<template>
  <div class="todolist">

       <input id="input_item" type="text"/> 
       <button id="button_add">Add</button>

    <listitem></listitem>

   <div class="buttons">
    <button class="seletor">ALL</button>
    <button class="seletor">Active</button>
     <button class="seletor">Complete</button>
   </div>

  </div>
</template>

<script>
import listitem from './list-item.vue'
export default {
  name: 'todolist',
  components: {
    listitem
  },
  data(){
      return {

      }
  },
  methods:{

}
}
</script>

<style scoped>
@import url(../../public/static/css/all.css);
</style>
