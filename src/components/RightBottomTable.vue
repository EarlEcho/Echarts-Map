<style lang="less">
    .right-bottom-table {
        height: 362px;
        .popup-table {
            height: 100%;
        }
        .el-table th {
            padding: 6px 0;
        }

        .el-table td {
            padding: 3px 0;
        }
        .el-table td, .el-table th.is-leaf {
            border-bottom: 3px solid #172f4b;
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

        .daily-price-table {
            width: 522px;
            height: 362px;
            background: url(../assets/rt2.png) no-repeat;
            background-size: 100%;
            float: right;
            .data-content {
                height: 272px;
            }
            .el-col-12 {
                border-right: solid 1px #11213A;
                border-left: solid 1px #11213A;
            }
        }

        .pages-group-center {
            width: 58%;
            display: inline-block;
            text-align: right;
        }

        .pages-group-right {
            width: 40%;
            display: inline-block;
            text-align: right;
            .el-button + .el-button {
                margin-left: 0;
            }
        }
        .pages-group-signle {
            width: 99%;
            display: inline-block;
            text-align: right;
            .el-button + .el-button {
                margin-left: 0;
            }
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
        .right-line-charts-wrapper2 {
            width: 820px;
            height: 370px;
            background-color: #1b3a57;
            float: right;
        }
        .numarrow {
            display: inline-block;
            width: 45px;
            text-align: left;
            i {
                margin-right: -2px;
                vertical-align: middle;
            }
        }
        .daily-price-msg {
            height: 240px;
            width: 130px;
            float: left;
            background-color: #0E2A43;
            color: #1291de;
            font-weight: 600;
            padding: 25px 15px;
            text-align: center;
            span {
                color: white;
            }
        }
    }


</style>
<template>
    <div class="right-bottom-table">
        <!--右侧数据-->
        <div class="daily-price-table clearfix" v-show="!showDailyPriceLine">
            <div class="data-header-box clearfix">
                <span class="title">今日价格指数 <small>&emsp;2017年11月27日</small></span>
                <div class="action-group g-rt right">
                    <el-button icon="icon iconfont icon-fangda" @click="showPopupTable"></el-button>
                    <el-tooltip class="item tool-btn-group" effect="dark" content="提示文字" placement="top-start">
                        <el-button icon="icon iconfont icon-wenhao"></el-button>
                    </el-tooltip>
                </div>
            </div>
            <div class="data-content clearfix">
                <el-row>
                    <el-col :span="12">
                        <el-table :data="dailyVolumeTable" size="small" fit>
                            <el-table-column prop="province" label="省份" width="45px"></el-table-column>
                            <el-table-column prop="city" label="城市" width="45px"></el-table-column>
                            <el-table-column prop="name" label="品名" width="69px"></el-table-column>

                            <el-table-column prop="turnover" label="指数" width="50px">
                                <template slot-scope="scope">
                                    <span :class="scope.row.turnover>2000?'red bold':'green bold'"
                                          style="font-size: 13px">{{scope.row.turnover}}</span>
                                </template>
                            </el-table-column>

                            <el-table-column prop="upDowns" label="涨跌" width="50px">
                                <template slot-scope="scope">
                                    <span :class="scope.row.upDowns>50?'red numarrow':'green numarrow'">
                                        <i :class="scope.row.upDowns>50?'iconfont icon-up':'iconfont icon-dowm' "></i>
                                        {{scope.row.upDowns}}
                                    </span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>
                    <el-col :span="12">
                        <el-table :data="dailyVolumeTable" size="small" fit>
                            <el-table-column prop="province" label="省份" width="45px"></el-table-column>
                            <el-table-column prop="city" label="城市" width="45px"></el-table-column>
                            <el-table-column prop="name" label="品名" width="69px"></el-table-column>
                            <el-table-column prop="turnover" label="指数" width="50px">
                                <template slot-scope="scope">
                                    <span :class="scope.row.turnover>2000?'red bold':'green bold'"
                                          style="font-size: 13px">{{scope.row.turnover}}</span>
                                </template>
                            </el-table-column>

                            <el-table-column prop="upDowns" label="涨跌" width="50px">
                                <template slot-scope="scope">
                                    <span :class="scope.row.upDowns>50?'red numarrow':'green numarrow'">
                                        <i :class="scope.row.upDowns>50?'iconfont icon-up':'iconfont icon-dowm' "></i>
                                        {{scope.row.upDowns}}
                                    </span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
            </div>
            <div class="data-footer-box clearfix">
                <div class="pages-group-center tool-btn-group">
                    <el-button icon="icon iconfont icon-arrow-down-circle-left"
                               @click="expandData"></el-button>
                    <el-button icon="icon iconfont icon-arrow-down-circle-right"></el-button>
                </div>
                <div class="pages-group-right tool-btn-group">
                    <el-button icon="icon iconfont icon-menu1 darkbule"
                               @click="showDailyPriceLine = !showDailyPriceLine"></el-button>
                    <el-button icon="icon iconfont icon-weibiaoti111" @click="dailyPriceChart"></el-button>
                </div>
            </div>
        </div>

        <div class="right-line-charts-wrapper2 clearfix" v-show="showDailyPriceLine">
            <div class="data-header-box">
                <span class="title">今日价格指数</span>
                <div class="action-group g-rt right">
                    <el-button icon="icon iconfont icon-fangda" @click="showPopupTable"></el-button>
                    <el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
                        <el-button icon="icon iconfont icon-wenhao"></el-button>
                    </el-tooltip>
                </div>
            </div>
            <div class="checkbox-wrapper clearfix">
                <el-radio-group v-model="radioValue1">
                    <el-radio :label="3">螺纹钢</el-radio>
                    <el-radio :label="6">高线</el-radio>
                    <el-radio :label="9">盘螺</el-radio>
                    <el-radio :label="1">热轧轧板</el-radio>
                </el-radio-group>
                <el-radio-group v-model="radioValue2" class="g-rt">
                    <el-radio :label="3">1月</el-radio>
                    <el-radio :label="6">3月</el-radio>
                    <el-radio :label="9">6月</el-radio>
                </el-radio-group>
            </div>
            <div class="daily-price-msg">
                <p>成交价：<span>212133吨</span></p>
                <p>平均单价：<span>2144元/吨</span></p>
                <p>成交金额：<span>22313万元</span></p>
                <p>单价整幅：<i class="iconfont icon-up red">11.5%</i></p>
            </div>
            <div id="daily-price-chart" style="width: 690px;height: 240px;float: right">

            </div>
            <div class="data-footer-box clearfix">
                <div class="pages-group-signle tool-btn-group">
                    <el-button icon="icon iconfont icon-menu1"
                               @click="showDailyPriceLine = !showDailyPriceLine"></el-button>
                    <el-button icon="icon iconfont icon-weibiaoti111 darkbule" @click="dailyPriceChart"></el-button>
                </div>
            </div>
        </div>


        <div class="popup-table">
            <div class="expand-dialog">
                <el-dialog :visible.sync="showDialogType2" width="1486px" top="100px" :modal="false">
                    <div class="popup-content-wrapper">
                        <p class="tooltip">
                            <el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
                                <el-button icon="icon iconfont icon-wenhao"></el-button>
                            </el-tooltip>
                        </p>
                        <p class="popup-title">价格指数分析</p>
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
        name: 'RightTopTable',
        components: {},
        props: [],
        data() {
            return {
                radioValue1: '',
                radioValue2: '',
                value: '',
                tabActive: 'first',
                showDialogType2: false,
                showDailyPriceLine: false,
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
                dailyVolumeTable: [{
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '1221',
                    upDowns: '81'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '8421',
                    upDowns: '35'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '874',
                    upDowns: '20'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '1221',
                    upDowns: '81'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '8421',
                    upDowns: '35'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '874',
                    upDowns: '20'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '8421',
                    upDowns: '35'
                }],
                dailyLineOptions: {
                    backgroundColor: '#0E2A43',
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        top: '15px',
                        bottom: '15px',
                        left: '10px',
                        right: '10px',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    yAxis: {
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                // 使用深浅的间隔色
                                color: ['#aaa', '#ddd'],
                                type: 'dashed'
                            }
                        },

                    },
                    series: [{
                        name: '螺纹钢',
                        type: 'line',
                        data: [1800, 1710, 1815, 1902, 1987, 2010, 2111, 2401, 2300, 2671, 2974, 3544, 4237, 4704, 3210]
                    }, {
                        name: '高线',
                        type: 'line',
                        data: [1514, 1647, 1902, 1987, 1815, 2010, 2111, 3544, 4237, 4704, 3210, 2401, 2300, 2671, 2974]
                    }, {
                        name: '盘螺',
                        type: 'line',
                        data: [975, 1640, 1744, 2011, 2640, 2111, 2018, 2401, 2640, 2974, 3544, 4037, 4504, 2671, 2971]
                    }, {
                        name: '热轧板卷',
                        type: 'line',
                        data: [3101, 3321, 3401, 2987, 2874, 2610, 2310, 2000, 2971, 3607, 3974, 4358, 4781, 4012, 3710]
                    }]
                },
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
                }
            }
        },
        methods: {
            showPopupTable: function () {
                let _this = this;
                _this.showDialogType2 = true;
                let map = setInterval(function () {
                    myChart = echarts.init(document.getElementById('popup-chart'));
                    myChart.setOption(_this.chartOption);
                    clearInterval(map);
                    myChart.on('click', function (param) {
                    });
                }, 1000)
            },
            dailyPriceChart: function () {
                let _this = this;
                _this.showDailyPriceLine = !_this.showDailyPriceLine;
                let LineChart = echarts.init(document.getElementById('daily-price-chart'));
                LineChart.setOption(_this.dailyLineOptions);
            },
            expandData: function () {
                console.log('展开');
            },

        },
        mounted() {


        }

    }
</script>
