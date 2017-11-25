<style lang="less">
    .transaction-data-table {
        width: 322px;
        height: 402px;
        background: url(../assets/smallBox.png) no-repeat;
        background-size: 100%;
        .data-content {
            height: 312px;
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
        width: 100%;
        height: 432px;
        background: url(../assets/boxBk.png) no-repeat;
        background-size: 100%;
    }

</style>
<template>
    <div class="mian-box">
        <!--左下方的数据图-->
        <div class="transaction-data-table" v-show="!showTransacPie">
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
                    <el-button icon="icon iconfont icon-menu1" @click="transactionTableData"></el-button>
                    <el-button icon="icon iconfont icon-pie" @click="transacPieChart"></el-button>
                </div>
            </div>
        </div>
        <!--左下方的饼图-->
        <div class="transaction-pie" v-show="showTransacPie">
            <div class="data-header-box">
                <span class="title">交易数据分析</span>
                <div class="tool-btn-group g-rt right">
                    <el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
                        <el-button icon="icon iconfont icon-wenhao"></el-button>
                    </el-tooltip>
                </div>
            </div>
            <div id="transaction-pie-chart" style="width: 450px;height: 300px;"></div>
            <div class="data-footer-box clearfix">
                <div class="action-group g-rt right">
                    <el-button icon="icon iconfont icon-menu1" @click="transactionTableData"></el-button>
                    <el-button icon="icon iconfont icon-pie" @click="transacPieChart"></el-button>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    import ggdp from '@/functions/common'
    // 按需引入 ECharts 主模块
    let echarts = require('echarts/lib/echarts');

    require('echarts/lib/chart/pie');
    // 引入提示框和标题组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');

    export default {
        name: 'LeftBottomTable',
        components: {},
        props: [],
        data() {
            return {
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
                            center: ['60%', '55%'],
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
                            center: ['60%', '55%'],
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
                _this.showTransacPie = true;
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
