import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/admin/Login.vue'
import AdminPage from '../views/admin/AdminPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },  
  {
      path: '/admin',
      name: 'Login',
      component: Login      

  },
  {
    path: '/AdminPage',
    name: 'AdminPage',
    component: AdminPage
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
