<style scoped lang="less">
    .menu-copy-btn {
        margin-top: 1px;
    }

    .popup-table {
        height: 100%;
    }

    .popup-content-wrapper {
        margin: 37px 60px;
        background: url(../assets/popupInner.png) no-repeat;
        background-size: 100%;
        height: 778px;
        .tooltip {
            text-align: right;
            padding: 2px 10px 0 10px;
            .el-button {
                background: transparent;
                color: white;
                padding: 5px;
                border: none;
                font-size: 18px;
            }
        }
    }

    .popup-title {
        font-size: 28px;
        color: white;
        text-align: center;
        line-height: 30px;
    }

    .expand-table-wrapper {
        .data-content {
            height: 550px;
        }
    }

    .popup-bottom-wrapper {
        width: 33%;
        display: inline-block;
        height: 100%;
    }

    .type2-chart-table-box {
        padding: 0 10px;
        height: 535px;
        .expand-table-wrapper {
            width: 26%;
        }
        .el-tabs__nav-wrap.is-scrollable {
            padding: 0 !important;
        }
        .type2-data-table {
            height: 460px !important;
        }
        .data-content .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
            width: 103px;
        }
        .data-content .el-tabs__item {
            width: 103px;
        }
        .expand-chart-wrapper {
            width: 72%;
            #popup-chart {
                width: 100%;
                height: 470px;
            }
        }
    }

    /*数据框的通用头部样式*/
    .pages-center {
        height: 100%;
        text-align: center;
    }

    .data-header-box .pages-center .el-button {
        background: transparent;
        color: white;
        padding: 5px;
        border: none;
        font-size: 18px;
    }


