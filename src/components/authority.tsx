import { defineComponent, createVNode, Events, HTMLAttributes } from "vue";

import * as RuntimeCore from '@vue/runtime-core'
import router from '@/router'
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
        show: () => RuntimeCore.VNode,
        hide?: () => RuntimeCore.VNode,
    }>,
    content
) => {

    const route = useRoute();
    const itemRoute: RouteLocationMatched = route.matched[route.matched.length-1];
    /**
     * 按钮权限是通过路由的meta里创建一个page数组来实现控制
     */

    
    const authPage: string[] = itemRoute.meta.page||[];
    if(authPage.indexOf(props.auth) >= 0 || router.isAuthorizeAll) {
        return () => props.show();   
    } else {
        return () => props.hide ? props.hide() : null
    }
    

})

Authority.props = {
    auth: String,
    show: Function,
    hide: Function,
    tag: {
        type: [String, Object],
        default: 'div'
    }
} as any

export default Authority;