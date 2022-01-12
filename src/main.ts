import { createApp } from 'vue'
import App from './App.vue'
// 引入 tailwindCss
import '@/assets/css/index.css'
// 引入 arcoDesign
import "@arco-design/web-vue/dist/arco.css";
import ArcoVue from '@arco-design/web-vue';
// 引入路由
import {router} from "@/router";


createApp(App)
    .use(ArcoVue)
    .use(router)
    .mount('#app')
