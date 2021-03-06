import { defineComponent, VNode, createVNode, inject } from 'vue';
import { WarningOutlined, UserAddOutlined, SettingFilled } from '@ant-design/icons-vue';
import { Modal, Popover, Badge , Empty, Avatar, Dropdown, Menu, Spin, Input } from 'ant-design-vue';
import Breadcrumb from '@/components/admin/breadcrumb'
import Title from '@/components/admin/title';
import { RouteLocationNormalizedLoaded } from 'vue-router';
import App from '@/components/admin/app';
import Drawer from '@/components/admin/drawer';
import RouterView from '@/components/routerview';
import Headimg from '@/assets/headimg.jpg'


export default defineComponent(() => {

    
    const system: SystemProvide = inject<any>('system');

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
                        system.logout();
                    }, 1000);
                }).catch(() => console.log('Oops errors!'));
            }
        })
    }

    const title: VNode = <Title 
        title={<>
            <h3 style={{color: '#fff', display: 'inline-block', marginRight: '15px'}}>vue3</h3>
            <div style={{display: 'inline-block', marginRight: '20px'}}><Breadcrumb /></div>
        </>} 
        right={<> 
            <Popover trigger='click' v-slots={{
                content: () => <Empty description='暂无搜索内容' />
            }}>
                <Input placeholder='搜索' style={{width: '200px', marginRight: '20px'}} />
            </Popover>

            <Popover trigger='click' v-slots={{
                content: () => <>
                    
                    <div style={{textAlign:'center'}}>
                        <Avatar src={Headimg} size={64} />
                        <div style={{margin: '14px',width:'140px'}}>maskletter</div>
                    </div>
                </>
            }}>
                <Badge count={2} style={{marginRight: '15px',}}>
                    <Avatar size={35} style={{cursor: 'pointer'}} src={Headimg} />
                    
                </Badge>
            </Popover>
            
            <span onClick={logout}>退出</span>
             
            <Dropdown trigger={['click']} v-slots={{
                overlay: () => <Menu>
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

    return () => <App 
        titleType='full'
        title={title}
        drawer={<Drawer />}
        tabs={tabs}
        color='#f6f6f6' >
            <RouterView />
    </App>

})