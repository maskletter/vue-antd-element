import { defineComponent, ref } from 'vue';
import Page from '@/components/admin/page';
import { Input, Form, Button, message, Checkbox } from 'ant-design-vue'
import router from '@/router'
import { TeamOutlined } from '@ant-design/icons-vue'


export default defineComponent(() => {

    const location = ref('/test-router');
    const name = ref('测试添加路由');
    const keep = ref(true)
    const addName = ref('');

    const addRoute = () => {
        if(location.value.trim() == '') return message.error({content:<text>请输入路由地址</text>})
        if(name.value.trim() == '') return message.error({content:<text>请输入路由名称</text>})
        if(addName.value) {
            router.removeRoute(addName.value)
        }
        addName.value = 'test-router-mock-'+Math.random();
        router.addRoute({
            path: location.value,
            meta: { title: name.value, icon: TeamOutlined, keepAlive: keep.value },
            name: addName.value,
            component: () => <Page title='测试的路由'>
                <Input placeholder='随意输入' />
            </Page>
        })
    }

    return () => <Page title='动态添加路由权限'>
        <Form layout='horizontal' label-col={{span:5}} wrapper-col={{span:12}}>
            <Form.Item label='路由地址'>
                {/* vue3里默认改为了modelValue */}
                <Input v-model={[location.value,'value']} />
            </Form.Item>
            <Form.Item label='路由名称'>
                <Input v-model={[name.value,'value']} />
            </Form.Item>
            <Form.Item label='设置缓存'>
                <Checkbox v-model={[keep.value,'checked']}>开启keep-alive</Checkbox>
            </Form.Item>
            <Form.Item wrapper-col={{span:12,offset:5}}>
                <Button onClick={addRoute}>添加</Button>
                <div>注:测试会删除此页面已添加的</div>
            </Form.Item>
        </Form>

    </Page>

})