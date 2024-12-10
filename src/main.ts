import { createApp } from 'vue';
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import router from './router';

const pinia = createPinia()
createApp(App).use(pinia).use(router).use(Antd).mount('#app');

