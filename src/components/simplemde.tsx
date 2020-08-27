import SimpleMDE from 'simplemde';
import { defineComponent, ref, onMounted, watch, onDeactivated, onUnmounted } from 'vue';
import 'simplemde/dist/simplemde.min.css'

const Md = defineComponent((props: { value?: string }, content) => {

    let simplemde!: SimpleMDE

    const $md = ref(null);
    let _value: string = '';

    watch(() => (props as any).modelValue, (val: string) => {
        if(val == _value) return;
        simplemde.codemirror.setValue(val)
    })

    const readImg = (file: File) => {
        return new Promise(resolve => {
            var reader = new FileReader();　　　　//实例化
			reader.readAsDataURL(file);　　　　　　//加载
			reader.onload = function (e) {
				resolve({type: 'img', content: reader.result})
			}
        })
    }

    const readMdFile = (file: File) => {
		return new Promise(resolve => {
			var reader = new FileReader();
			reader.onload = () => {
				resolve({type:'md',content: reader.result})
			};
			reader.readAsText(file);
		})
    }
    
    //判断是否为.md文件
	const isMdFile = (name: string): boolean => {
		return /^.*[.](md)$/.test(name)
	}

	//判断是否为图片文件
	const isImgFile = (name: string): boolean => {
		return /^.*[.](png|gif|jpe?g)$/.test(name)
	}

    onMounted(() => {
        
        simplemde = new SimpleMDE({ 
            element: $md.value as any, 
            renderingConfig: {
				singleLineBreaks: false,
				codeSyntaxHighlighting: true,
			}
        })
        simplemde.codemirror.setValue((props as any).modelValue||props.value||'')
        simplemde.codemirror.on('drop', async (editor: any, e: any) => {
            if(e.dataTransfer.files.length == 0) return;
            const file: File = e.dataTransfer.files[0];
            let result: any;
            if(isImgFile(file.name)) {
                result = await readImg(file);
                simplemde.codemirror.setValue(simplemde.codemirror.getValue()+'![]('+result.content+')');
            } else if(isMdFile(file.name)) {
                result = await readMdFile(file);
                simplemde.codemirror.setValue(result.content)
            }
        })
        simplemde.codemirror.on('paste', async (editor: any, e: any) => {
            if(!e.clipboardData) return
            if(!e.clipboardData.items) return
            if(!e.clipboardData.items[0]) return
            const item = e.clipboardData.items[0]
            if(!item) return
            if(item.kind === 'file' && item.getAsFile().type.indexOf('image') !== -1) {
                const result: any = await readImg(item.getAsFile());
                simplemde.codemirror.setValue(simplemde.codemirror.getValue()+'![]('+result.content+')');
            }
        })
        simplemde.codemirror.on('change', () => {
            _value = simplemde.codemirror.getValue();
            content.emit('update:modelValue', _value)
		})
    })


    return () => <div class='md-container'>
        <textarea ref={$md}></textarea>
    </div>

})

Md.props = {
    modelValue: String,
    value: String
} as any

export default Md