import Clipboard from 'clipboard'
import { defineComponent, createVNode, ref, onMounted, CSSProperties, HTMLAttributes } from 'vue'
import { message } from 'ant-design-vue'

interface CopyInterface {
    /**复制的内容 */
    title: string
    /**
     * html标签
     * 
     * 默认span
     */
    tag?: string
    onSuccess?: (e: Clipboard.Event) => void
    onError?: (e: Clipboard.Event)=>void
}

const Copy = defineComponent((props: CopyInterface & HTMLAttributes, content) => {

    const $el = ref();
    onMounted(() => {
        const clipboard = new Clipboard($el.value)
        clipboard.on('success', e => {
            message.success({content:<text>复制成功</text>})
            props.onSuccess && props.onSuccess(e)
        })
        clipboard.on('error', e => [
            props.onError && props.onError(e)
        ])
    })
    return () => <>
        { createVNode(props.tag as any, {
            ref: $el,
            'data-clipboard-text': props.title,
            ...content.attrs
        }, [content.slots.default && content.slots.default()]) }
    </>

})

Copy.props = {
    title: String,
    tag: {
        type: String,
        default: 'span'
    },
    onSuccess: Function,
    onError: Function
} as any

export default Copy;