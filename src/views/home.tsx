import { defineComponent } from 'vue';
import { Card, Row, Col, Input, Button } from 'ant-design-vue'
import Page from '@/components/admin/page';
import { PhoneFilled, StarFilled, PictureFilled, MessageFilled, ClusterOutlined } from '@ant-design/icons-vue'
import { makeStyles, createStyle } from '@/components/theme';
import Br from '@/components/br';
import Chart from '@/components/chart';
import Img1 from '@/assets/img1.png';
import Img2 from '@/assets/img2.jpg';
import List, { ListItem } from '@/components/list';
import Copy from '@/components/copy';
import Authority from '@/components/authority';

const useStyle = makeStyles(() => createStyle({
    number: {
        textAlign: 'right',
        float: 'right',
        '&>div': {
            fontSize: 35,
            lineHeight: 1,
            marginBottom: 5
        }
    }
}))

export default defineComponent(() => {

    const styles = useStyle('home-style');

    const echartData = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['利润', '支出', '收入']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'value'
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    axisTick : {show: false},
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            series : [
                {
                    name:'利润',
                    type:'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data:[200, 170, 240, 244, 200, 220, 210]
                },
                {
                    name:'收入',
                    type:'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    data:[320, 302, 341, 374, 390, 450, 420]
                },
                {
                    name:'支出',
                    type:'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'left'
                        }
                    },
                    data:[-120, -132, -101, -134, -190, -230, -210]
                }
            ]
        }
    
    const echartData2 = {
        title: {
            top: '45%',
            left: 'center',
            text: "今日完成进度",
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 14
            },
            subtextStyle: {
                color: '#fff',
                fontSize: 12
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(res: any) {
                if (res.componentSubType == 'liquidFill') {
                    return res.seriesName + ': ' + (res.value * 10000 / 100).toFixed(2) + '%';
                } else {
                    return '<span class="ii" style="background:' + res.color + ' "></span>' + res.name + ':<br/> ' + res.data.value;
                }
            }
        },
        series: [{
                type: 'liquidFill',
                itemStyle: {
                    normal: {
                        opacity: 0.4,
                        shadowBlur: 0,
                        shadowColor: 'blue'
                    }
                },
                name: "今日完成进度",
                data: [{
                    value: 0.6,
                    itemStyle: {
                        normal: {
                            color: '#53d5ff',
                            opacity: 0.6
                        }
                    }
                }],
                //  background: '#fff',
                color: ['#53d5ff'],
                center: ['50%', '50%'],
                /*  backgroundStyle: {
                    color: '#fff'
                },*/
                label: {
                    normal: {
                        formatter: '',
                        textStyle: {
                            fontSize: 12
                        }
                    }
                },
                outline: {
                    itemStyle: {
                        borderColor: '#86c5ff',
                        borderWidth: 0
                    },
                    borderDistance: 0
                }
            },
            {
                type: 'pie',
                radius: ['42%', '50%'],
                        color: ['#c487ee', '#deb140','#49dff0', '#034079', '#6f81da', '#00ffb4'],
                hoverAnimation: false, ////设置饼图默认的展开样式
                label: {
                    show: true,
                    
                    normal: {
                            formatter: '{b}\n{d}%',
                        show: true,
                        position: ''
                    },
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
    
                itemStyle: { // 此配置
                    normal: {
                        borderWidth: 2,
                        borderColor: '#fff',
                    },
                    emphasis: {
                        borderWidth: 0,
                        shadowBlur: 2,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                data: [{
                    value: 0.2,
                    name: '装配完成率',
                },
                {
                    value: 0.3,
                    name: '班检完成率',
                },
                {
                    value: 0.4,
                    name: '初检完成率',
                },
                {
                    value: 0.3,
                    name: '复检完成率',
                },
                {
                    value: 0.1,
                    name: '出厂检完成率',
                },
            ]
            }
        ]
    }

    const data = [
        {
          title: 'Ant Design Title 1',
        },
        {
          title: 'Ant Design Title 2',
        },
        {
          title: 'Ant Design Title 3',
        },
        {
          title: 'Ant Design Title 4',
        },
    ];
    

    return () => <Page>
        
        <Row gutter={20}>
            <Col span={6}>
                <Card bodyStyle={{padding: '16px'}} hoverable>
                    <PhoneFilled style={{fontSize: '35px', color:'#fa2a00'}} />
                    <div class={styles.number}>
                        <div>26</div>
                        <span>最新统计</span>
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card bodyStyle={{padding: '16px'}} hoverable>
                    <StarFilled style={{fontSize: '35px', color:'#ffb400'}} />
                    <div class={styles.number}>
                        <div>26</div>
                        <span>最新统计</span>
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card bodyStyle={{padding: '16px'}} hoverable>
                    <PictureFilled style={{fontSize: '35px', color:'#1abc9c'}} />
                    <div class={styles.number}>
                        <div>26</div>
                        <span>最新统计</span>
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card bodyStyle={{padding: '16px'}} hoverable>
                    <MessageFilled style={{fontSize: '35px', color: '#22a7f0'}} />
                    <div class={styles.number}>
                        <div>26</div>
                        <span>最新统计</span>
                    </div>
                </Card>
            </Col>
        </Row>
        <Br />
        <Row gutter={20}>
            <Col span={17}>
                <Card hoverable>
                    <Chart height={400} data={echartData}></Chart>
                </Card>
                <Br />
                <Row gutter={20}>
                    <Col span={12}>
                        <Card hoverable v-slots={{
                            cover: () => <img src={Img1} />
                        }}>
                            <Card.Meta title='又是失业的一天' v-slots={{
                                description: () => <text>一起送外卖吧</text>
                            }} />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Authority auth='card' hoverable tag={Card} v-slots={{
                            cover: () => <img src={Img2} />
                        }}>
                            <Card.Meta title='_〆(´Д｀ )' v-slots={{
                                description: () => <div>
                                    <text>通过Authority标签实现动态权限控制</text><br />
                                    <text>一起送外卖吧</text>
                                </div>
                            }} />
                        </Authority>
                    </Col>
                </Row>
            </Col>
            <Col span={7}>
                <Card bodyStyle={{padding: '16px'}} hoverable>
                    <ClusterOutlined style={{fontSize: '35px', color: '#22a7f0'}} />
                    <div class={styles.number}>
                        <div>26</div>
                        <span>最新统计</span>
                    </div>
                </Card>
                <Br />
                <Card title='最新统计'>
                    <Chart data={echartData2} />
                </Card>
                <Br />
                <Card title='备注'>
                    <Input />
                    <Br />
                    <Button type='primary'>保存</Button>
                </Card>
                
            </Col>
        </Row>
        <Br />
        <Card>
            <List data={data} render={(v, index) => <ListItem key={index} content={{
                avatar: () => <img style={{width: '50px'}} src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />,
                description: () => v.title,
                title: () => <text>标题哦</text>
            }}>
                Center
            </ListItem>} />
        </Card>
    </Page>

})