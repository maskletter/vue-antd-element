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
    const isLogin = ref(false);
    const router = useRouter();
    // const route = useRoute();
    // console.log(route)
    const loadingLoginInfo = ref(false);
    const systemProvide: SystemProvide = {
        login: () => {
            sessionStorage.setItem('user', 'mock-login')
            router.replace('/');
            isLogin.value = true;
        },
        logout: () => {
            sessionStorage.removeItem('user')
            isLogin.value = false;
        }
    }
    provide('system', systemProvide)

    //模拟获取登录信息
    if(sessionStorage.getItem('user')) {
        //实际上这里需要接口请求获取登录信息
        setTimeout(() => {
            loadingLoginInfo.value = true;
            isLogin.value = true;
        },1000)
    } else {
        loadingLoginInfo.value = true;
    }
    

    const logout = () => {
        Modal.confirm({
            title: <div>
                <WarningOutlined style={{marginRight: '15px', color: '#faad14'}} />
                系统提示
            </div>,
            content: '确定退出系统吗',
            okText: '确定',
            cancelText: '取消',
            onOk:() => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve();
                        systemProvide.logout();
                    }, 1000);
                }).catch(() => console.log('Oops errors!'));
            }
        })
    }

    const title: VNode = <Title 
        title={<>
            <h3 style={{color: '#fff', display: 'inline-block', marginRight: '15px'}}>vue3</h3>
            <div style={{display: 'inline-block'}}><Breadcrumb /></div>
        </>} 
        right={<> 
            <Popover trigger='click' v-slots={{
                content: () => <Empty description='暂无消息' />
            }}>
                <Avatar style={{marginRight: '15px', cursor: 'pointer'}} icon={<UserAddOutlined />} />
            </Popover>
            
            <span onClick={logout}>退出</span>
             
            <Dropdown trigger={['click']} v-slots={{
                overlay: <Menu>
                    <Menu.Item>1st menu item</Menu.Item>
                    <Menu.Item>2st menu item</Menu.Item>
                    <Menu.Item>3st menu item</Menu.Item>
                </Menu>
            }}>
                <a style={{color: '#fff'}} onClick={e => e.preventDefault()}> <SettingFilled style={{marginLeft: '15px'}} /></a>

            </Dropdown>
            </>} 
    />;

    const tabs = (route: RouteLocationNormalizedLoaded) => {
        return <text style={{fontSize: '12px'}}>
            { route.meta && route.meta.icon && createVNode(route.meta.icon) }
            {route.meta.title}
        </text>
    }

    const loginLoading =  <div style={{height:'100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Spin size='large' tip='获取登录信息中'></Spin>
    </div>;
 
    return () => <ThemeProvide styles={style}>
        
        { loadingLoginInfo.value == false ? loginLoading : isLogin.value == false ? <Login></Login> : <App 
            titleType='full'
            title={title}
            drawer={<Drawer />}
            tabs={tabs}
            color='#f6f6f6' >
                <RouterView keep={true} />
        </App> }

        
    </ThemeProvide>


})