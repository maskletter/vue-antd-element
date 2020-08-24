import { Modal } from "ant-design-vue";
import { createApp, defineComponent, ref, VNode } from 'vue';


const SystemModel = defineComponent((props: { onClose?: () => void, content: VNode, title?: string|VNode }) => {

    const visible = ref(true);
    const close = () => {
        visible.value = false;
        setTimeout(() => {
            props.onClose && props.onClose();
        }, 300)
    }

    return () => <Modal
        title={props.title}
        visible={visible.value}
        onOk={close}
        onCancel={close}>
        { props.content }
    </Modal>
})
SystemModel.props = {
    onClose: Function,
    content: Object,
    title: {
        type: [ String, Object ]
    }
} as any

export default (title: string|VNode, content: VNode|any) => {
    return new Promise(resolve => {
        let $div = document.getElementById('system-modal-dialog-div');
        if(!$div) {
            $div = document.createElement('div')
            $div.id = 'system-modal-dialog-div'
            document.body.appendChild($div);
        }
        // $div.innerHTML = '<div id="cropper-dialog-wrapper"></div>'
        

        const app = createApp(<SystemModel title={title} content={content} onClose={() => {
            app.unmount($div as HTMLElement);
            resolve();
        }} />);
        app.mount($div);
    })
    
}