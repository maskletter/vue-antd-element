import { defineComponent, VNode, onMounted, createVNode, inject, ref, defineAsyncComponent } from 'vue';
import { makeStyles, createStyle } from '../theme';
import { Menu } from 'ant-design-vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { useRouter, RouteRecordRaw, useRoute } from 'vue-router';
// import { Modal } from 'ant-design-vue'
import Modal from '@/components/modal'
import router from '../../router'
import Scroll from '../scroll';

const useStyle = makeStyles((theme: any) => createStyle({
    root: {
        height: '100%',
        boxShadow: theme.boxShadow,
        transition: '.2s linear width'
    }
}))

const Drawer = defineComponent(() => {
    const styles = useStyle("drawer-style");
    const $route = useRoute();
    const $router = useRouter();
    
    const collapsed: any = inject('app-drawer-collapsed');

    const routerLink = async (url: string, meta: any, route: any) => {
        
        if(meta.dialog) {
            Modal(
                <h3 style={{fontWeight: 600}}>{route.meta.title}</h3>,
                createVNode(defineAsyncComponent(route.component))).then(() => {
                
            })
            
        } else {
            $router.push(url)
        }
    }
    
    const EachMenu = (router: RouteRecordRaw[], path: string = '') => {
        const dom: VNode[] = [];
        router.forEach(v => {
            if((v as any).hidden) return;
            if(v.redirect) return;
            if(!v.children) {
                dom.push(<Menu.Item key={path+v.path} onClick={() => routerLink(path+v.path, v.meta, v)}>
                    { v.meta && v.meta.icon && createVNode(v.meta.icon) }
                    <span>{ v.meta ? v.meta.title : v.name }</span>
                </Menu.Item>)
            } else {
                dom.push(<Menu.SubMenu key={path+v.path} v-slots={{
                    title: () => <>{ v.meta && v.meta.icon && createVNode(v.meta.icon) }<span>{ v.meta ? v.meta.title : v.name }</span></>
                }}>
                    { EachMenu(v.children, v.path+'/') }
                </Menu.SubMenu>)
            }
        })
        return dom;
    }
  

    return () => <div class={styles.root} style={{width: collapsed.value == false ? '240px' : '80px'}}>
        <Scroll>
        <Menu inlineCollapsed={collapsed.value} mode="inline" defaultOpenKeys={$route.matched.map(v => v.path)} selectedKeys={[$route.path]} >
                { EachMenu(router.registeredRouter) }
                {/* <Menu.Item key="mail">
                    <UserOutlined />
                    <span>Navigation One</span>
                </Menu.Item>
                <Menu.SubMenu v-slots={{
                    title: () => <>标题一</>
                }}>
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">
                            Option 1
                        </Menu.Item>
                    </Menu.ItemGroup>
                </Menu.SubMenu>
                <Menu.SubMenu v-slots={{
                    title: () => <>标题二</>
                }}>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.SubMenu> */}
            </Menu>
        </Scroll>
        
    </div>
})

export default Drawer;