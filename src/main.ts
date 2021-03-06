import { createApp, ref } from 'vue';
import App from './App'
import router from './router'
import 'ant-design-vue/dist/antd.min.css';
// import store from './store'
import SystemPlugin from './tool/system-plugin'
import antd from 'ant-design-vue'

const app  = createApp(App);

// Vue.config.productionTip = false
app.config.performance = false
app.use(SystemPlugin)
app.use(router.$router);
app.config.globalProperties.$aa = () => {
    
}
router.$router.isReady().then(() => {
    app.mount('#app')
})

