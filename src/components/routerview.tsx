import { defineComponent, KeepAlive, ref, inject, createVNode, watch, defineAsyncComponent, onMounted } from 'vue';
import { RouterView as VueRouter, useRoute } from 'vue-router';

interface RouterProps {
    keep?: boolean
}

export const KeepAliveList = ref([]);

const RouterView = defineComponent((props: RouterProps) => {

    const system: SystemProvide = inject<any>('system');
    const $router = useRoute();
   
    onMounted(() => {
        watch(() => [$router.name], (val: any) => {
            $router.meta.keepAlive && system.setKeep(val[0])
        }, { immediate: true, deep: true })
    })
    
    const slots = {
        default: ({Component, route}: any) => {
            
            if(Component && Component.type && !Component.type.name) {
                Component.type.name = route.name
            }
            return <KeepAlive include={system.keepalive.value} max={10}>
                { Component }
            </KeepAlive>;
        },
      }

    return () => <VueRouter v-slots={slots} />

})
RouterView.props = {
    keep: Boolean
}
export default RouterView