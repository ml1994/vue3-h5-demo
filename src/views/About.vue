<!--
 * @Description: 
 * @Author: ma.cq
 * @Date: 2022-02-24 13:53:31
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-03-25 17:38:16
-->

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const goBack = () => {
  router.back()
}
</script>

<template>
  <div>params{{ $route.params }}</div>
  <div>query{{ $route.query }}</div>
  <button @click="goBack">route</button>
  <button @click="goBack">back</button>
</template>

<style scoped></style>
