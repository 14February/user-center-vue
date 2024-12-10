// src/router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import UserLoginPage from '../pages/user/UserLoginPage.vue';
import UserRegisterPage from '../pages/user/UserRegisterPage.vue';
import UserManagePage from '../pages/admin/UserManagePage.vue';

const routes: Array<RouteRecordRaw> = [
  // Define your routes here
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/user/login",
    name: "login",
    component: UserLoginPage,
  },
  {
    path: "/user/register",
    name: "register",
    component: UserRegisterPage,
  },
  {
    path: "/admin/userManage",
    name: "userManage",
    component: UserManagePage,
  }
];
// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
