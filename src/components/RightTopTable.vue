<style lang="less">
    .right-top-table {
        height: 500px;
        .el-table th {
            padding: 6px 0;
        }

        .el-table td {
            padding: 3px 0;
        }
        .el-table td, .el-table th.is-leaf {
            border-bottom: 3px solid #172f4b;
        }
        .el-table__body, .el-table__footer, .el-table__header {
            border-bottom: 3px solid #172f4b;
        }

        .right-line-charts-wrapper {
            width: 820px;
            height: 500px;
            background-color: #1b3a57;
            margin-bottom: 10px;
            float: right;
        }

        .popup-table {
            height: 100%;
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
        .numarrow {
            display: inline-block;
            width: 45px;
            text-align: left;
            i {
                margin-right: -2px;
                vertical-align: middle;
            }
        }
        .daily-volume-msg {
            height: 60px;
            width: 100%;
            background-color: #0E2A43;
            color: #1291de;
            font-weight: 600;
            padding-top: 10px;
            span {
                color: white;
            }
        }

    }

    .daily-volume-table {
        float: right;
        .border-box {
            width: 522px;
            height: 500px;
            margin-bottom: 13px;
            background-color: #1C2B44;
            border: solid 2px #96E6EC;
            position: static;
            #border1 {
                width: 522px;
                height: 448px;
                background-color: #1C2B44;
                position: relative;
                top: 23px;
                left: -2px;
            }
            #border2 {
                width: 474px;
                height: 500px;
                background-color: #1C2B44;
                position: relative;
                top: -25px;
                left: 24px
            }
            .border-inner-content {
                width: 522px;
                height: 500px;
                position: relative;
                top: 0px;
                left: -24px;
            }
            .data-content {
                height: 410px;

            }
        }

        .data-content .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
            width: 132px;
        }
        .data-content .el-tabs__item {
            width: 130px;
        }
    }
