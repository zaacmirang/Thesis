import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VerifyCode from '../components/home/VerifyCode.vue'
import Login from '../views/admin/Login.vue'
import AdminPage from '../views/admin/AdminPage.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/verify-code',
    name: 'Verify',
    component: VerifyCode,
    meta:{
      appointmentFirst: true
    }
  },
  {
      path: '/admin',
      name: 'Login',
      component: Login    ,
      meta:{
        alreadyLoggedIn: true,
      }
  },
  {
    path: '/AdminPage',
    name: 'AdminPage',
    component: AdminPage,
    meta:{
      requiresAuth: true,
    }
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

if(localStorage.getItem('token') !== ''){
  store.dispatch('setIsLoggedIn', true)
}

if(localStorage.getItem('appointmentSent')){
  store.dispatch('setAppointmentSent', true)
}

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  let alreadyLoggedIn = to.matched.some(record => record.meta.alreadyLoggedIn);
  let appointmentFirst = to.matched.some(record => record.meta.appointmentFirst);
  let isLoggedIn = store.getters.getIsLoggedIn;
  let appointmentSent = store.getters.getAppointmentSent;

  if(requiresAuth && !isLoggedIn){
    next('admin')
    console.log('not authenticated')
  }else if(alreadyLoggedIn && isLoggedIn){
    next('AdminPage')
    console.log('already logged in')
  }else if(appointmentFirst && !appointmentSent){
    next('/')
  }else{
    next()
  }
})


export default router
