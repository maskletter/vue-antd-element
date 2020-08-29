import { ref, App, VNode, reactive } from "vue";
import router from '@/router';
import { RouteLocationNormalizedLoaded } from 'vue-router';

const isLogin = ref(sessionStorage.getItem('user')?true:false);
const keepMaps = ref<string[]>([]);
const tabs: { url: string, name: string, child: VNode, title: string }[] = reactive([]);
const activeUrl = ref(location.pathname+location.search);
const systemProvide: SystemProvide = {
    keepalive: keepMaps,
    tabs: tabs,
    isLogin: (): boolean => {
        return isLogin.value
    },
    /**
     * 异步获取登录状态
     * 可以在这里处理接口
     */
    verificationLogin: () => {
        return new Promise(resolve => {
            isLogin.value = true;
            setTimeout(resolve, 1000)
        })
    },
   
    login: (data: any) => {
        sessionStorage.setItem('user', JSON.stringify(data))
        router.$router.replace('/');
        isLogin.value = true;
    },
    logout: () => {
        sessionStorage.removeItem('user')
        router.$router.push('/login');
        /**清除tab标签 */
        tabs.length = 0;
        /**清除缓存 */
        keepMaps.value = [];
        isLogin.value = false;
    },
    setKeep: (name: string) => {
        if(keepMaps.value.indexOf(name) == -1) {
            keepMaps.value.push(name);
        }
    },
    clearKeep: (name: string) => {
        const index = keepMaps.value.indexOf(name);
        if(index == -1) return;
        keepMaps.value.splice(index,1);
    },

}


export default (app: App<Element>) => {

    app.provide('system', systemProvide)

}