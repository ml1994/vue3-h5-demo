<!--
 * @Description: 
 * @Author: ma.cq
 * @Date: 2022-02-24 13:53:31
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-03-28 16:35:00
-->

<script lang="ts" setup>
import MyModal from '@/components/MyModal.vue'
import useMousePosition from '../hooks/MousePosition'
import useModalHook from './modalHook'
import { useCounterStore } from '../store/counter'
import { useRoute, useRouter } from 'vue-router'
import { Button } from 'vant'

const counterStore = useCounterStore()
const router = useRouter()
counterStore.$onAction(
  ({
    name, // name of the action
    store, // store instance, same as `someStore`
    args, // array of parameters passed to the action
    after, // hook after the action returns or resolves
    onError // hook if the action throws or rejects
  }) => {
    if (name === 'add') {
      after(res => {
        router.push('/about/123?a=32')
      })
    }
  }
)
const { x, y } = useMousePosition()
const { modalOpened, openModal, closeModal } = useModalHook()
</script>

<template>
  <div class="home">Home</div>
  <h1>x:{{ x }},y:{{ y }}</h1>
  <p>{{ counterStore.count }}</p>
  <p>{{ counterStore.doubleCount }}</p>
  <button @click="counterStore.del">-1</button>
  <button @click="counterStore.add">+1</button>
  <button @click="openModal">open modal</button>
  <Button>hahah</Button>
  <router-link to="/about/123?a=32">goto about</router-link>
  <router-link to="/contact/123?a=32">goto contact</router-link>
  <MyModal :isOpened="modalOpened" @close-modal="closeModal" />
</template>

<style scoped></style>
