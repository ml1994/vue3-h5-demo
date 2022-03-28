<!--
 * @Description: 
 * @Author: ma.cq
 * @Date: 2022-02-24 13:53:31
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-03-10 11:17:53
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
  <div>contact</div>
  <div>params{{ $route.params }}</div>
  <div>query{{ $route.query }}</div>
  <button @click="goBack">back</button>
</template>

<style scoped></style>
