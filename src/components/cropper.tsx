import { defineComponent, createApp, ref, onMounted, Ref } from 'vue';
import { Modal } from 'ant-design-vue'
import CropperJs from 'cropperjs'
import 'cropperjs/dist/cropper.css'


export interface CropperMethods {
    getCroppedCanvas: () => HTMLCanvasElement
    toDataURL: () => string
    getData: () => Cropper.Data
    getCropBoxData: () => Cropper.CropBoxData
    getContainerData: () => Cropper.ContainerData
    getImageData(): Cropper.ImageData
    setData(data: Cropper.SetDataOptions): void
    setDragMode(dragMode: Cropper.DragMode): void
    setCropBoxData(data: Cropper.SetCropBoxDataOptions): void
    setCanvasData(data: Cropper.SetCanvasDataOptions): void
    setAspectRatio(aspectRatio: number): void
    $cropper: CropperJs
}

interface CropperInterface {

    src?: string
    width?: number
    height?: number
    cropper?: Ref<CropperMethods | undefined>
    value?: string

}

const Cropper = defineComponent((props: CropperInterface, content) => {

    const $el = ref();
    let cropper: CropperJs;

    const methods = {
        getCroppedCanvas(): HTMLCanvasElement{
            return cropper.getCroppedCanvas()
        },
        toDataURL(): string{
            return this.getCroppedCanvas().toDataURL()
        },
        getData(): Cropper.Data{
            return cropper.getData()
        },
        getCropBoxData(): Cropper.CropBoxData{
            return cropper.getCropBoxData()
        },
        getContainerData(): Cropper.ContainerData{
            return cropper.getContainerData()
        },
        getImageData(): Cropper.ImageData{
            return cropper.getImageData()
        },
        setData(data: Cropper.SetDataOptions): void{
            cropper.setData(data)
        },
        setDragMode(dragMode: Cropper.DragMode): void{
            cropper.setDragMode(dragMode)
        },
        setCropBoxData(data: Cropper.SetCropBoxDataOptions): void{
            cropper.setCropBoxData(data)
        },
        setCanvasData(data: Cropper.SetCanvasDataOptions): void{
            cropper.setCanvasData(data)
        },
        setAspectRatio(aspectRatio: number): void{
            cropper.setAspectRatio(aspectRatio)
        }
    }

    const Throttling = (time: number = 300) => {
        let timeout: any = null;
        return (callback: Function) => {
            if(timeout != null) return;
            timeout = setTimeout(() => {
                callback()
                timeout = null;
            }, time)
        }
    }
    
    onMounted(() => {
        const crop = Throttling();
        cropper = new CropperJs($el.value, {
            aspectRatio:  4 / 4,
            viewMode: 1,
            crop: (e: any) => {
                crop(() => {
                    content.emit('update:modelValue', methods.toDataURL())
                    console.log(e)
                })
                
                
            }
        })
        if(props.cropper) {
            props.cropper.value = {
                ...methods,
                $cropper: cropper
            };
        }
    })

    return () => <div style={{width: props.width+'px', height: props.height+'px'}}>
        <img ref={$el} src={props.src} alt=""/>
    </div>

})

Cropper.props = {
    src: String,
    width: Number,
    height: Number,
    cropper: Object,
    modelValue: String,
    value: String
} as any

const CropperModel = defineComponent((props: { src: string, onClose?: () => void }) => {

    const visible = ref(true);
    const close = () => {
        visible.value = false;
        setTimeout(() => {
            props.onClose && props.onClose();
        }, 300)
    }

    return () => <Modal
        visible={visible.value}
        onOk={close}
        onCancel={close}>
        <Cropper src={props.src} />
    </Modal>
})
CropperModel.props = {
    onClose: Function,
    src: String
} as any

const CropperOpen = (src: string) => {


    let $div = document.getElementById('cropper-dialog-div');
    if(!$div) {
        $div = document.createElement('div')
        $div.id = 'cropper-dialog-div'
        document.body.appendChild($div);
    }
    // $div.innerHTML = '<div id="cropper-dialog-wrapper"></div>'
    

    const app = createApp(<CropperModel src={src} onClose={() => {
        app.unmount($div as HTMLElement);
    }} />);
    app.mount($div);

}

export { CropperOpen }

export default Cropper;