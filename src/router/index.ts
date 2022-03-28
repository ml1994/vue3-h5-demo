/*
 * @Description:
 * @Author: ma.cq
 * @Date: 2022-02-24 11:18:11
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-03-10 11:32:28
 */
import * as VueRouter from 'vue-router'
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Contact = () => import('../views/Contact.vue')

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about/:id', name: 'about', component: About },
  { path: '/contact/:id', name: 'contact', component: Contact }
]
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  next()
})

export { router }
