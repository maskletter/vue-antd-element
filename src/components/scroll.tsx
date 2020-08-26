import { defineComponent, ref, onActivated, onUnmounted, onMounted, ComponentInternalInstance } from "vue";
import { onBeforeRouteLeave } from 'vue-router';
const GeminiScrollbar = require('gemini-scrollbar')
import 'gemini-scrollbar/gemini-scrollbar.css'

const Scroll = defineComponent((props, content) => {

    const $scroll = ref();
    const scrollTop = ref(0);
    const $el: any = ref<Element | ComponentInternalInstance | null>(null);
    let myScrollbar: any;


    // onBeforeRouteLeave((to, from, next) => {
    //     scrollTop.value = $el.value.scrollTop;
    //     next();
    // })

    onMounted(() => {
        
        myScrollbar = new GeminiScrollbar({
            element: $scroll.value
        }).create();
        $el.value = myScrollbar._viewElement;
    })


    onActivated(() => {
        scrollTop.value && (myScrollbar._viewElement.scrollTop = scrollTop.value);
    })


    onUnmounted(() => {
        myScrollbar.destroy();
    })


    return () => <div ref={$scroll} style={{height:'100%',overflow: 'auto'}}>
        { content.slots.default && content.slots.default() }
    </div>

})

export default Scroll;