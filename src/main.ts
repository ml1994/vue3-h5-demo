/*
 * @Description:
 * @Author: ma.cq
 * @Date: 2021-12-31 15:22:01
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-03-25 17:15:57
 */
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from './router/index'

createApp(App).use(router).use(createPinia()).mount('#app')
