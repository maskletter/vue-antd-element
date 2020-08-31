import { defineComponent, VNode, KeepAlive, createVNode, ref, provide, inject } from 'vue'
import { ThemeProvide, makeStyles, createStyle } from './components/theme'
import { useRouter, useRoute } from 'vue-router'
import RouterView from './components/routerview'
import { Spin } from 'ant-design-vue'
import sysRouter from './router'




const style = {
    color: '#409EFF',
    boxShadow: '0 2px 12px 0 rgba(0,0,0,.1)'
}

const useStyle = makeStyles(() => createStyle({
    '@global': {
        '.shadow': {
            boxShadow: '0 2px 12px 0 rgba(0,0,0,.1)'
        }
    },
    routelink: {
        textDecoration: 'none',
        padding: '5px 10px',
        fontSize: 14
    },
    routerActive: {
        color: 'white',
        borderBottom: '2px solid #fff'
    }
}))

export default defineComponent((props, content) => {

    const styles = useStyle('app-style');
  
    const system: SystemProvide = inject<any>('system');
    const router = useRouter();
    const route = useRoute();
    const loadingLoginInfo = ref(false);

    //模拟获取登录信息
    system.verificationLogin().then(user => {
        sysRouter.lostPage();
        router.replace(route.path)
        console.log('注册用户信息成功')
    }).catch(() => {

    }).finally(() => {
        loadingLoginInfo.value = true
    })
    

    const loginLoading =  <div style={{height:'100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Spin size='large' tip='获取登录信息中'></Spin>
    </div>;
 
    return () => <ThemeProvide styles={style}>
        
        {/* { loadingLoginInfo.value == false ? loginLoading : isLogin.value == false ? <Login></Login> : <App 
            titleType='full'
            title={title}
            drawer={<Drawer />}
            tabs={tabs}
            color='#f6f6f6' >
                <RouterView />
        </App> } */}
        { loadingLoginInfo.value == false ? loginLoading :<RouterView /> }

        
    </ThemeProvide>


})