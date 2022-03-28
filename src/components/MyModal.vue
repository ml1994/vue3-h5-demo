<!--
 * @Description: 
 * @Author: ma.cq
 * @Date: 2022-01-04 10:20:15
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-03-28 14:42:49
-->
<script lang="ts" setup>
const props = defineProps({
  isOpened: Boolean
})
const emit = defineEmits(['close-modal'])
const buttonClick = () => {
  emit('close-modal')
}
</script>

<template>
  <div v-if="isOpened" class="modal">
    <slot>is a modal</slot>
    <button @click="buttonClick">close</button>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  left: 50%;
  right: 50%;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  transform: translate(-50%, -50%);
  background-color: bisque;
}
</style>
