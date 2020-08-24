import { defineComponent, ref, ComponentInternalInstance, VNode, onMounted } from 'vue';
import { BackTop } from 'ant-design-vue'
const GeminiScrollbar = require('gemini-scrollbar')


interface PageInterface {
    color?: string
    title?: string|VNode
}

const Page = defineComponent((props: PageInterface, content) => {
    
    const $el: any = ref<Element | ComponentInternalInstance | null>(null);
    const $scroll = ref();

    onMounted(() => {
        var myScrollbar = new GeminiScrollbar({
            element: $scroll.value
        }).create();
    })

    return () => <div ref={$el} style={{padding: '10px 20px', position: 'relative', background: props.color, boxSizing: 'border-box', height: '100%', overflow: 'auto'}}>
        <div ref={$scroll}>
            { props.title && <div style={{fontSize: '30px', marginBottom: '20px', letterSpacing: '2px'}}>{props.title}</div> }
            { content.slots.default && content.slots.default() }
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