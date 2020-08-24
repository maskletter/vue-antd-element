
import 'dragula/dist/dragula.css'
import dragula from 'dragula'
import { defineComponent, ref, ComponentInternalInstance, onMounted } from 'vue'

export interface DragulaConfig{
    isContainer?(el: Element|undefined):  boolean
    moves?(el: Element|undefined, source :Element|undefined, handle: Element|undefined, sibling: Element|undefined):  boolean
    accepts?(el: Element|undefined, target :Element|undefined, source: Element|undefined, sibling: Element|undefined):  boolean
    invalid?(el: Element|undefined, handle :Element|undefined):  boolean
    /**确定放置元素的位置时考虑Y轴 */
    direction?: 'vertical'|'horizontal'
    /**默认情况下移动元素，不复制 */
    copy?:boolean 
    /**复制源容器中的元素可以重新排序 */
    copySortSource?:boolean 
    /**如果元素为true，则溢出会将元素放回拖动位置 */
    revertOnSpill?:boolean 
    /**如果为true，则溢出将`.remove`元素 */
    removeOnSpill?:boolean 
    /**设置要添加镜像元素的元素 */
    mirrorContainer?: Element
    /**允许用户选择输入文本，请参见下面的详细信息 */
    ignoreInputTextSelection?:boolean
}

interface DragulaProps {
    config?: DragulaConfig
    onDrag?: (el: Element, source: Element) => void
    onDragend?: (el: Element) => void
    onDrop?: (el: Element, target: Element, source: Element, sibling: Element) => void
    onCancel?: (el: Element, target: Element, source: Element) => void
    onRemove?: (el: Element, target: Element, source: Element) => void
    onShadow?: (el: Element, target: Element, source: Element) => void
    onOver?: (el: Element, target: Element, source: Element) => void
    onOut?: (el: Element, target: Element, source: Element) => void
    onCloned?: (clone: Element, original: Element, type: "mirror" | "copy") => void
}

const Dragula = defineComponent((props: DragulaProps, content) => {

    const $el: { value: Element } = ref<any>();
    let $drake!: dragula.Drake;

    onMounted(() => {
        let elements: Element[] = Array.from($el.value.querySelectorAll('[dragula-slide]'));
        $drake = dragula(elements, props.config);
        props.onDrag &&  $drake.on('drag', props.onDrag)
        props.onDragend &&  $drake.on('dragend', props.onDragend)
        props.onDrop && $drake.on('drop', props.onDrop);
        props.onCancel && $drake.on('cancel', props.onCancel)
        props.onRemove && $drake.on('remove', props.onRemove)
        props.onShadow && $drake.on('shadow', props.onShadow)
        props.onOver && $drake.on('over', props.onOver)
        props.onOut && $drake.on('out', props.onOut)
        props.onCloned && $drake.on('cloned', props.onCloned)
    })

    return () => <div class='dragula-container' ref={(e: any) => $el.value = e}>
        { content.slots.default && content.slots.default() }
    </div>

})

Dragula.props = {
    config: Object,
    onDrag: Function,
    onDragend: Function,
    onDrop: Function,
    onCancel: Function,
    onRemove: Function,
    onShadow: Function,
    onOver: Function,
    onOut: Function,
    onCloned: Function,
} as any

export default Dragula;