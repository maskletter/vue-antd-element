import { defineComponent, VNode, watch, reactive, ref } from "vue";
import { Table as ATable, Pagination } from 'ant-design-vue'

interface Title {
    (): VNode
}
interface Data {
    (search: any): void
}
interface TableInterface {
    title?: Title|string
    content?: () => VNode
    columns: any[]
    data: Data|any[]
    rowKey?: string
    bordered?: boolean
    filter?: any
}

const Table = defineComponent((props: TableInterface) => {
    let _data = ref<any[]>([]);
    let search = reactive({
        page: 16,
        current: 3,
        total: 0
    })

    const getData = async (index: number = 1) => {
        search.current = index
        const {data,total}: {data: any[], total: number} = await (props.data as any)(search);
        formatData(data);
        search.total = total;
    }

    const formatData = (data: any[]) => {
        const _d: any[] = [];
        data.forEach((v, index) => {
            const item: any = {...v};
            props.columns.forEach(j => {
                j.render &&  (item[j.dataIndex] = j.render(v, index, typeof(props.data) == 'function' ? _data : undefined));
            })
            _d.push(item)
        })
        _data.value = _d;
    }

    if(typeof(props.data) == 'object') {
        watch(props.data, (val: any[]) => {
            formatData(val);
        }, { immediate: true })
    } else {
        getData();
    }
    

    return () => <>
        <ATable
            bordered={props.bordered}
            columns={props.columns}
            dataSource={_data.value}
            rowKey={props.rowKey}
            pagination={false}
            v-slots={{
                name: () => <div>222222</div>,
            }}>

        </ATable>
        { typeof(props.data) == 'function' && <div style={{textAlign: 'center', margin: '15px 0'}}>
            <Pagination onChange={getData} total={search.total} pageSize={search.page} />
        </div> }
    </>

})

Table.props = {
    title: Function,
    content: Function,
    data: [Object, Function],
    columns: Object,
    rowKey: String,
    bordered: {
        type: Boolean,
        default: false
    }
} as any

export default Table;