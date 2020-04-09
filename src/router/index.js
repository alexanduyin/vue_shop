import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: '/login'
  // },
  {
    path: '/login',
    component:login
  },
  {
    path:'/home',
    component:Home
  }
]

const router = new VueRouter({
  routes
})
// router.beforeEach((to,from,next)=>{
//   /* to表示访问的路径 */
//   /* from表示从那个路径来 */
//   /* next表示放行 */
//   if(to.path==='/login') return next();
//   const tokenStr = window.sessionStorage.getItem('token')
//   if(!tokenStr) return next('/login')
//   next()
// })
export default router
