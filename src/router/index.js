import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页
// import Home from '../views/Home.vue'
// 引导页1
Vue.use(VueRouter)

  const routes = [
  {
    path: '/one-index',
    name: 'one-index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/boot-page/one-index.vue')
  },
  {
    path: '/two-index',
    name: 'two-index',
    component: () => import(/* webpackChunkName: "about" */ '../views/boot-page/two-index.vue')
  },
  {
    path: '/three-index',
    name: 'three-index',
    component: () => import(/* webpackChunkName: "about" */ '../views/boot-page/three-index.vue')
  },
  {
    path: '/home',
    name: 'home-index',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/home.vue')
  },
  {
    path: '/row-page',
    name: 'row-page',
    component: () => import(/* webpackChunkName: "about" */ '../views/row-page/row-page.vue')
  },
  {
    path: '/service-page',
    name: 'service-page',
    component: () => import(/* webpackChunkName: "about" */ '../views/service-page/service-page.vue')
  },
  {
    path: '/travel-circle',
    name: 'travel-circle',
    component: () => import(/* webpackChunkName: "about" */ '../views/travel-circle/travel-circle.vue')
  },
  {
    path: '/my-page',
    name: 'my-page',
    component: () => import(/* webpackChunkName: "about" */ '../views/my-page/my-page.vue')
  },
  {
    path: '/my-page-shezhi',
    name: 'my-page-shezhi',
    component: () => import(/* webpackChunkName: "about" */ '../views/my-page/shezhi.vue')
  },
  {
    path: '/login1',
    name: 'login1',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/login1.vue')
  },
  {
    path: '/login2',
    name: 'login2',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/login2.vue')
  },
  {
    path: '/home-cart',
    name: 'home-cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/home-cart.vue')
  },
  {
    path: '/home-message',
    name: 'home-message',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/home-message.vue')
  },
  {
    path: '/home-shop',
    name: 'home-shop',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/home-shop.vue')
  },
  {
    path: '/service-eat',
    name: 'service-eat',
    component: () => import(/* webpackChunkName: "about" */ '../views/service-page/service-eat.vue')
  },
  {
    path: '/home-cart-info',
    name: 'home-cart-info',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/home-cart-info.vue')
  },
  {
    path: '/service-yingdi',
    name: 'service-yingdi',
    component: () => import(/* webpackChunkName: "about" */ '../views/service-page/service-yingdi.vue')
  },
  {
    path: '/service-jingdian',
    name: 'service-jingdian',
    component: () => import(/* webpackChunkName: "about" */ '../views/service-page/service-jingdian.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
