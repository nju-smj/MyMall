import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
let Home=()=>import('views/home/home');
let Category=()=>import('views/category/category');
let Profile=()=>import('views/profile/profile');
let Shopcart=()=>import('views/shopcart/shopcart');
const routes = [
  {
    path:'',
    redirect:"/home"
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/shopcart',
    component:Shopcart
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
