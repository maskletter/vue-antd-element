import { defineComponent, createApp, ref } from 'vue';
import { Modal } from 'ant-design-vue'

const Cropper = defineComponent(() => {

    return () => <div>
        <h1>Cropper</h1>
        功能未开发
    </div>

})

const CropperModel = defineComponent((props: { onClose?: () => void }) => {

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
        <Cropper />
    </Modal>
})
CropperModel.props = {
    onClose: Function
} as any

const CropperOpen = (data: File|string) => {


    let $div = document.getElementById('cropper-dialog-div');
    if(!$div) {
        $div = document.createElement('div')
        $div.id = 'cropper-dialog-div'
        document.body.appendChild($div);
    }
    // $div.innerHTML = '<div id="cropper-dialog-wrapper"></div>'
    

    const app = createApp(<CropperModel onClose={() => {
        app.unmount($div as HTMLElement);
    }} />);
    app.mount($div);

}

export { CropperOpen }

export default Cropper;