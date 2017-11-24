<style lang="less">


</style>
<template>
    <div class="map-click-chart">
        <div class="title">
            标题
        </div>
        <div class="chart-tabs">
            <el-tabs v-model="chartActive" type="card">
                <el-tab-pane label="选项一" name="first"></el-tab-pane>
                <el-tab-pane label="选项二" name="second"></el-tab-pane>
            </el-tabs>
        </div>
        <div class="chart-tabs">

        </div>
        <div id="map-innner-chart" v-if="showMapChart" style="width: 100%;height: 245px;">

        </div>
    </div>

</template>

<script>
    // 按需引入 ECharts 主模块
    let echarts = require('echarts/lib/echarts');

    require('echarts/lib/chart/line');
    // 引入提示框和标题组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');
    export default {
        name: '',
        components: {},
        props: ['showThis'],
        data() {
            return {
                chartActive: 'first',
                showMapChart: false,
                chartOption: {
                    backgroundColor: '#172f4b',
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            lineStyle: {
                                color: '#57617B'
                            }
                        }
                    },
                    grid: {
                        left: '0',
                        right: '10px',
                        top: '5px',
                        bottom: '0',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            lineStyle: {
                                color: '#57617B'
                            }
                        },
                        data: ['1', '3', '6', '9', '12', '15', '18', '21', '24', '27', '30']
                    }],
                    yAxis: [{
                        type: 'value',
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#57617B'
                            }
                        },
                        axisLabel: {
                            margin: 5,
                            textStyle: {
                                fontSize: 14
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#57617B'
                            }
                        }
                    }],
                    series: [{
                        name: '规格1',
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(137, 189, 27, 0.3)'
                                }, {
                                    offset: 0.8,
                                    color: 'rgba(137, 189, 27, 0)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 20
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgb(137,189,27)'
                            }
                        },
                        data: [9.1, 16.6, 37.5, 45.9, 67.6, 60.9, 89.6, 94.1, 80.1, 52.4, 75.8]
                    }, {
                        name: '规格2',
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(0, 136, 212, 0.3)'
                                }, {
                                    offset: 0.8,
                                    color: 'rgba(0, 136, 212, 0)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 20
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgb(0,136,212)'
                            }
                        },
                        data: [19.6, 30.5, 39.2, 45.5, 108.6, 90.6, 80.0, 75.6, 69.8, 67.5, 90.4]
                    }, {
                        name: '规格3',
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(219, 50, 51, 0.3)'
                                }, {
                                    offset: 0.8,
                                    color: 'rgba(219, 50, 51, 0)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 20
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgb(219,50,51)'
                            }
                        },
                        data: [50.9, 67.5, 67.5, 72.8, 85.7, 88.5, 91.9, 101.8, 79.7, 85.1, 92.9]
                    },]
                }

            }
        },
        methods: {},
        mounted: function () {
            let myChart;
            this.showMapChart = this.showThis;

            myChart = echarts.init(document.getElementById('map-innner-chart'));
            setTimeout(function () {
                myChart.setOption(this.chartOption);
            }, 500)
        }
    }
</script>
