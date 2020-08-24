import { defineComponent, VNode, KeepAlive, createVNode } from 'vue'
import App from './components/admin/app'
import { ThemeProvide, makeStyles, createStyle } from './components/theme'
import Title from './components/admin/title'
import Drawer from './components/admin/drawer'
import Breadcrumb from './components/admin/breadcrumb'
import { RouteLocationNormalizedLoaded } from 'vue-router'
import RouterView from './components/routerview'
import { SettingFilled, UserAddOutlined, WarningOutlined } from '@ant-design/icons-vue'
import { Dropdown, Menu, Avatar, Popover, Empty, Modal } from 'ant-design-vue'



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
                    setTimeout(resolve, 1000);
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
 
    return () => <ThemeProvide styles={style}>
        <App 
            titleType='full'
            title={title}
            drawer={<Drawer />}
            tabs={tabs}
            color='#f6f6f6' >
                <RouterView keep={true} />
        </App>
    </ThemeProvide>


})