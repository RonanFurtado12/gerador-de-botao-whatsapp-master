import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../views/Form.vue'
import Teste from "../views/Teste.vue"
import Login from "../views/Login.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Form',
    component: Form
  },
  {
    path: '/Link',
    name: 'Link',

    component: () => import(/* webpackChunkName: "Link" */ '../views/Link.vue')
  },
  {
    path: '/Teste',
    name: 'teste',
    component: Teste
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
