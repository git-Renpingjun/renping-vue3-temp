import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import { MotionPlugin } from '@vueuse/motion';
import './style.css';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
{{#values.useRouter}}
import router from './router';
{{/values.useRouter}}
{{#values.usePinia}}
import { createPinia } from 'pinia';
{{/values.usePinia}}

const app = createApp(App);
{{#values.useRouter}}
app.use(router)
{{/values.useRouter}}
{{#values.usePinia}}
app.use(createPinia())
{{/values.usePinia}}

app.use(Antd).use(MotionPlugin).mount('#app');
