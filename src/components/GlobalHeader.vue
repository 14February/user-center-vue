<template>
  <div class="globalHeader">
    <!-- false不换行 -->
    <a-row :wrap="false">
      <a-col flex="200px">
        <div class="titleBar">
          <!-- 头像 -->
          <img class="logo" src="../assets/卡通头像.png" alt="卡通" />
          <div class="title">fish用户中心</div>
        </div>
      </a-col>
      <a-col flex="auto"
        ><a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          @click="doMenuClick"
          :items="items"
      /></a-col>
      <a-col flex="80px">
        <div class="userLoginStatus">
          <div v-if="loginUserStore.loginUser.phone">
            {{ loginUserStore.loginUser.phone }}
          </div>  
          <div v-else>
            <a-button type="primary" href="/user/login">登录</a-button>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts" setup>
import { h, ref } from 'vue';
import {CrownOutlined, HomeOutlined} from '@ant-design/icons-vue';
import { MenuProps } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { useLoginUserStore } from '../store/useLoginUserStore';


const loginUserStore = useLoginUserStore();

const router = useRouter();

// 点击菜单路由跳转，这里传入的key实际就是路径
const doMenuClick = ({ key }: { key: string }) => {
  router.push({
    path: key,
  });
};

const current = ref<string[]>(['mail']);

// 监听路由变化，更新当前菜单选中状态
router.afterEach((to, from, failure) => {
  current.value = [to.path];
});


const items = ref<MenuProps['items']>([
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: '/user/login',
    label: '用户登录',
    title: '用户登录',
  },
  {
    key: '/user/register',
    label: '用户注册',
    title: '用户注册',
  },
  {
    key: '/admin/userManage',
    icon: () => h(CrownOutlined),
    label: '用户管理',
    title: '用户管理',
  },
  {
    key: 'others',
    label: h('a', { href: '', target: '_blank' }, '编程导航'),
    title: '编程导航',
  },
]);
</script>

<style scoped>
.titleBar {
  display: flex;
  align-items: center;
}
.logo {
  height: 40px;
}

.title {
  color: black;
  font-size: 10px;
  margin-left: 16px;
}


</style>


