<style scoped lang="less">
    .mian-box {
        border: solid 1px #f5f5f5;
        position: absolute;
        width: 95%;
        height: 90%;
        display: block;
        text-align: center;
        padding: 10px 10px;
        box-sizing: border-box;
        background-color: #f5f5f5;
        #main {
            width: 100%;
            height: 90%;
            background-color: #f5f5f5;
        }
    }
</style>
<template>
    <div class="mian-box">
        <p>中国地图</p>
        <div id="main">

        </div>
    </div>

</template>

<script>
    import ggdp from '@/functions/common'
    // 按需引入 ECharts 主模块
    let echarts = require('echarts/lib/echarts');
    import 'echarts/map/js/china.js';

    require('echarts/lib/chart/map');
    require('echarts/lib/chart/lines');
    require('echarts/lib/component/geo');
    // 引入提示框和标题组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');

    export default {
        name: '',
        components: {},
        props: [],
        data() {
            return {}
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(document.getElementById('main'));
                // 绘制图表
                myChart.setOption({
                    backgroundColor: "#f5f5f5",
                    tooltip: {
                        show: true,
                        padding: 0

                    },
                    legend: {
                        show: false,
                        orient: 'vertical',
                        top: 'auto',
                        left: 'right',
                        data: ['中国', '线路'],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    series: [
                        {
                            name: "中国",
                            type: "map",
                            mapType: "china",
                            zoom: 1.25,
                            selectedMode: false,
                            itemStyle: {
                                normal: {
                                    areaColor: "#103a65",
                                    borderWidth: 1,
                                    borderColor: "#1B1F23",
                                    label: {
                                        show: true
                                    }
                                },
                                emphasis: {
                                    areaColor: "#2A333D",
                                    label: {
                                        show: true
                                    }
                                }
                            },
                            label: {
                                normal: {
                                    show: true,
                                    color: '#fff'
                                },
                                emphasis: {
                                    show: true,
                                    color: '#fff'
                                }
                            },
                            data: [
                                {name: '北京', value: this.randomData()},
                                {name: '天津', value: this.randomData()},
                                {name: '上海', value: this.randomData()},
                                {name: '重庆', value: this.randomData()},
                                {name: '河北', value: this.randomData()},
                                {name: '河南', value: this.randomData()},
                                {name: '云南', value: this.randomData()},
                                {name: '辽宁', value: this.randomData()},
                                {name: '黑龙江', value: this.randomData()},
                                {name: '湖南', value: this.randomData()},
                                {name: '安徽', value: this.randomData()},
                                {name: '山东', value: this.randomData()},
                                {name: '新疆', value: this.randomData()},
                                {name: '江苏', value: this.randomData()},
                                {name: '浙江', value: this.randomData()},
                                {name: '江西', value: this.randomData()},
                                {name: '湖北', value: this.randomData()},
                                {name: '广西', value: this.randomData()},
                                {name: '甘肃', value: this.randomData()},
                                {name: '山西', value: this.randomData()},
                                {name: '内蒙古', value: this.randomData()},
                                {name: '陕西', value: this.randomData()},
                                {name: '吉林', value: this.randomData()},
                                {name: '福建', value: this.randomData()},
                                {name: '贵州', value: this.randomData()},
                                {name: '广东', value: this.randomData()},
                                {name: '青海', value: this.randomData()},
                                {name: '西藏', value: this.randomData()},
                                {name: '四川', value: this.randomData()},
                                {name: '宁夏', value: this.randomData()},
                                {name: '海南', value: this.randomData()},
                                {name: '台湾', value: this.randomData()},
                                {name: '香港', value: this.randomData()},
                                {name: '澳门', value: this.randomData()}
                            ],
                            markPoint: {
                                symbol: 'circle',
                                symbolSize: 8,
                                label: {
                                    normal: {
                                        show: false
                                    }
                                },
                                data: [
                                    {
                                        name: '广东',
                                        coord: [113.23, 23.16]
                                    }, {
                                        name: '深圳',
                                        coord: [114.07, 22.62]
                                    }, {
                                        name: '成都',
                                        coord: [102.56, 30.92]
                                    }, {
                                        name: '南京',
                                        coord: [118.78, 32.04]
                                    }, {
                                        name: '兰州',
                                        coord: [103.73, 35.03]
                                    }, {
                                        name: '武汉',
                                        coord: [114.31, 30.5]
                                    }, {
                                        name: '义乌',
                                        coord: [120.06, 29.32]
                                    }, {
                                        name: '抚顺',
                                        coord: [123.97, 41.97]
                                    }, {
                                        name: '拉萨',
                                        coord: [91.11, 30.97]
                                    }, {
                                        name: '曲靖',
                                        coord: [103.79, 25.51]
                                    }, {
                                        name: '嘉峪关',
                                        coord: [98.289152, 39.77313]
                                    }, {
                                        name: '张家口',
                                        coord: [114.87, 40.82]
                                    }, {
                                        name: '铜川',
                                        coord: [109.11, 35.09]
                                    }
                                ]
                            }
                        }, {
                            name: '线路',
                            type: 'lines',
                            zlevel: 2,
                            large: true,
                            effect: {
                                show: true,
                                constantSpeed: 50,
                                symbol: 'arrow',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                                symbolSize: 10,
                                trailLength: 0,
                            },
                            lineStyle: {
                                normal: {
                                    color: '#F58158',
                                    width: 2,
                                    opacity: 0.6,
                                    curveness: 0.2
                                }
                            },
                            data: [
                                /*{
                                    coords: [
                                        [102.56, 30.92],
                                        [114.87, 40.82]
                                    ]
                                },*/
                                /* {fromName: "成都", toName: "铜川", coords: [[102.56, 30.92], [109.11, 35.09]]},
                                 {fromName: "成都", toName: "嘉峪关", coords: [[102.56, 30.92], [98.289152, 39.77313]]},
                                 {fromName: "成都", toName: "广东", coords: [[102.56, 30.92], [113.23, 23.16]]}*/
                            ]
                        }
                    ]
                });
            },
            randomData: function () {
                return Math.round(Math.random() * 1000);
            }
        },
        mounted() {
            this.drawLine()

        }
    }
</script>