</style>
<template>
    <div class="right-top-table clearfix">
        <!--右侧数据-->
        <div class="daily-volume-table">
            <border-box v-show="!showDailyVolumeLine">
                <div class="data-header-box clearfix">
                    <span class="title">今日成交价</span>
                    <div class="action-group g-rt right">
                        <el-button icon="icon iconfont icon-fangda" @click="showPopupTable"></el-button>
                        <el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
                            <el-button icon="icon iconfont icon-wenhao"></el-button>
                        </el-tooltip>
                    </div>
                </div>
                <div class="data-content">
                    <el-tabs v-model="tabActive" type="card">
                        <el-tab-pane label="螺纹钢" name="first">
                            <el-table :data="dailyVolumeTable" size="small" fit>
                                <el-table-column prop="province" label="省份" width="50px"></el-table-column>
                                <el-table-column prop="city" label="城市" width="52px"></el-table-column>
                                <el-table-column prop="name" label="品名" width="75px"></el-table-column>
                                <el-table-column prop="standard" label="规格" width="55px"></el-table-column>
                                <el-table-column prop="texture" label="材质" width="60px"></el-table-column>
                                <el-table-column prop="mill" label="钢厂" width="60px"></el-table-column>
                                <el-table-column prop="date" label="日期" width="50px"></el-table-column>
                                <el-table-column prop="turnover" label="成交量" width="55px">
                                    <template slot-scope="scope">
                                    <span :class="scope.row.turnover>2000?'red bold':'green bold'"
                                          style="font-size: 13px">{{scope.row.turnover}}</span>
                                    </template>
                                </el-table-column>

                                <el-table-column prop="upDowns" label="涨跌" width="65px">
                                    <template slot-scope="scope">
                                    <span :class="scope.row.upDowns>50?'red numarrow':'green numarrow'">
                                        <i :class="scope.row.upDowns>50?'iconfont icon-up':'iconfont icon-dowm' "></i>
                                        {{scope.row.upDowns}}
                                    </span>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-tab-pane>
                        <el-tab-pane label="高线" name="second">
                            <p style="padding-top:60px;color: white;text-align: center">暂无数据</p>
                        </el-tab-pane>
                        <el-tab-pane label="盘螺" name="third">
                            <p style="padding-top:60px;color: white;text-align: center">暂无数据</p>
                        </el-tab-pane>
                        <el-tab-pane label="热轧板卷" name="fourth">
                            <p style="padding-top:60px;color: white;text-align: center">暂无数据</p>
                        </el-tab-pane>
                    </el-tabs>

                </div>
                <div class="data-footer-box clearfix">
                    <div class="pages-group-center tool-btn-group">
                        <el-button icon="icon iconfont icon-arrow-down-circle-left"
                                   @click="expandData"></el-button>
                        <el-button icon="icon iconfont icon-arrow-down-circle-right"></el-button>
                    </div>
                    <div class="pages-group-right tool-btn-group">
                        <el-button icon="icon iconfont icon-menu1 darkbule"
                                   @click="showDailyVolumeLine = !showDailyVolumeLine"></el-button>
                        <el-button icon="icon iconfont icon-weibiaoti111" @click="dailyLineChart"></el-button>
                    </div>
                </div>
            </border-box>
        </div>


        <div class="right-line-charts-wrapper clearfix" v-show="showDailyVolumeLine">
            <div class="data-header-box">
                <span class="title">今日成交价</span>
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
            <div class="daily-volume-msg">
                <el-row>
                    <el-col :span="12" class="center">
                        <p>成交价：<span>&emsp;212133吨</span></p>
                    </el-col>
                    <el-col :span="12" class="center">
                        <p>平均单价<span>&emsp;2144元/吨</span></p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12" class="center">
                        <p>成交金额：<span>&emsp;22313万元</span></p>
                    </el-col>
                    <el-col :span="12" class="center">
                        <p>单价整幅&emsp;<i class="iconfont icon-up red">11.5%</i></p>
                    </el-col>
                </el-row>
            </div>
            <div id="daily-line-chart" style="width: 820px;height: 310px;"></div>
            <div class="data-footer-box clearfix">
                <div class="pages-group-signle tool-btn-group">
                    <el-button icon="icon iconfont icon-menu1"
                               @click="showDailyVolumeLine = !showDailyVolumeLine"></el-button>
                    <el-button icon="icon iconfont icon-weibiaoti111 darkbule" @click="dailyLineChart"></el-button>
                </div>
            </div>
        </div>

        <div class="popup-table">
            <div class="expand-dialog">
                <el-dialog :visible.sync="showDialogType2" width="1486px" top="100px" :modal="false">
                    <border-box>
                        <p class="tooltip">
                            <el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
                                <el-button icon="icon iconfont icon-wenhao"></el-button>
                            </el-tooltip>
                        </p>
                        <p class="popup-title">成交价数据分析</p>
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
                                <el-select v-model="popupSearchData.standard" placeholder="规格" size="small">
                                    <el-option v-for="item in standardOptions" :key="item.value" :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-select v-model="popupSearchData.company" placeholder="钢厂" size="small">
                                    <el-option v-for="item in companyOptions" :key="item.value" :label="item.label"
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

                                                <el-table-column prop="turnover" label="成交价"
                                                                 width="56px">
                                                    <template slot-scope="scope">
                                                        <span :class="scope.row.turnover>3000?'red bold':'green bold'">
                                                            {{scope.row.turnover}}
                                                        </span>
                                                    </template>
                                                </el-table-column>
                                            </el-table>
                                        </el-tab-pane>
                                        <el-tab-pane label="高线" name="second">
                                            <p style="padding-top:60px;color: white;text-align: center">暂无数据</p>
                                        </el-tab-pane>
                                        <el-tab-pane label="盘螺" name="third">
                                            <p style="padding-top:60px;color: white;text-align: center">暂无数据</p>
                                        </el-tab-pane>
                                        <el-tab-pane label="热轧板卷" name="fourth">
                                            <p style="padding-top:60px;color: white;text-align: center">暂无数据</p>
                                        </el-tab-pane>
                                    </el-tabs>

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
                            <p class="other-item" v-for="i in 2">2017年10月1日至2017年10月25日，<span class="yellow">xxxx</span>地区，
                                合同数量<span class="blue">222</span>件，总交易量<span class="pink">111111</span>吨，
                                总交易金额<span class="orange">111111</span>万元，
                                已出库<span class="green">xxxx</span>吨，
                                未出库<span class="red">xxxx</span>吨。
                            </p>
                        </div>
                    </border-box>

                </el-dialog>
            </div>

        </div>

    </div>

