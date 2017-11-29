<style lang="less">
    .left-top-table {
        display: flex;
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
            border-bottom: 4px solid #172f4b;
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
        /*.real-time-table {
            width: 100%;
            height: 435px;
            margin-bottom: 20px;
            !*background: url(../assets/boxBk.png) no-repeat;*!
            background-size: 100%;
            .data-content {
                height: 340px;
            }
        }*/
        .border-box {
            width: 453px;
            height: 435px;
            margin-bottom: 20px;
            background-color: #1C2B44;
            border: solid 2px #96E6EC;
            margin-bottom: 23px;
            position: static;
            #border1 {
                width: 453px;
                height: 387px;
                background-color: #1C2B44;
                position: relative;
                top: 22px;
                left: -2px;
            }
            #border2 {
                width: 405px;
                height: 435px;
                background-color: #1C2B44;
                position: relative;
                top: -24px;
                left: 25px;
            }
            .border-inner-content {
                width: 453px;
                height: 435px;
                position: relative;
                top: 2px;
                left: -25px;
            }
            .data-content{
                height: 340px;
            }
        }
    }

</style>
<template>
    <div class="left-top-table" v-cloak>
        <!--实时交易数据的表格-->
        <el-collapse-transition>
           <!-- <border-box>

            </border-box>-->

            <border-box v-show="showRealPie">
                <div class="data-header-box">
                    <span class="title">实时交易数据</span>
                    <div class="action-group g-rt right">
                        <el-button icon="icon iconfont icon-fangda" @click="showDialogType1=true"></el-button>
                        <el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
                            <el-button icon="icon iconfont icon-wenhao"></el-button>
                        </el-tooltip>
                    </div>
                </div>
                <div class="data-content">
                    <el-table :data="realTimeData" size="small" fit>
                        <el-table-column prop="date" label="时间" width="40px"></el-table-column>
                        <el-table-column prop="area" label="地区" width="50px"></el-table-column>
                        <el-table-column prop="company" label="公司" width="79px"></el-table-column>
                        <el-table-column prop="type" label="品种" width="75px"></el-table-column>
                        <el-table-column prop="standard" label="规格" width="55px"></el-table-column>
                        <el-table-column prop="num" label="数量" width="50px"></el-table-column>
                        <el-table-column prop="price" label="单价" width="51px"></el-table-column>
                        <el-table-column prop="allCount" label="总价" width="53px"></el-table-column>
                    </el-table>
                </div>
                <div class="data-footer-box clearfix">
                    <div class="action-group g-lf left">
                        <el-button icon="icon iconfont icon-menu-copy darkbule" @click="expandData"
                                   class="menu-copy-btn"></el-button>
                        <el-button icon="icon iconfont icon-jiugongge"></el-button>
                    </div>
                    <div class="action-group center">
                        <el-button icon="icon iconfont icon-arrow-down-circle-left"
                                   @click="expandData"></el-button>
                        <el-button icon="icon iconfont icon-arrow-down-circle-right"></el-button>
                    </div>
                    <div class="action-group g-rt right">
                        <el-button icon="icon iconfont icon-menu1 darkbule" @click="showRealPie = !showRealPie"></el-button>
                        <el-button icon="icon iconfont icon-pie" @click="realPieChart"></el-button>
                    </div>
                </div>
            </border-box>
        </el-collapse-transition>


        <!--实时交易数据的图表-->
        <transition name="el-zoom-in-center">
            <div class="real-time-table" v-show="!showRealPie">
                <div class="data-header-box">
                    <span class="title">实时交易数据</span>
                    <div class="action-group g-rt right">
                        <el-button icon="icon iconfont icon-fangda" @click="showDialogType1=true"></el-button>
                        <el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
                            <el-button icon="icon iconfont icon-wenhao"></el-button>
                        </el-tooltip>
                    </div>
                </div>
                <div class="data-content">
                    <div class="checkbox-wrapper clearfix">
                        <el-radio-group v-model="radioValue1">
                            <el-radio :label="3">公司</el-radio>
                            <el-radio :label="6">品种</el-radio>
                            <el-radio :label="9">终端</el-radio>
                        </el-radio-group>
                        <el-radio-group v-model="radioValue2" class="g-rt">
                            <el-radio :label="3">1月</el-radio>
                            <el-radio :label="6">3月</el-radio>
                            <el-radio :label="9">6月</el-radio>
                        </el-radio-group>
                    </div>
                    <div id="real-pie-chart" style="width: 453px;height: 300px;">
                        <!--点击模块的饼图后的图表-->
                    </div>
                </div>
                <div class="data-footer-box clearfix">
                    <div class="action-group g-lf left">
                        <el-button icon="icon iconfont icon-menu-copy" @click="expandData"
                                   class="menu-copy-btn"></el-button>
                        <el-button icon="icon iconfont icon-jiugongge"></el-button>
                    </div>
                    <div class="action-group center">
                        <el-button icon="icon iconfont icon-arrow-down-circle-left"
                                   @click="expandData"></el-button>
                        <el-button icon="icon iconfont icon-arrow-down-circle-right"></el-button>
                    </div>
                    <div class="action-group g-rt right">
                        <el-button icon="icon iconfont icon-menu1" @click="showRealPie = !showRealPie"></el-button>
                        <el-button icon="icon iconfont icon-pie darkbule" @click="realPieChart"></el-button>
                    </div>
                </div>
            </div>
        </transition>


        <!--弹出框-->
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
                                <div class="popup-bottom-wrapper tool-btn-group left">
                                    <el-button icon="icon iconfont icon-menu-copy" @click="expandData"
                                               class="menu-copy-btn"></el-button>
                                    <el-button icon="icon iconfont icon-jiugongge"></el-button>
                                </div>
                                <div class="popup-bottom-wrapper tool-btn-group center">
                                    <el-button icon="icon iconfont icon-arrow-down-circle-left"
                                               @click="expandData"></el-button>
                                    <el-button icon="icon iconfont icon-arrow-down-circle-right"></el-button>
                                </div>
                                <div class="popup-bottom-wrapper  tool-btn-group right">
                                    <el-button icon="icon iconfont icon-menu1" @click="expandData"></el-button>
                                    <el-button icon="icon iconfont icon-pie"></el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-dialog>
            </div>

        </div>


    </div>

