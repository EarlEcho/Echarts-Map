<style lang="less">
    .transaction-data-table {

        .border-box {
            width: 322px;
            height: 402px;
            margin-bottom: 13px;
            position: static;
            #border1 {
                width: 322px;
                height: 350px;
                top: 24px;
                left: -2px;
            }
            #border2 {
                width: 274px;
                height: 402px;
                top: -26px;
                left: 24px;
            }
            .border-inner-content {
                width: 322px;
                height: 402px;
                top: 0px;
                left: -24px;
            }
            .data-content {
                height: 312px;
            }
        }
        .transaction-item {
            font-size: 15px;
            font-weight: bolder;
            span {
                color: #cccccc;
                padding: 0 8px;
            }
            .el-col-8 {
                text-align: right;
            }
        }
        .dark-item {
            height: 29px;
            line-height: 29px;
            padding: 0 15px;
        }
        .light-item {
            height: 50px;
            line-height: 35px;
            padding: 0 15px 0 15px;
            &:after {
            }
        }
    }

    .transaction-pie {
        .border-box {
            width: 453px;
            height: 432px;
            margin-bottom: 13px;
            background-color: #1C2B44;
            border: solid 2px #96E6EC;
            position: static;
            #border1 {
                width: 453px;
                height: 381px;
                position: relative;
                background-color: #1C2B44;
                top: 24px;
                left: -2px;
            }
            #border2 {
                width: 406px;
                height: 432px;
                background-color: #1C2B44;
                position: relative;
                top: -26px;
                left: 24px;
            }
            .border-inner-content {
                width: 453px;
                height: 432px;
                position: relative;
                top: 0px;
                left: -24px;
            }
        }

    }

