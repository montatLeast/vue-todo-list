<template>
  <div id="app">
    <h1 id="title">Vue To Do List</h1>
    <i id="intro">Simple Todo List with adding and filter by diff status</i>

    <todolist></todolist>
  </div>
</template>

<script>
import todolist from './components/todolist.vue'

export default {
  name: 'app',
  components: {
    todolist
  }
}
</script>

<style>

</style>