</template>

<script>
    import ggdp from '@/functions/common'
    import BorderBox from '@/components/BoderCompontents'

    // 按需引入 ECharts 主模块
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/pie');
    // 引入提示框和标题组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');
    let myChart;
    export default {
        name: 'leftTopTable',
        components: {BorderBox},
        props: [],
        data() {
            return {

                radioValue1: '',
                radioValue2: '',
                showDialogType1: false,
                popupSearchData: {
                    timer1: '',
                    timer2: '',
                    city: '',
                    company: '',
                    user: '',
                    variety: '',
                    standard: ''
                },
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
                showRealPie: true,
                realTimeData: [
                    {
                        date: '11.30',
                        area: '成都',
                        company: '某某公司',
                        type: '一类',
                        standard: '1#',
                        num: '12',
                        price: '354',
                        allCount: '13213'

                    }, {
                        date: '11.30',
                        area: '成都',
                        company: '某某公司',
                        type: '一类',
                        standard: '1#',
                        num: '12',
                        price: '354',
                        allCount: '13213'

                    }, {
                        date: '11.30',
                        area: '成都',
                        company: '某某公司',
                        type: '一类',
                        standard: '1#',
                        num: '12',
                        price: '354',
                        allCount: '13213'
                    }, {
                        date: '11.30',
                        area: '成都',
                        company: '某某公司',
                        type: '一类',
                        standard: '1#',
                        num: '12',
                        price: '354',
                        allCount: '13213'

                    }, {
                        date: '11.30',
                        area: '成都',
                        company: '某某公司',
                        type: '一类',
                        standard: '1#',
                        num: '15870',
                        price: '354',
                        allCount: '1320001'

                    }, {
                        date: '11.30',
                        area: '成都',
                        company: '某某公司',
                        type: '一类',
                        standard: '1#',
                        num: '12',
                        price: '354',
                        allCount: '13213'

                    }, {
                        date: '11.30',
                        area: '成都',
                        company: '某某公司',
                        type: '一类',
                        standard: '1#',
                        num: '12',
                        price: '354',
                        allCount: '13213'

                    }, {
                        date: '11.30',
                        area: '成都',
                        company: '某某公司',
                        type: '一类',
                        standard: '1#',
                        num: '12',
                        price: '354',
                        allCount: '13213'
                    }, {
                        date: '11.30',
                        area: '成都',
                        company: '某某公司',
                        type: '一类',
                        standard: '1#',
                        num: '12',
                        price: '354',
                        allCount: '13213'
                    }
                ],
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
                realPieOptions: {
                    backgroundColor: '#1C2B44',
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    color: ['#74c31f', '#d35833', '#00ccff', '#ffcc00', '#ffdc90'],
                    legend: {
                        itemWidth: 20,
                        itemHeight: 10,
                        orient: 'vertical',
                        padding: [7, 10],
                        top: '15px',
                        left: '5px',
                        x: 'left',
                        data: ['重庆公司', '北京公司', '上海公司', '杭州公司', '西安公司'],
                        textStyle: {
                            color: '#fff',
                            fontSize: 11
                        },
                        backgroundColor: '#274f7d',
                        borderColor: '#53657a',
                        borderWidth: 1,
                        borderRadius: 4,
                        shadowColor: '#29547d',
                        shadowBlur: 10,
                        shadowOffsetX: 5,
                        shadowOffsetY: 5
                    },
                    series: [
                        {
                            type: 'pie',
                            radius: '55%',
                            center: ['61%', '55%'],
                            selectedMode: 'single',
                            data: [
                                {value: 305, name: '重庆公司', selected: true},
                                {value: 250, name: '北京公司'},
                                {value: 194, name: '上海公司'},
                                {value: 135, name: '杭州公司'},
                                {value: 145, name: '西安公司'}
                            ],
                            label: {
                                normal: {
                                    backgroundColor: '#5c6c80',
                                    borderColor: '#495c72',
                                    borderWidth: 1,
                                    borderRadius: 4,
                                    color: 'white',
                                    padding: [5, 7],
                                    fontSize: 11,
                                    lineHeight: 33,
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: 'white'
                                    }
                                }
                            }
                        },
                        {
                            type: 'pie',
                            radius: '55%',
                            center: ['61%', '55%'],
                            selectedMode: 'single',
                            data: [
                                {value: 305, name: '重庆公司', selected: true},
                                {value: 250, name: '北京公司'},
                                {value: 194, name: '上海公司'},
                                {value: 135, name: '杭州公司'},
                                {value: 145, name: '西安公司'}
                            ],
                            label: {
                                normal: {
                                    formatter: '{d}%\n{c}吨',
                                    position: 'inner',
                                    color: 'white',
                                    fontSize: 11,
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: 'white'
                                    }
                                }
                            }
                        },
                    ]
                }


            }
        },
        methods: {
            showPopupTable: function () {
                let _this = this;

                _this.showDialogType2 = true;
                let map = setInterval(function () {
                    _this.drawLine();
                    clearInterval(map);
                }, 1000)

            },
            expandData: function () {

            },
            realPieChart: function () {
                let _this = this;
                _this.showRealPie = !_this.showRealPie;
                let pieChart = echarts.init(document.getElementById('real-pie-chart'));
                pieChart.setOption(_this.realPieOptions);
            },
            realTableData: function () {
                this.showRealPie = true;
            }
        },
        mounted() {


        },
    }
</script>
