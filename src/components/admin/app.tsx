
import { defineComponent, VNode, KeepAlive, watch, reactive, provide, ref, inject } from 'vue'
import { createStyle, makeStyles } from '../theme'
import { RouteLocationNormalizedLoaded, useRouter } from 'vue-router'
import { useRoute }  from 'vue-router'
import { Tabs } from 'ant-design-vue'
import { CloseOutlined } from '@ant-design/icons-vue'
// const ElMenu = require('../element-ui/package/menu')

const useStyle = makeStyles(() => createStyle({
    '@global': {
        body: {
            margin: 0,
            padding: 0,
        },
        h1: { margin: 0 },
        h2: { margin: 0 },
        h3: { margin: 0 },
        h4: { margin: 0 },
        h5: { margin: 0 },
        '.app-tabs-active': {
            color: 'red'
        },
        '.ant-tabs-bar.ant-tabs-top-bar': {
            marginBottom: '0px'
        },
        '.ant-tabs .ant-tabs-small-bar .ant-tabs-tab': {
            paddingLeft: 8,
            paddingRight: 21
        }
    },
    root: {
        width: '100%',
        height: '100vh',
        display: 'flex'
    },
    body: {
       flex: 1,
       width: 1,
       display: 'flex',
       flexDirection: 'column'
    },
    tabActive: {
        color: 'red'
    }
}));
interface AppInterface {
    /**左侧抽屉 */
    drawer?: VNode;
    /**头部标题 */
    title?: VNode;
    /**尾部 */
    footer?: VNode;

    /**
     * 标题样式
     * full: 两端对齐
     * offset: 与左侧抽屉对齐
     */
    titleType?: 'full'|'offset';
    /**背景色 */
    color?: string
    tabs?: (data: RouteLocationNormalizedLoaded) => VNode
}

const App = defineComponent((props: AppInterface, content) => {
    const styles = useStyle('app'); 
    const router = useRouter();
    const route = useRoute();
    const activeUrl = ref(location.pathname+location.search);
    const tabs: { url: string, name: string, child: VNode, title: string }[] = reactive([]);
    
    /**渲染页面标题 */
    const renderTitle = (titleType: AppInterface['titleType']) => {
        return props.titleType == titleType && props.title && <div style={{position:'relative', zIndex: titleType == 'full'? 4: 2}}>
            { props.title }
        </div>
    }

    if(props.drawer) {
        provide('app-drawer-have', true);
    }
   
    provide('app-drawer-collapsed', ref(false));
    
    watch((() => [route.path] as any), (val: RouteLocationNormalizedLoaded) => {
        const url: string = route.path;
        activeUrl.value = url;
        if(tabs.find(v => v.url == url) == null) {
            tabs.push({
                url,
                title: route.meta.title,
                name: route.name as string,
                child: props.tabs ? props.tabs(route) : <text>{route.meta.title}</text>
            })
        } else {
            console.log('已存在')
        }
    }, {
        immediate: true
    })

    
    const system: SystemProvide = inject<any>('system');

    const tabsClick = (url: string) => {
        router.push(url);
    }

    const tabsCloseClick = (e: any, index: number) => {
        e.stopPropagation();
        if(tabs.length == 1 && tabs[index].url == '/') {
            return ;
        }
        const statusUrl = tabs[index].url;
        system.clearKeep(tabs[index].name);
        tabs.splice(index,1);
        
        if(activeUrl.value != statusUrl) return;
        if(tabs.length == 0) {
            router.push('/')
        } else if(tabs[index-1]){
            router.push(tabs[index-1].url)
        } else {
            router.push(tabs[index].url)
        }
        
    }

    return () => <div class={styles.root}>

        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            { renderTitle('full') }
            <div style={{display: 'flex', flex: '1', height: '1px'}}>
                {/* 抽屉布局 */}
                { props.drawer && <div style={{position: 'relative', zIndex: 3}}>
                    { props.drawer }
                </div> }
                <div class={styles.body}>
                    { renderTitle('offset') }
                    {/* 渲染标签页 */}
                    { props.tabs && <div style={{position:'relative', zIndex: 1}}>
                        <Tabs size='small' activeKey={activeUrl.value} tabBarGutter={0} onTabClick={index => tabsClick(index)}>
                            { tabs.map((v, index)=> <Tabs.TabPane closable={true} key={v.url} tab={[v.child, <CloseOutlined {...{onClick: (e: any) => tabsCloseClick(e, index) }} style={{position: 'absolute', right: '-8px', top: '13px', color: '#ccc', fontSize: '12px'}} />]}>
                            </Tabs.TabPane>) }
                        </Tabs>
                    </div> }
                    {/* 布局主内容 */}
                    <div style={{flex: 1, height: '1px', background: props.color}}>
                        <div style={{height: '100%'}}>
                            {content.slots.default && content.slots.default()}
                        </div>
                    </div>
                    { props.footer && props.footer }    
                </div>
            </div>
        </div>
        
        
    </div>

});

App.props = {
    drawer: Object,
    title: Object,
    footer: Object,
    color: String,
    titleType: {
        type: String,
        default: 'full'
    },
    tabs: Function
} as any
export default App;