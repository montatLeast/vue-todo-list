<template>
  <div class="listitem">
        <div class="list-item">
            <label class="serial-number">{{item1.id+1}}.</label>
            <input class="check-box" type="checkbox" name="checkbox" @click="select(item1)" v-model="item1.status">
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
    return{
      
    }
  },
  methods:{
      select(item){
        this.$emit("updateStatus",item);
     },
		}
}
</script>

<style scoped>
</style>