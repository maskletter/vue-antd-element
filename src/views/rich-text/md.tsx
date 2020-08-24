import { ref, defineComponent } from 'vue';
import Page from '@/components/admin/page';
import Md from '@/components/simplemde';
import { Card } from 'ant-design-vue';
import Br from '@/components/br';


export default defineComponent(() => {


    const value = ref('222');

    return () => <Page>
        <Card title='编辑内容'>
            {value.value}
        </Card>
        <Br />
        <Md v-model={value.value} />
    </Page>

})