
import { defineComponent, reactive, Ref } from 'vue'
import Table from '@/components/table'
import Page from '@/components/admin/page'
import { AccountBookFilled } from "@ant-design/icons-vue";
import { Button, Card, Popconfirm } from 'ant-design-vue';
import Container from '@/components/container';
import Br from '@/components/br';

export default defineComponent(() => {

    const data = reactive([
        { id: 33, name: '张三' },
        { id: 32, name: '李四' },
        { id: 31, name: '大气' }
    ])
    const columns = [
        {
            dataIndex: 'id',
            key: 'id',
            title: 'id'
        },
        {
            dataIndex: 'name',
            key: 'name',
            title: <text><AccountBookFilled />标题</text>,
            render: (data: any, index: number) => <div>{index}--{data.name}</div>
        },
        {
            dataIndex: 'operating',
            key: 'operating',
            title: <text>操作</text>,
            render: (_data: any, index: number, list: Ref<any[]> ) => <div>
                <Button size='small' type='primary' style={{marginRight: '15px'}}>没设置操作</Button>
                <Popconfirm
                    title='确定删除吗'
                    okText='确定'
                    cancelText='取消'
                    onConfirm={() => {
                        if(list && list.value) {
                            list.value.splice(index, 1)
                        } else {
                            data.splice(index, 1)
                        }
                    }}
                    >
                    <Button size='small' type='danger' >删除</Button>
                </Popconfirm>
                
            </div>
        }
    ]

    const data2 = (search: any) => {
        return {
            data: [
                { id: 33, name: '王五' },
                { id: 33, name: '赵六' },
                { id: 34, name: '赵awdawd六' }
            ],
            total: 100
        };
    }

    return () => <Page title='还不完整的table组件221'>
      
        <Card title='传值渲染'>
            <Table data={data}
                bordered
                columns={columns}
                rowKey='id'>

            </Table>
        </Card>
        <Br />
        <Card title='通过render渲染'>
            <Table data={data2}
                bordered
                columns={columns}
                rowKey='id'>

            </Table>
        </Card>
    </Page>

})