/*
 * @Description:
 * @Author: ma.cq
 * @Date: 2022-02-24 10:25:47
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-03-25 17:45:30
 */
import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount(): number {
      return this.count * 2
    }
  },
  actions: {
    add() {
      this.count++
    },
    del() {
      this.count--
    }
  }
})
