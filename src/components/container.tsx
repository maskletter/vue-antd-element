import { defineComponent, HtmlHTMLAttributes, createVNode, Events, HTMLAttributes } from "vue";

import * as RuntimeCore from '@vue/runtime-core'

type StringKeyOf<T> = Extract<keyof T, string>
type EventHandlers<E> = {
    [K in StringKeyOf<E>]?: E[K] extends Function ? E[K] : (payload: E[K]) => void
}
type ReservedProps = {
    key?: string | number
    ref?:
        | string
        | RuntimeCore.Ref
        | ((ref: Element | RuntimeCore.ComponentInternalInstance | null) => void)
}
type ElementAttrs<T> = T & EventHandlers<Events> & ReservedProps


/**
 * 组件主要用于第三方ui没有创建完好的ts声明文件，而导致一些参数异常
 */
const Container = defineComponent((props: ElementAttrs<HTMLAttributes&{[props: string]: any}&{tag?: any}>, content) => {

    return () => <>
        { props.tag ? createVNode(props.tag, content.attrs) : createVNode(content.slots.default as any, content.attrs) }
    </>

})



Container.props = {
    tag: [Object,Function]
}


export default Container;