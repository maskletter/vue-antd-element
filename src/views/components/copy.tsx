import { defineComponent, ref } from 'vue';
import Page from '@/components/admin/page';
import Copy from '@/components/copy';
import { Card, Button, Input } from 'ant-design-vue';
import Br from '@/components/br';
import router from '@/router'


export default defineComponent(() => {

    const value = ref('123456');

    return () => <Page title='复制组件<Copy />'>

        <Card>
            <Input.Search 
                placeholder='输入值'
                enterButton={<Copy title={value.value} tag='text'>点击复制</Copy>}
                v-model={[value.value,'value']}
            />
            <Br />
            <Input placeholder='粘贴看看' />
        </Card>
        

    </Page>

})