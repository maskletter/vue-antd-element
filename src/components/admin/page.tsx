import { defineComponent, getCurrentInstance, KeepAlive, ref, ComponentInternalInstance, VNode, onUnmounted, onMounted, onActivated, inject } from 'vue';
import { BackTop } from 'ant-design-vue'
import { onBeforeRouteLeave } from 'vue-router'
const GeminiScrollbar = require('gemini-scrollbar')
import 'gemini-scrollbar/gemini-scrollbar.css'


interface PageInterface {
    color?: string
    title?: string|VNode
}

const Page = defineComponent((props: PageInterface, content) => {
    const scrollTop = ref(0);
    const $el: any = ref<Element | ComponentInternalInstance | null>(null);
    const $scroll = ref();
    let myScrollbar: any;

    // onBeforeRouteLeave((to, from, next) => {
    //     scrollTop.value = $el.value.scrollTop;
    //     next();
    // })

    onMounted(() => {
        
        myScrollbar = new GeminiScrollbar({
            element: $scroll.value
        }).create();
        $el.value = myScrollbar._viewElement;
    })

    onActivated(() => {
        // console.log(getCurrentInstance())
    })


    onActivated(() => {
        scrollTop.value && (myScrollbar._viewElement.scrollTop = scrollTop.value);
    })

    onUnmounted(() => {
        myScrollbar.destroy();
    })


    return () => <div style={{ position: 'relative', background: props.color, height: '100%', overflow: 'auto'}}>
        <div ref={$scroll}>
            <div style={{ padding: '10px 20px', boxSizing: 'border-box' }}>
                { props.title && <div style={{fontSize: '30px', marginBottom: '20px', letterSpacing: '2px'}}>{props.title}</div> }
                { content.slots.default && content.slots.default() }
            </div>
            
        </div>
        
        <BackTop target={() => $el.value} />
    </div>

})
Page.props = {
    color: {
        type: String,
        default: '#f5f5f5'
    },
    title: {
        type: [String, String]
    }
}

export default Page;