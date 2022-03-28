/*
 * @Description:
 * @Author: ma.cq
 * @Date: 2022-02-14 11:08:17
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-03-28 16:21:55
 */

// 节流
export function throttle(fn: any, delay: number = 100) {
  let timer: any = null
  return function () {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(null, arguments)
      timer = null
    }, delay)
  }
}
