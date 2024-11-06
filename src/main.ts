import { createApp } from 'vue';
import './assets/index.css';
import { createPinia } from 'pinia';
import SvgIcon from '@/components/global/SvgIcon.vue';
import 'virtual:svg-icons-register';
import App from './App.vue';
import router from './router/index';

const app = createApp(App);
app.component('Icon', SvgIcon);
app.use(createPinia());
app.use(router);
app.mount('#app');
