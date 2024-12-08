<template>
  <div id="basicLayout">
    <a-layout>
      <a-layout-header class="header">
        <GlobalHeader/>
      </a-layout-header>
      <a-layout-content class="content">
        <!-- vue自动根据访问的地址，替换内容 -->
        <router-view/>
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://14february.github.io/">yurui的博客</a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from '../components/GlobalHeader.vue'
</script>

<style scoped>
#basicLayout .footer {
  background: #efefef;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
}
#basicLayout .content {
    padding: 20px;
    margin-bottom: 20px;
    /* 从左到右渐变：灰色到白色 */
    background: linear-gradient(to right, #efefef, #fff);
}
/* #basicLayout .header {

} */
</style>
