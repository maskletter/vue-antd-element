import { defineComponent, createVNode, Events, HTMLAttributes } from "vue";

import * as RuntimeCore from '@vue/runtime-core'
import { Card } from 'ant-design-vue';
import { useRoute, RouteLocationMatched } from 'vue-router';
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


const Authority = defineComponent((
    props: ElementAttrs<HTMLAttributes&{[props: string]: any}&{
        /**权限 */
        auth: string,
        tag?: any
    }>,
    content
) => {

    const route = useRoute();
    const itemRoute: RouteLocationMatched = route.matched[route.matched.length-1];
    /**
     * 按钮权限是通过路由的meta里创建一个button数组来实现控制
     */
    const authButton: string[] = itemRoute.meta.button||[];
    if(authButton.indexOf(props.auth) >= 0) {
        return () => createVNode(props.tag as any, {
            ...content.attrs,
            ...content.slots
        },[content.slots.default && content.slots.default()])    
    }
    return ;
    

})

Authority.props = {
    auth: String,
    tag: {
        type: [String, Object],
        default: 'div'
    }
}

export default Authority;