</template>

<script>
    import BorderBox from '@/components/BoderCompontents'
    // 按需引入 ECharts 主模块
    let echarts = require('echarts/lib/echarts');

    require('echarts/lib/chart/line');
    // 引入提示框和标题组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');

    let myChart;

    export default {
        name: 'RightTopTable',
        components: {BorderBox},
        props: [],
        data() {
            return {
                radioValue1: '',
                radioValue2: '',
                value: '',
                tabActive: 'first',
                showDialogType2: false,
                showDailyVolumeLine: false,
                popupSearchData: {
                    timer1: '',
                    timer2: '',
                    provice: '',
                    city: '',
                    variety: '',
                    standard: '',
                    company: ''
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
                companyOptions: [{
                    value: '1',
                    label: '北京钢厂'
                }, {
                    value: '2',
                    label: '上海钢厂'
                }, {
                    value: '3',
                    label: '广州钢厂'
                }, {
                    value: '4',
                    label: '重庆钢厂'
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
                standardOptions: [{
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
                priceDataAnalyze: [{
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '1133',
                    upDowns: '212'
                }, {
                    province: '四川',
                    city: '成都',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '11.20',
                    turnover: '3133',
                    upDowns: '212'
                }, {
                    province: '湖北',
                    city: '武汉',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '11.19',
                    turnover: '6455',
                    upDowns: '212'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '1213',
                    upDowns: '212'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '1334',
                    upDowns: '212'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '5454',
                    upDowns: '212'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '6453',
                    upDowns: '212'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '3244',
                    upDowns: '212'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '2243',
                    upDowns: '212'
                }, {
                    province: '重庆',
                    city: '重庆',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.02',
                    turnover: '2323',
                    upDowns: '212'
                }, {
                    province: '北京',
                    city: '北京',
                    name: '螺纹钢',
                    standard: '12#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '11.21',
                    turnover: '5666',
                    upDowns: '212'
                }, {
                    province: '湖南',
                    city: '长沙',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.30',
                    turnover: '2323',
                    upDowns: '212'
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
                    province: '山东',
                    city: '济南',
                    name: '螺纹钢',
                    standard: '12#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '3158',
                    upDowns: '40'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '1300',
                    upDowns: '80'
                }, {
                    province: '重庆',
                    city: '重庆',
                    name: '螺纹钢',
                    standard: '16#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '4102',
                    upDowns: '212'
                }, {
                    province: '山东',
                    city: '济南',
                    name: '螺纹钢',
                    standard: '12#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '3158',
                    upDowns: '40'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '1300',
                    upDowns: '80'
                }, {
                    province: '重庆',
                    city: '重庆',
                    name: '螺纹钢',
                    standard: '16#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '4102',
                    upDowns: '212'
                }, {
                    province: '山东',
                    city: '济南',
                    name: '螺纹钢',
                    standard: '12#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '3158',
                    upDowns: '40'
                }, {
                    province: '陕西',
                    city: '西安',
                    name: '螺纹钢',
                    standard: '1#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '1300',
                    upDowns: '80'
                }, {
                    province: '重庆',
                    city: '重庆',
                    name: '螺纹钢',
                    standard: '16#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '4102',
                    upDowns: '212'
                }, {
                    province: '山东',
                    city: '济南',
                    name: '螺纹钢',
                    standard: '12#',
                    texture: '铝合金',
                    mill: '重钢',
                    date: '10.25',
                    turnover: '3158',
                    upDowns: '40'
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
                    legend: {
                        data: ['螺纹钢', '高线', '盘螺', '热轧板卷'],
                        top: '30px',
                        textStyle: {
                            color: '#fff'
                        },
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
                    backgroundColor: '#1C2B44',
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
            dailyLineChart: function () {
                let _this = this;
                _this.showDailyVolumeLine = !_this.showDailyVolumeLine;
                let LineChart = echarts.init(document.getElementById('daily-line-chart'));
                LineChart.setOption(_this.dailyLineOptions);
            },
            dailyLineTable: function () {
                this.showDailyVolumeLine = false;
            },
            expandData: function () {
                console.log('展开');
            },

        },
        mounted() {


        }

    }
</script>
