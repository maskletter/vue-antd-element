import { createApp } from 'vue';
import App from './App'
import router from './router'
import 'ant-design-vue/dist/antd.min.css';
// import store from './store'

const app  = createApp(App);

// Vue.config.productionTip = false
app.config.performance = false
app.use(router.$router);
// app.config.globalProperties.$
router.$router.isReady().then(() => {
    app.mount('#app')
})

