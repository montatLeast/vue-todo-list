<template>
  <div class="listitem">
    <div class="list-item">
      <label  :class="{ isSelected: item1.status}">{{item1.id+1}}.</label>
      <input class="check-box" type="checkbox" name="checkbox"
        @click="select(item1)" v-model="item1.status" />
      <span :class="{ drawLine: item1.status}" @dblclick="openEdit(item1)">{{ item1.content }}</span>
      <input
        id="edit"
        class="edit"
        v-if="editable"
        v-model="editText"
        @keydown.enter="finishEdit(item1)"
      />
    </div>
  </div>
</template>



<script>
export default {
  name: "listitem",
  props: {
    item1: Object
  },
  data() {
    return {
      editText: null,
      editable: false,
    };
  },
  methods: {
    select(item) {
      this.$emit("updateStatus", item);

    },
    openEdit(item) {
      this.editText = item.content;
      this.editable = true;
    },
    finishEdit(item) {
      if (this.editText != null) {
        item.content = this.editText;
      }
      this.editable = false;
    }
  }
};
</script>

<style scoped>
</style>