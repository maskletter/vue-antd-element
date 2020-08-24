import { defineComponent, ref } from 'vue';
import Page from '@/components/admin/page';
import Dragula from '@/components/dragula';
import { Row, Card, Col } from 'ant-design-vue';
import Br from '@/components/br';


export default defineComponent(() => {

    const school: string[] = ['北京大学','香港大学','深圳大学','厦门大学'];
    const school2 = ref<string[]>(school);
    const msg1 = ref('未进行任何操作');
    
    const dragEvent = (el: Element, target: Element, source: Element, sibling: Element) => {
        msg1.value = `${el.innerHTML}移到了${((el.parentElement as Element).previousElementSibling as any).innerHTML}`
    }

    const removeEvent = (el: Element, target: Element, source: Element) => {
        msg1.value = `位于${(target.previousElementSibling as any).innerHTML}的${el.innerHTML}被删除了`
    }

    const drag2Event = (el: Element, target: Element, source: Element, sibling: Element) => {
        school2.value = Array.from(target.children).map(v => school[v.getAttribute('data-index') as any])
    }

    return () => <Page>
        { msg1.value }
        <Dragula config={{ removeOnSpill: true }} onDrop={dragEvent} onRemove={removeEvent}>
          <Row gutter={10}>
            <Col span={8}>
                <Card>
                  <h4>左列</h4>
                  <ul class="test-ul" dragula-slide>
                    { school.map((v, index) => <li key={index}>
                      第一个{ v }
                    </li>) }
                  </ul>
                </Card>
            </Col>
            <Col span={8}>
                <Card>
                  <h4>中列</h4>
                  <ul class="test-ul" dragula-slide>
                    { school.map((v, index) => <li key={index}>
                      第二个{ v }
                    </li>) }
                  </ul>
                </Card>
            </Col>
            <Col span={8}>
                <Card>
                  <h4>右列</h4>
                  <ul class="test-ul" dragula-slide>
                    { school.map((v, index) => <li key={index}>
                      第三个{ v }
                    </li>) }
                  </ul>
                </Card>
            </Col>
          </Row>
        </Dragula>
        <Br />
        { JSON.stringify(school2.value) }
        <Dragula onDrop={drag2Event}>
            <ul dragula-slide style={{padding: '0px'}}>
                { school.map((v, index) => <li style={{margin: '0px 0px 5px', listStyle: 'none'}} data-index={index} key={index}>
                    <Card bodyStyle={{padding: '15px'}} hoverable>{ v }</Card>
                </li>) }
            </ul>
        </Dragula>
    </Page>

})