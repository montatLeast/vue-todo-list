<template>
  <div class="listitem">
        <div class="list-item">
            <label class="serial-number">{{item1.id+1}}.</label>
            <input class="check-box" type="checkbox" name="checkbox" @click="check(todo)">
            <span class="content">{{ item1.content }}</span>
        </div>
  </div>
</template>

<script>
export default {
  name: 'listitem',
  props: {
    item1 : Object
  },
  data(){

  },
  methods:{

		}
}
</script>

<style scoped>
</style>