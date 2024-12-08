// src/router.ts
import { createRouter, createWebHistory, RouteRecord, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  // Define your routes here
  {
    path: "/",
    name: "home",
    component: HomeView,
  }
  // {
  //   path: "/user/login",
  //   name: "home",
  //   component: HomeView,
  // },
  // {
  //   path: "/user/register",
  //   name: "home",
  //   component: HomeView,
  // },
  // {
  //   path: "/admin/userManage",
  //   name: "home",
  //   component: HomeView,
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
