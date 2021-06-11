import { createRouter, createWebHistory } from "vue-router"
import Login from "../views/Login.vue"
import Main from "../views/Main.vue"
import Create from "../views/Create.vue"

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: '/main',
    name: "Main",
    component: Main
  },
  {
    path: '/create',
    name: "Create",
    component: Create
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
