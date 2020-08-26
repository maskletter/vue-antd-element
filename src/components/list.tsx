import { defineComponent, VNode } from "vue";
import { List as _List } from 'ant-design-vue'


const List = defineComponent((props: { data: any[], render: (data: any, index: number) => void }, content) => {

    return () => <_List dataSource={props.data} v-slots={{
        renderItem: ({item, index}: any) => props.render(item, index)
    }}>

    </_List>

})

const ListItem = defineComponent((props: { content?: {
    title?: () => VNode|string,
    avatar?: () => VNode,
    description?: () => VNode|string
}, key?: any }, content) => {
    
    return () => <_List.Item key={props.key}>
        <_List.Item.Meta v-slots={props.content}>
            dawdwa
            { content.slots.default && content.slots.default() }
        </_List.Item.Meta>
    </_List.Item>
})

List.props = {
    data: Object,
    render: Function
} as any
ListItem.props = {
    data: Object,
    content: Object,
    key: {
        type: [String, Number]
    }
} as any

export { ListItem }
export default List;