</style>
<template>
    <div class="mian-box">
        <!--左下方的数据图-->
        <el-collapse-transition>
            <div class="transaction-data-table" v-show="!showTransacPie">
                <border-box>
                    <div class="data-header-box">
                        <span class="title">交易数据分析</span>
                        <div class="tool-btn-group g-rt right">
                            <el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
                                <el-button icon="icon iconfont icon-wenhao"></el-button>
                            </el-tooltip>
                        </div>
                    </div>
                    <div class="data-content">
                        <div class="transaction-item">
                            <el-row class="dark-item">
                                <el-col :span="8">
                                    单日交易量：
                                </el-col>
                                <el-col :span="9" :offset="3" class="right">
                                    <span>2124645</span>
                                </el-col>
                                <el-col :span="4">
                                    吨
                                </el-col>
                            </el-row>
                            <el-row class="light-item">
                                <el-col :span="8">
                                    计：
                                </el-col>
                                <el-col :span="9" :offset="3" class="right">
                                    <span>1578425</span>
                                </el-col>
                                <el-col :span="4">
                                    万元
                                    <br>
                                </el-col>
                            </el-row>
                            <el-row class="dark-item">
                                <el-col :span="8">
                                    本周交易量：
                                </el-col>
                                <el-col :span="9" :offset="3" class="right">
                                    <span>2124645</span>
                                </el-col>
                                <el-col :span="4">
                                    吨
                                </el-col>
                            </el-row>
                            <el-row class="light-item">
                                <el-col :span="8">
                                    计：
                                </el-col>
                                <el-col :span="9" :offset="3" class="right">
                                    <span>1578425</span>
                                </el-col>
                                <el-col :span="4">
                                    万元
                                </el-col>
                            </el-row>
                            <el-row class="dark-item">
                                <el-col :span="8">
                                    本月交易量：
                                </el-col>
                                <el-col :span="9" :offset="3" class="right">
                                    <span>2124645</span>
                                </el-col>
                                <el-col :span="4">
                                    吨
                                </el-col>
                            </el-row>
                            <el-row class="light-item">
                                <el-col :span="8">
                                    计：
                                </el-col>
                                <el-col :span="9" :offset="3" class="right">
                                    <span>1578425</span>
                                </el-col>
                                <el-col :span="4">
                                    万元
                                </el-col>
                            </el-row>
                            <el-row class="dark-item">
                                <el-col :span="8">
                                    累计交易量：
                                </el-col>
                                <el-col :span="9" :offset="3" class="right">
                                    <span>2124645</span>
                                </el-col>
                                <el-col :span="4">
                                    吨
                                </el-col>
                            </el-row>
                            <el-row class="light-item">
                                <el-col :span="8">
                                    计：
                                </el-col>
                                <el-col :span="9" :offset="3" class="right">
                                    <span>1578425</span>
                                </el-col>
                                <el-col :span="4">
                                    万元
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                    <div class="data-footer-box clearfix">
                        <div class="action-group g-rt right">
                            <el-button icon="icon iconfont icon-menu1 darkbule"
                                       @click="showTransacPie = !showTransacPie"></el-button>
                            <el-button icon="icon iconfont icon-pie " @click="transacPieChart"></el-button>
                        </div>
                    </div>
                </border-box>
            </div>

        </el-collapse-transition>


        <!--左下方的饼图-->
        <transition name="el-zoom-in-center">
            <div class="transaction-pie" v-show="showTransacPie">
                <border-box>
                    <div class="data-header-box">
                        <span class="title">交易数据分析</span>
                        <div class="tool-btn-group g-rt right">
                            <el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
                                <el-button icon="icon iconfont icon-wenhao"></el-button>
                            </el-tooltip>
                        </div>
                    </div>
                    <div class="checkbox-wrapper clearfix">
                        <el-radio-group v-model="radioValue1">
                            <el-radio :label="3">金额</el-radio>
                            <el-radio :label="6">量</el-radio>
                        </el-radio-group>
                        <el-radio-group v-model="radioValue2" class="g-rt">
                            <el-radio :label="3">今日</el-radio>
                            <el-radio :label="6">本周</el-radio>
                            <el-radio :label="9">本月</el-radio>
                        </el-radio-group>
                    </div>
                    <div id="transaction-pie-chart" style="width: 450px;height: 300px;"></div>
                    <div class="data-footer-box clearfix">
                        <div class="action-group g-rt right">
                            <el-button icon="icon iconfont icon-menu1"
                                       @click="showTransacPie = !showTransacPie"></el-button>
                            <el-button icon="icon iconfont icon-pie darkbule" @click="transacPieChart"></el-button>
                        </div>
                    </div>
                </border-box>
            </div>

        </transition>


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

    export default {
        name: 'LeftBottomTable',
        components: {BorderBox},
        props: [],
        data() {
            return {
                radioValue1: '',
                radioValue2: '',
                showRealPie: true,
                tabActive: 'first',
                logoHeaderActive: '1',
                showTransacPie: false,
                showDailyVolumeLine: false,
                showDailyPriceLine: false,

                transacPieOptions: {
                    backgroundColor: '#1C2B44',
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    color: ['#02ACB2', '#FFFF00', '#FFA011', '#A6141B', '#00FF01'],
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
                                {value: 351, name: '重庆公司', selected: true},
                                {value: 150, name: '北京公司'},
                                {value: 94, name: '上海公司'},
                                {value: 55, name: '杭州公司'},
                                {value: 105, name: '西安公司'}
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
                                {value: 351, name: '重庆公司', selected: true},
                                {value: 150, name: '北京公司'},
                                {value: 94, name: '上海公司'},
                                {value: 55, name: '杭州公司'},
                                {value: 105, name: '西安公司'}
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
            transacPieChart: function () {
                let _this = this;
                _this.showTransacPie = !_this.showTransacPie;
                let pieChart = echarts.init(document.getElementById('transaction-pie-chart'));
                pieChart.setOption(_this.transacPieOptions);
            },
            transactionTableData: function () {
                this.showTransacPie = false;
            },
            expandData: function () {
                console.log('展开');
            }
        },
        mounted() {


        }
    }
</script>
