import { createApp } from 'vue';
import './assets/index.css';
import { createPinia } from 'pinia';
import SvgIcon from '@/components/global/SvgIcon.vue';
import 'virtual:svg-icons-register';
import App from './App.vue';
import router from './router/index';
import { createI18n } from 'vue-i18n';
import zh from './i18n/zh-TW.json';
import en from './i18n/en-US.json';

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') ?? 'zh-TW',
  fallbackLocale: 'zh-TW',
  messages: {
    'zh-TW': zh,
    'en-US': en,
  },
  globalInjection: true, //  全局可使用 $t()
});

const app = createApp(App);
app.component('Icon', SvgIcon);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount('#app');
