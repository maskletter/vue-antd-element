import { defineComponent, KeepAlive } from 'vue';
import { RouterView as VueRouter } from 'vue-router';

interface RouterProps {
    keep?: boolean
}

const RouterView = defineComponent((props: RouterProps) => {

    const slots = {
        default: (component: any) => {
            return props.keep ? <KeepAlive >
                { component.Component }
            </KeepAlive> : component.Component;
        },
      }

    return () => <VueRouter v-slots={slots} />

})
RouterView.props = {
    keep: Boolean
}
export default RouterView