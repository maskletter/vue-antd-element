import { defineComponent } from 'vue';
import Page from '@/components/admin/page';
import { PageHeader, Card, Avatar } from 'ant-design-vue'
import Container from '@/components/container';
import Br from '@/components/br';
import { HomeFilled } from "@ant-design/icons-vue";

const TestPageHeader = (props:{ title: string, 'sub-title'?: string, onBack?: void }) => {
    return <Container tag={PageHeader} title={props.title} sub-title={props['sub-title']} onBack={props.onBack} />;
}
const Test2PageHeader = (props: { [index in keyof PageHeader]?: PageHeader[index] }&{onBack?: any}) => <Container tag={PageHeader} {...props} />
// console.log(TestPageHeader)
export default defineComponent(() => {

    return () => <Page title='内置的container组件使用'>

        在编写tsx形式时候，往往会遇到很多不能很好的兼容tsx的组件，此时可以使用Container组件，来使用那些不能很好兼容的组件，代码如下
        <Br />
        <Card bodyStyle={{padding: 0}} title='第一种声明方式'>
            <TestPageHeader title='Title' sub-title='2222222222' />
        </Card>
        <Br />
        <Card bodyStyle={{padding: 0}} title='第二种声明方式'>
            <Container title='Title' onBack={() => null} sub-title="This is a subtitle" tag={PageHeader} />
        </Card>
        <Br />
        <Card bodyStyle={{padding: 0}} title='第三种声明方式'>
            <Test2PageHeader backIcon={<HomeFilled />} onBack={() => null} title='Title' sub-title='2222222222' />
        </Card>
        <Br />
        <Card bodyStyle={{padding: '20px'}} title='给不支持事件的组件添加操作事件'>
            点击图标
            <Container tag={HomeFilled} onClick={() => alert('点击了图标')} style={{fontSize: '40px', color: 'blue'}} />
        </Card>


    </Page>

})