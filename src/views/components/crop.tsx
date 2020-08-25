import { defineComponent, ref, onMounted } from 'vue';
import Page from '@/components/admin/page';
import Cropper, { CropperMethods, CropperOpen } from '@/components/cropper';
import { Button } from 'ant-design-vue'
import Img1 from '@/assets/img1.png'
import Br from '@/components/br';



export default defineComponent(() => {

    const $cropper = ref<CropperMethods>();
    const cropperUrl = ref('');

    onMounted(() => {
        console.log($cropper)
    })

    return () => <Page title='图片裁剪'>
        <Cropper v-model={cropperUrl.value} cropper={$cropper} src={Img1} width={400} height={200} />
        <Br />
        <h3>裁剪的图片</h3>
        <Br />
        <img width={200} src={cropperUrl.value} alt=""/>
        <Button type='primary' onClick={() =>alert($cropper.value?.toDataURL())}>读取裁剪的url</Button>
        <Br />
        <Button type='primary' onClick={() =>CropperOpen(Img1)}>弹窗形式调用</Button>
    </Page>

})