<style lang="less">
    .data-header-box {
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
        .expand-dialog .el-dialog {
        }
        .el-button .el-tooltip .item .el-button--default {

        }

    }

    .type2-chart-table-box {
        padding: 0 10px;
        height: 535px;
        .expand-table-wrapper {
            width: 30%;
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
            width: 69%;
            #popup-chart {
                width: 100%;
                height: 470px;
            }
        }
        .data-footer-box .box-center {
            margin: 0 auto;
        }
        .data-footer-box .action-group {
            display: block;
        }
    }


</style>
<template>
    <div class="data-header-box">
        <span class="title">{{title}}</span>
        <div class="action-group g-rt">
            <el-button icon="icon iconfont icon-fangda" @click="showPopupTable"></el-button>
            <el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
                <el-button icon="icon iconfont icon-wenhao"></el-button>
            </el-tooltip>
        </div>


        <!--弹出框 类型1-->
        <div class="popup-table">
            <div class="expand-dialog">
                <el-dialog :visible.sync="showDialogType1" width="1486px" top="100px" :modal="false">
                    <div class="popup-content-wrapper">
                        <p class="tooltip">
                            <el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
                                <el-button icon="icon iconfont icon-wenhao"></el-button>
                            </el-tooltip>
                        </p>
                        <p class="popup-title">实时交易数据分析</p>
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
                                <el-select v-model="popupSearchData.city" placeholder="城市" size="small">
                                    <el-option v-for="item in cityOptions" :key="item.value" :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-select v-model="popupSearchData.company" placeholder="公司" size="small">
                                    <el-option v-for="item in companyOptions" :key="item.value" :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item>
                                <el-select v-model="popupSearchData.user" placeholder="用户" size="small">
                                    <el-option v-for="item in userOptions" :key="item.value" :label="item.label"
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
                                <el-select v-model="popupSearchData.standard" placeholder="规格" size="small">
                                    <el-option v-for="item in standardOptions" :key="item.value" :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-button @click="showDialogType1 = true" size="small">搜索</el-button>
                            </el-form-item>
                        </el-form>
                        <div class="expand-table-wrapper">
                            <div class="data-content">
                                <el-table :data="expandTableData" fit class="inner-table">
                                    <el-table-column width="25px">
                                        <template slot-scope="scope">
                                            <i class="icon iconfont icon-right green"
                                               style="font-size: 20px;margin-left: 5px"></i>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="date" label="日期" width="55px"></el-table-column>
                                    <el-table-column prop="time" label="时间" width="55px"></el-table-column>
                                    <el-table-column prop="area" label="地区"></el-table-column>
                                    <el-table-column prop="company" label="公司"></el-table-column>
                                    <el-table-column prop="user" label="用户"></el-table-column>
                                    <el-table-column prop="type" label="品种"></el-table-column>
                                    <el-table-column prop="standard" label="规格"></el-table-column>
                                    <el-table-column prop="num" label="合同数量"></el-table-column>

                                    <el-table-column prop="outNum" label="已出库数量">
                                        <template slot-scope="scope">
                                            <span class="green">{{ scope.row.date }}吨</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="innerNum" label="未出库数量">
                                        <template slot-scope="scope">
                                            <span class="red">{{ scope.row.date }}吨</span>
                                        </template>
                                    </el-table-column>

                                    <el-table-column prop="price" label="单价"></el-table-column>
                                    <el-table-column prop="allPrice" label="总价(万元)"></el-table-column>
                                </el-table>
                            </div>
                            <div class="popup-other-infos">
                                <p class="other-item">2017年10月1日至2017年10月25日，<span class="yellow">xxxx</span>地区，
                                    合同数量<span class="blue">222</span>件，总交易量<span class="pink">111111</span>吨，
                                    总交易金额<span class="orange">111111</span>万元，
                                    已出库<span class="green">xxxx</span>吨，
                                    未出库<span class="red">xxxx</span>吨。
                                </p>
                            </div>
                            <div class="data-footer-box clearfix">
                                <div class="action-group g-lf left">
                                    <el-button icon="icon iconfont icon-caidan1" @click="expandData"></el-button>
                                    <el-button icon="icon iconfont icon-jiugongge"></el-button>
                                </div>
                                <div class="action-group box-center center">
                                    <el-button icon="icon iconfont icon-arrow-down-circle-left"
                                               @click="expandData"></el-button>
                                    <el-button icon="icon iconfont icon-arrow-down-circle-right"></el-button>
                                </div>
                                <div class="action-group g-rt right">
                                    <el-button icon="icon iconfont icon-msnui-menu" @click="expandData"></el-button>
                                    <el-button icon="icon iconfont icon-pie"></el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-dialog>
            </div>

        </div>


        <!--弹出框 类型2-->
        <div class="popup-table">
            <div class="expand-dialog">
                <el-dialog :visible.sync="showDialogType2" width="1486px" top="100px" :modal="false">
                    <div class="popup-content-wrapper">
                        <p class="tooltip">
                            <el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
                                <el-button icon="icon iconfont icon-wenhao1"></el-button>
                            </el-tooltip>
                        </p>
                        <p class="popup-title">成交价数据分析</p>
                        <div class="select-group-wrapper">
                            <el-select v-model="value" placeholder="请选择" size="small">
                                <el-option v-for="item in varietyOptions" :key="item.value" :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                            <el-select v-model="value" placeholder="请选择" size="small">
                                <el-option v-for="item in varietyOptions" :key="item.value" :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                            <el-select v-model="value" placeholder="请选择" size="small">
                                <el-option v-for="item in varietyOptions" :key="item.value" :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                            <el-select v-model="value" placeholder="请选择" size="small">
                                <el-option v-for="item in varietyOptions" :key="item.value" :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                            <el-button @click="showDialogType1 = true" size="small">搜索</el-button>
                        </div>

                        <div class="type2-chart-table-box clearfix">
                            <div class="expand-table-wrapper g-lf">
                                <div class="data-content type2-data-table">
                                    <el-tabs v-model="tabActive" type="card">  <!--34-->
                                        <el-tab-pane label="螺纹钢" name="first">
                                            <el-table :data="priceDataAnalyze" size="small" fit width="100%">
                                                <el-table-column prop="province" label="省份"
                                                                 width="55px"></el-table-column>
                                                <el-table-column prop="city" label="城市" width="60px"></el-table-column>
                                                <el-table-column prop="name" label="品名" width="64px"></el-table-column>
                                                <el-table-column prop="standard" label="规格"
                                                                 width="55px"></el-table-column>
                                                <el-table-column prop="texture" label="材质"
                                                                 width="55px"></el-table-column>
                                                <el-table-column prop="mill" label="钢厂" width="60px"></el-table-column>
                                                <el-table-column prop="turnover" label="成交量"
                                                                 width="55px"></el-table-column>
                                            </el-table>
                                        </el-tab-pane>
                                        <el-tab-pane label="高线" name="second">配置管理</el-tab-pane>
                                        <el-tab-pane label="盘螺" name="third">角色管理</el-tab-pane>
                                        <el-tab-pane label="热轧板卷" name="fourth">定时任务补偿</el-tab-pane>
                                    </el-tabs>

                                </div>
                                <div class="data-footer-box clearfix">
                                    <div class="action-group box-center">
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
        props: ['itemTitle'],
        data() {
            return {
                tabActive: 'first',
                title: '',
                popupSearchData: {
                    timer1: '',
                    timer2: '',
                    city: '',
                    company: '',
                    user: '',
                    variety: '',
                    standard: ''
                },
                showDialogType1: false,
                showDialogType2: false,
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
                companyOptions: [{
                    value: '1',
                    label: '北京公司'
                }, {
                    value: '2',
                    label: '上海公司'
                }, {
                    value: '3',
                    label: '广州公司'
                }, {
                    value: '4',
                    label: '重庆公司'
                }],
                userOptions: [{
                    value: '1',
                    label: '用户1'
                }, {
                    value: '2',
                    label: '用户2'
                }, {
                    value: '3',
                    label: '用户3'
                }, {
                    value: '4',
                    label: '用户4'
                }],
                varietyOptions: [{
                    value: '1',
                    label: '规格1'
                }, {
                    value: '2',
                    label: '规格2'
                }, {
                    value: '3',
                    label: '规格3'
                }, {
                    value: '4',
                    label: '规格4'
                }],
                standardOptions: [{
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
                priceDataAnalyze: [{
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '132221',
                    upDowns: '212'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '132221',
                    upDowns: '212'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '132221',
                    upDowns: '212'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '132221',
                    upDowns: '212'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '132221',
                    upDowns: '212'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '132221',
                    upDowns: '212'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '132221',
                    upDowns: '212'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '132221',
                    upDowns: '212'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '132221',
                    upDowns: '212'
                }, {
                    province: '陕西111',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '132221',
                    upDowns: '212'
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
            let _this = this;
        },
        methods: {
            showPopupTable: function () {
                let _this = this;
                _this.showDialogType2 = true;
                if (_this.showDialogType2) {
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
