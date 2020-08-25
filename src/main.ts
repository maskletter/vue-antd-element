import { createApp } from 'vue';
import App from './App'
import router from './router'
import antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.min.css';
import store from './store'

const app  = createApp(App);
app.use(router.$router);
router.$router.isReady().then(() => {
    app.use(antd as any).use(store).mount('#app')
})

