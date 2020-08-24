import { ref, defineComponent } from 'vue';
import Page from '@/components/admin/page';
import Ckeditor from '@/components/ckeditor';
import { Card } from 'ant-design-vue';
import Br from '@/components/br';


export default defineComponent(() => {


    const value = ref('222');

    return () => <Page>
        <Card title='编辑内容'>
            {value.value}
        </Card>
        <Br />
        <Ckeditor v-model={value.value} />
    </Page>

})