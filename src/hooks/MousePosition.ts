/*
 * @Description:
 * @Author: ma.cq
 * @Date: 2022-01-04 09:34:27
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-03-25 17:29:12
 */
import { reactive, toRefs, onMounted, onUnmounted } from 'vue'
import { throttle } from '../utils'

function useMousePosition() {
  const mouse = reactive({
    x: 0,
    y: 0
  })

  const update = (e: MouseEvent) => {
    mouse.x = e.pageX
    mouse.y = e.pageY
  }
  const moveListener = throttle(update)
  onMounted(() => {
    document.addEventListener('mousemove', moveListener)
  })
  onUnmounted(() => {
    document.removeEventListener('mousemove', moveListener)
  })
  return {
    ...toRefs(mouse)
  }
}

export default useMousePosition
