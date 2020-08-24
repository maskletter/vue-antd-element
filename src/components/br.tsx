import { defineComponent } from "vue";


const Br = defineComponent((props: { height?: number, unit?: string }) => {
    return () => <div style={{height: `${props.height}${props.unit}`}}></div>
})

Br.props = {
    height: {
        type: Number,
        default: 10
    },
    unit: {
        type: String,
        default: 'px'
    }
}

export default Br;