import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import Home from '../views/Home.vue'
import welcome from '../components/welcome.vue'
import users from '../components/users/users.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          component: welcome
        },
        {
          path: '/1',
          component: users
        }
      ]
    }
  ]
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
