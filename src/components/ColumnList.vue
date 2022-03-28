<!--
 * @Description: 
 * @Author: ma.cq
 * @Date: 2022-01-05 09:50:19
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-03-10 11:30:14
-->
<script lang="ts">
export interface ColumnProps {
  id: number
  title: string
  avatar?: string
  description: string
}
</script>

<script lang="ts" setup>
import { computed, defineProps, PropType } from 'vue'

const props = defineProps({
  list: {
    type: Array as PropType<ColumnProps[]>,
    required: true
  }
})

const cList = computed(() => {
  return props.list.map(item => item)
})
</script>

<template>
  <div v-for="item in cList" :key="item.id">{{ item }}</div>
</template>
