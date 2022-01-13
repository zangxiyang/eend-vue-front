import { createApp } from 'vue'
import App from './App.vue'
// 引入 tailwindCss
import '@/assets/css/index.css'
// 引入 arcoDesign
import "@arco-design/web-vue/dist/arco.css";
import ArcoVue from '@arco-design/web-vue';
// 引入arco额外图标
import ArcoVueIcon from "@arco-design/web-vue/es/icon";
// 引入路由
import {router} from "@/router";
// 引入eend基础scss
import '@/assets/scss/eend.core.scss'


createApp(App)
    .use(ArcoVue)
    .use(ArcoVueIcon)
    .use(router)
    .mount('#app')
