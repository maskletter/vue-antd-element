
import { defineComponent, VNode, watch, reactive, provide, ref } from 'vue'
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
    const tabs: { url: string, child: VNode, title: string, route: RouteLocationNormalizedLoaded }[] = reactive([]);
    
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
    
    watch(route, (val: RouteLocationNormalizedLoaded) => {
        const url: string = location.pathname+location.search;
        activeUrl.value = url;
        if(tabs.find(v => v.url == url) == null) {
            tabs.push({
                url,
                title: val.meta.title,
                route: val,
                child: props.tabs ? props.tabs(val) : <text>{val.meta.title}</text>
            })
        } else {
            console.log('已存在')
        }
    }, {
        immediate: true
    })

    

    const tabsClick = (url: string) => {
        router.push(url);
    }

    return () => <div class={styles.root}>

        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            { renderTitle('full') }
            <div style={{display: 'flex', flex: '1'}}>
                {/* 抽屉布局 */}
                { props.drawer && <div style={{position: 'relative', zIndex: 3}}>
                    { props.drawer }
                </div> }
                <div class={styles.body}>
                    { renderTitle('offset') }
                    {/* 渲染标签页 */}
                    { props.tabs && <div style={{position:'relative', zIndex: 1}}>
                        <Tabs size='small' activeKey={activeUrl.value} tabBarGutter={0} onTabClick={index => tabsClick(index)}>
                            { tabs.map((v)=> <Tabs.TabPane closable={true} key={v.url} tab={[v.child, <CloseOutlined style={{position: 'absolute', right: '-8px', top: '13px', color: '#ccc', fontSize: '12px'}} />]}>
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