</style>
<template>
    <div class="data-header-box">
        <span class="title">{{title}}</span>
        <div class="action-group g-rt right">
            <el-button icon="icon iconfont icon-fangda" @click="showPopupTable" v-show="showExpandPopup"></el-button>
            <el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
                <el-button icon="icon iconfont icon-wenhao"></el-button>
            </el-tooltip>
        </div>

        <!--弹出框 类型2-->
        <div class="popup-table">
            <div class="expand-dialog">
                <el-dialog :visible.sync="showDialogType2" width="1486px" top="100px" :modal="false">
                    <div class="popup-content-wrapper">
                        <p class="tooltip">
                            <el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
                                <el-button icon="icon iconfont icon-wenhao"></el-button>
                            </el-tooltip>
                        </p>
                        <p class="popup-title">云仓储</p>
                        <el-form class="select-group-wrapper" ref="popupSearchData" :model="popupSearchData"
                                 :inline="true">
                            <el-form-item>
                                <el-date-picker v-model="popupSearchData.timer1" type="date" placeholder="选择日期"
                                                size="small"></el-date-picker>
                            </el-form-item>
                            <el-form-item>
                                <el-date-picker v-model="popupSearchData.timer2" type="date" placeholder="选择日期"
                                                size="small"></el-date-picker>
                            </el-form-item>
                            <el-form-item>
                                <el-select v-model="popupSearchData.provice" placeholder="省份" size="small">
                                    <el-option v-for="item in proviceOptions" :key="item.value" :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-select v-model="popupSearchData.city" placeholder="城市" size="small">
                                    <el-option v-for="item in cityOptions" :key="item.value" :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-select v-model="popupSearchData.variety" placeholder="品种" size="small">
                                    <el-option v-for="item in varietyOptions" :key="item.value" :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-button @click="showDialogType1 = true" size="small">搜索</el-button>
                            </el-form-item>
                        </el-form>

                        <div class="type2-chart-table-box clearfix">
                            <div class="expand-table-wrapper g-lf">
                                <div class="data-content type2-data-table">
                                    <el-table :data="priceDataAnalyze" size="small" fit width="100%">
                                        <el-table-column prop="province" label="省份"
                                                         width="58px"></el-table-column>
                                        <el-table-column prop="city" label="城市" width="58px"></el-table-column>
                                        <el-table-column prop="name" label="品名" width="63px"></el-table-column>
                                        <el-table-column prop="num" label="指数" width="67px">
                                            <template slot-scope="scope">
                                                        <span :class="scope.row.num>3000?'red bold':'green bold'">
                                                            {{scope.row.num}}
                                                        </span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column prop="date" label="日期" width="104px"></el-table-column>
                                    </el-table>
                                </div>
                                <div class="data-footer-box clearfix">
                                    <div class="tool-btn-group center">
                                        <el-button icon="icon iconfont icon-arrow-down-circle-left"
                                                   @click="expandData"></el-button>
                                        <el-button icon="icon iconfont icon-arrow-down-circle-right"></el-button>
                                    </div>
                                </div>
                            </div>
                            <div class="expand-chart-wrapper g-rt">
                                <div class="chart-content">
                                    <div id="popup-chart" style="width: 100%; height: 470px;">

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="popup-other-infos">
                            <p class="other-item">2017年10月1日至2017年10月25日，<span class="yellow">xxxx</span>地区，
                                合同数量<span class="blue">222</span>件，总交易量<span class="pink">111111</span>吨，
                                总交易金额<span class="orange">111111</span>万元，
                                已出库<span class="green">xxxx</span>吨，
                                未出库<span class="red">xxxx</span>吨。
                            </p>
                            <p class="other-item">2017年10月1日至2017年10月25日，<span class="yellow">xxxx</span>地区，
                                合同数量<span class="blue">222</span>件，总交易量<span class="pink">111111</span>吨，
                                总交易金额<span class="orange">111111</span>万元，
                                已出库<span class="green">xxxx</span>吨，
                                未出库<span class="red">xxxx</span>吨。
                            </p>
                        </div>
                    </div>

                </el-dialog>
            </div>

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

    let myChart;
    export default {
        name: 'data-header-box',
        props: ['itemTitle', 'expandPopup', 'typeNum'],
        data() {
            return {
                tabActive: 'first',
                title: '',
                showExpandPopup: true,
                showDialogType1: false,
                showDialogType2: false,
                popupSearchData: {
                    timer1: '',
                    timer2: '',
                    provice: '',
                    city: '',
                    variety: ''
                },
                proviceOptions: [{
                    value: '1',
                    label: '浙江省'
                }, {
                    value: '2',
                    label: '江西省'
                }, {
                    value: '3',
                    label: '广东省'
                }, {
                    value: '4',
                    label: '湖南省'
                }],
                cityOptions: [{
                    value: '1',
                    label: '北京'
                }, {
                    value: '2',
                    label: '上海'
                }, {
                    value: '3',
                    label: '广州'
                }, {
                    value: '4',
                    label: '重庆'
                }],
                varietyOptions: [{
                    value: '1',
                    label: '品种1'
                }, {
                    value: '2',
                    label: '品种2'
                }, {
                    value: '3',
                    label: '品种3'
                }, {
                    value: '4',
                    label: '品种4'
                }],
                priceDataAnalyze: [{
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    num: 2243,
                    date: '2017年11月21日'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    num: 3444,
                    date: '2017年11月21日'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    num: 3211,
                    date: '2017年11月21日'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    num: 1323,
                    date: '2017年11月21日'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    num: 2243,
                    date: '2017年11月21日'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    num: 5332,
                    date: '2017年11月21日'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    num: 2243,
                    date: '2017年11月21日'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    num: 2243,
                    date: '2017年11月21日'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    num: 6444,
                    date: '2017年11月21日'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    num: 4223,
                    date: '2017年11月21日'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    num: 4432,
                    date: '2017年11月21日'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    num: 1334,
                    date: '2017年11月21日'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    num: 5533,
                    date: '2017年11月21日'
                }],
                value: '',
                expandTableData: [{
                    date: '10.24',
                    time: '11:32',
                    area: '重庆',
                    company: '重庆公司',
                    user: '中铁西安公司',
                    type: '螺纹钢',
                    standard: '12#',
                    num: '1546',
                    outNum: '456',
                    innerNum: '1312',
                    price: '32331',
                    allPrice: '21321'
                }, {
                    date: '10.24',
                    time: '11:32',
                    area: '重庆',
                    company: '重庆公司',
                    user: '中铁西安公司',
                    type: '螺纹钢',
                    standard: '12#',
                    num: '1546',
                    outNum: '456',
                    innerNum: '1312',
                    price: '32331',
                    allPrice: '21321'
                }, {
                    date: '10.24',
                    time: '11:32',
                    area: '重庆',
                    company: '重庆公司',
                    user: '中铁西安公司',
                    type: '螺纹钢',
                    standard: '12#',
                    num: '1546',
                    outNum: '456',
                    innerNum: '1312',
                    price: '32331',
                    allPrice: '21321'
                }, {
                    date: '10.24',
                    time: '11:32',
                    area: '重庆',
                    company: '重庆公司',
                    user: '中铁西安公司',
                    type: '螺纹钢',
                    standard: '12#',
                    num: '1546',
                    outNum: '456',
                    innerNum: '1312',
                    price: '32331',
                    allPrice: '21321'
                }, {
                    date: '10.24',
                    time: '11:32',
                    area: '重庆',
                    company: '重庆公司',
                    user: '中铁西安公司',
                    type: '螺纹钢',
                    standard: '12#',
                    num: '1546',
                    outNum: '456',
                    innerNum: '1312',
                    price: '32331',
                    allPrice: '21321'
                }],
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
                    legend: {
                        icon: 'rect',
                        itemWidth: 25,
                        itemHeight: 14,
                        itemGap: 13,
                        data: ['规格1', '规格2', '规格3'],
                        right: '4%',
                        textStyle: {
                            fontSize: 12,
                            color: '#F1F1F3'
                        }
                    },
                    grid: {
                        left: '0',
                        right: '15px',
                        top: '6%',
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
                            margin: 10,
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
                },
            }
        },
        mounted: function () {
            this.title = this.itemTitle;
            this.showExpandPopup = this.expandPopup;
        },
        methods: {
            showPopupTable: function () {
                let _this = this;
                if (_this.typeNum == 1) {
                    _this.showDialogType1 = true;

                } else {
                    _this.showDialogType2 = true;
                    let map = setInterval(function () {
                        _this.drawLine();
                        clearInterval(map);
                    }, 1000)
                }


            },
            expandData: function () {

            },
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let _this = this;
                if (myChart == '' || typeof(myChart) == 'undefined') {
                    myChart = echarts.init(document.getElementById('popup-chart'));
                    console.log(document.getElementById('popup-chart'));
                    myChart.setOption(_this.chartOption);
                    myChart.on('click', function (param) {
                    });
                } else {
                    echarts.dispose(document.getElementById('popup-chart'));
                    console.log(document.getElementById('popup-chart'));


                    myChart = echarts.init(document.getElementById('popup-chart'));
                    myChart.setOption(_this.chartOption);
                    myChart.on('click', function (param) {
                    });
                }

            },
        }
    }
</script>
