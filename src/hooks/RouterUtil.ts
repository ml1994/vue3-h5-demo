/*
 * @Description:
 * @Author: ma.cq
 * @Date: 2022-03-25 17:19:19
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-03-25 17:22:41
 */
import { router } from '../router'
function useRouterUtil() {
  return {
    router,
    route: router.currentRoute.value
  }
}
export default useRouterUtil
