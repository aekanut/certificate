import { createRouter, createWebHistory } from "vue-router"
import Login from "../views/Login.vue"
import Main from "../views/Main.vue"
import Create from "../views/Create.vue"
import RenewAndRevoke from "../views/RenewAndRevoke.vue"

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
  },
  {
    path: '/renewandrevoke/:id',
    name: "RenewAndRevoke",
    component: RenewAndRevoke
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
