import { defineComponent, ref, onMounted, onDeactivated, onActivated, onUnmounted } from "vue";
import echarts from 'echarts'
import 'echarts/theme/macarons';
import '@/assets/echarts-liquidfill'

interface ChartProps {

    data?: any

    height?: number

}

const Chart = defineComponent((props: ChartProps) => {
    
    const $el = ref();
    const $div = ref();
    let $echart: echarts.ECharts;
    // const watchResize = () => {
    //     chart.changeSize($div.value.clientWidth);
    // }

    const watchResize = () => {
        $echart.resize()
    }

    const renderEchart = () => {
        if(!props.data) return
        $echart.setOption(props.data)
    }

    onMounted(() => {
        $echart = echarts.init($div.value, 'macarons', {
            // devicePixelRatio: 4
        })
        renderEchart();
        window.addEventListener('resize', watchResize)
    })

    onActivated(() => {
        // window.addEventListener('resize', watchResize)
    })

    onUnmounted(() => {
        // $echart
        window.removeEventListener('resize', watchResize)
    })

    return () => <div ref={e => $div.value = e} style={{height: props.height+'px'}}>
    </div>
})

Chart.props = {
    data: Object,
    height: {
        type: Number,
        default: 300  
    },
    render: Function
} as any

export default Chart;