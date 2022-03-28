/*
 * @Description:
 * @Author: ma.cq
 * @Date: 2022-03-10 11:36:37
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-03-25 17:29:32
 */

import { ref } from 'vue'
import useRouterUtil from '../hooks/RouterUtil'

function useModalHook() {
  const modalOpened = ref(false)
  const { route, router } = useRouterUtil()
  const openModal = () => {
    console.log(route, router)
    modalOpened.value = true
  }
  const closeModal = () => {
    modalOpened.value = false
  }
  return {
    modalOpened,
    openModal,
    closeModal
  }
}
export default useModalHook
