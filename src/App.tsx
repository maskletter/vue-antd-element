import { defineComponent, VNode, KeepAlive, createVNode, ref, provide } from 'vue'
import App from './components/admin/app'
import { ThemeProvide, makeStyles, createStyle } from './components/theme'
import Title from './components/admin/title'
import Drawer from './components/admin/drawer'
import Breadcrumb from './components/admin/breadcrumb'
import { RouteLocationNormalizedLoaded, useRouter, useRoute } from 'vue-router'
import RouterView from './components/routerview'
import { SettingFilled, UserAddOutlined, WarningOutlined } from '@ant-design/icons-vue'
import { Dropdown, Menu, Avatar, Popover, Empty, Modal, Spin } from 'ant-design-vue'
import Login from './views/login'
import { KeepAliveList } from './components/routerview'



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
  
    const router = useRouter();
   
    const loadingLoginInfo = ref(false);
    
    //模拟获取登录信息
    if(sessionStorage.getItem('user')) {
        //实际上这里需要接口请求获取登录信息
        setTimeout(() => {
            loadingLoginInfo.value = true;
        },1000)
    } else {
        router.push('/login')
        loadingLoginInfo.value = true;
    }
    


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