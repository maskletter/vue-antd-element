import { defineComponent } from 'vue';
import { Card, Row, Col, Button } from 'ant-design-vue'
import Page from '../../components/admin/page'
import Chart from '../../components/chart'
import { CropperOpen } from '@/components/cropper'
import Br from '@/components/br';


export default defineComponent(() => {



    var colors = ['#5793f3', '#d14a61', '#675bba'];

 

    const echartData2 = {
        color: colors,
    
        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data:['2015 降水量', '2016 降水量']
        },
        grid: {
            top: 70,
            bottom: 50
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params: any) {
                            return '降水量  ' + params.value
                                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
            },
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params: any) {
                            return '降水量  ' + params.value
                                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '2015 降水量',
                type: 'line',
                xAxisIndex: 1,
                smooth: true,
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name: '2016 降水量',
                type: 'line',
                smooth: true,
                data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
            }
        ]
    };

    return () => <Page title={<text>折线图</text>}>
        <Br />
        <Row gutter={10}>
            <Col span={12}>
                <Card hoverable bodyStyle={{padding: '20px'}}>
                    <Chart data={{
                      xAxis: {
                          type: 'category',
                          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                      },
                      yAxis: {
                          type: 'value'
                      },
                      series: [{
                          data: [820, 932, 901, 934, 1290, 1330, 1320],
                          type: 'line'
                      }]
                  }} />
                </Card>
            </Col>
            <Col span={12}>
                <Card hoverable bodyStyle={{padding: '20px'}}>
                    <Chart data={echartData2} />
                </Card>
            </Col>
        </Row>
        
    </Page>

})