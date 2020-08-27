import { defineComponent, ref, onMounted, watch, onDeactivated, onActivated, onUnmounted } from "vue"
// import CKEDITOR from 'CKEDITOR'


const Ckeditor = defineComponent((props: { height?: number, value?: string }, content) => {

    let ckeditor!: CKEDITOR.editor
    const $input = ref();
    let _value: string = '';

    
    onMounted(() => {
        init();
        watch(() => (props as any).modelValue, (val) => {
            if(val == _value) return;
            ckeditor.setData(val);
        })
    })

    const init = () => {
        ckeditor = CKEDITOR.replace($input.value as any, {
            height: props.height,
            // toolbar: [
            //     //加粗     斜体，     下划线      穿过线      下标字        上标字
            //     ['Bold','Italic','Underline','Strike','Subscript','Superscript'],
            //     // 数字列表          实体列表            减小缩进    增大缩进
            //     ['NumberedList','BulletedList','-','Outdent','Indent'],
            //     //左对 齐             居中对齐          右对齐          两端对齐
            //     ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
            //     //超链接  取消超链接 锚点
            //     ['Link','Unlink','Anchor'],
            //     //图片    flash    表格       水平线            表情       特殊字符        分页符
            //     ['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'],
            //     '/',
            //     // 样式       格式      字体    字体大小
            //     ['Styles','Format','Font','FontSize'],
            //     //文本颜色     背景颜色
            //     ['TextColor','BGColor'],
            //     //全屏           显示区块
            //     ['Maximize', 'ShowBlocks','-']
            //  ]
        });
        ckeditor.setData((props as any).modelValue || props.value || '')
        ckeditor.on('change', () => {
            _value = ckeditor.getData()
            content.emit('update:modelValue', _value)
        })
    }

    onActivated(() => {
        init();
    })

    onDeactivated(() => {
        /**
         * ckeditor在keep-alive下回导致异常，因此需要手动销毁
         */
        ckeditor?.destroy();
    })

    onUnmounted(() => {
        console.log('onUnmounted')
        ckeditor?.destroy();
    })

    return () => <div>
        <textarea ref={$input}></textarea>
    </div>

})

Ckeditor.props = {
    height: {
        type: Number,
        default: 400
    },
    modelValue: String,
    value: String
} as any

export default Ckeditor;