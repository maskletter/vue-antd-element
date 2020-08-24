import { defineComponent, ref, ComponentInternalInstance, VNode } from 'vue';
import { BackTop } from 'ant-design-vue'

interface PageInterface {
    color?: string
    title?: string|VNode
}

const Page = defineComponent((props: PageInterface, content) => {
    
    const $el: any = ref<Element | ComponentInternalInstance | null>(null);

    return () => <div ref={e => $el.value = e} style={{padding: '10px 20px', background: props.color, boxSizing: 'border-box', height: '100%', overflow: 'auto'}}>
        { props.title && <div style={{fontSize: '30px', marginBottom: '20px', letterSpacing: '2px'}}>{props.title}</div> }
        { content.slots.default && content.slots.default() }
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