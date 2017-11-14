<style scoped lang="less">
    .mian-box {
        div {
            box-sizing: border-box;
        }
        .content-wrapper {
            width: 100%;
            min-height: 100%;
            padding: 0 35px;
        }
        .sys-header-box {
            width: 100%;
            height: 164px;
            border: solid 1px red;
        }
        .data-content-box {
            width: 100%;
            height: 916px;
        }
        .left-data-wrapper {
            width: 453px;

            height: 100%;
            border: solid 1px white;
        }

        .real-time-table {
            width: 100%;
            height: 435px;
            margin-bottom: 35px;
            .data-content {
                height: 340px;
            }
        }
        .transaction-data-table {
            width: 320px;
            height: 402px;
            border: solid 1px white;
            margin-bottom: 35px;
            .data-content {
                height: 312px;
            }
            .transaction-item {
                font-size: 14px;
                font-weight: bold;
                span {
                    color: #cccccc;
                    padding: 0 8px;
                }
                .el-row {
                    padding: 0 15px;
                }
                .el-col-8 {
                    text-align: right;
                }
            }
            .dark-item {
                background-color: #1d3c5b;
                height: 29px;
                line-height: 29px;
                color: #196ca5;
            }
            .light-item {
                background-color: #172f4b;
                height: 50px;
                line-height: 50px;
                color: #196ca5;
            }
        }
        .right-data-wrapper {
            width: 522px;
            height: 100%;
        }
        .daily-volume-table {
            width: 100%;
            height: 500px;
            margin-bottom: 13px;
            .data-content {
                height: 405px;
            }
        }
        .daily-price-table {
            width: 100%;
            height: 362px;
            .data-content {
                height: 272px;
            }
            .el-col-12 {
                border-right: solid 1px #11213A;
                border-left: solid 1px #11213A;
            }
        }
    }
</style>
<template>
    <div class="mian-box">
        <div id="main">

        </div>
        <div class="content-wrapper">
            <div class="sys-header-box">

            </div>
            <div class="data-content-box">

                <!--左侧数据-->
                <div class="left-data-wrapper g-lf">
                    <div class="real-time-table">
                        <div class="data-header-box">
                            <span class="title">title</span>
                            <div class="action-group g-rt">
                                <el-button icon="icon iconfont icon-fangda" @click="expandData"></el-button>
                                <el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
                                    <el-button icon="icon iconfont icon-wenhao1"></el-button>
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
                        <div class="data-footer-box">
                            <div class="action-group g-lf">
                                <el-button icon="icon iconfont icon-caidan" @click="expandData"></el-button>
                                <el-button icon="icon iconfont icon-jiugongge-copy"></el-button>
                            </div>
                            <div class="action-group box-center">
                                <el-button icon="icon iconfont icon-arrow-down-circle-left"
                                           @click="expandData"></el-button>
                                <el-button icon="icon iconfont icon-arrow-down-circle-right"></el-button>
                            </div>
                            <div class="action-group g-rt">
                                <el-button icon="icon iconfont icon-msnui-menu" @click="expandData"></el-button>
                                <el-button icon="icon iconfont icon-pie"></el-button>
                            </div>
                        </div>
                    </div>
                    <div class="transaction-data-table">
                        <div class="data-header-box">
                            <span class="title">title</span>
                            <div class="action-group g-rt">
                                <el-button icon="icon iconfont icon-fangda" @click="expandData"></el-button>
                                <el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
                                    <el-button icon="icon iconfont icon-wenhao1"></el-button>
                                </el-tooltip>
                            </div>
                        </div>
                        <div class="data-content">
                            <div class="transaction-item">
                                <el-row class="dark-item">
                                    <el-col :span="8">
                                        单日交易量：
                                    </el-col>
                                    <el-col :span="16">
                                        <span>2124645</span>吨
                                    </el-col>
                                </el-row>
                                <el-row class="light-item">
                                    <el-col :span="8">
                                        计：
                                    </el-col>
                                    <el-col :span="16">
                                        <span>1578425</span>万元
                                    </el-col>
                                </el-row>
                            </div>

                        </div>
                        <div class="data-footer-box">
                            <div class="action-group  g-rt">
                                <el-button icon="icon iconfont icon-msnui-menu" @click="expandData"></el-button>
                                <el-button icon="icon iconfont icon-pie"></el-button>
                            </div>
                        </div>
                    </div>
                </div>

                <!--右侧数据-->
                <div class="right-data-wrapper g-rt">
                    <div class="daily-volume-table">
                        <div class="data-header-box">
                            <span class="title">title</span>
                            <div class="action-group g-rt">
                                <el-button icon="icon iconfont icon-fangda" @click="expandData"></el-button>
                                <el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
                                    <el-button icon="icon iconfont icon-wenhao1"></el-button>
                                </el-tooltip>
                            </div>
                        </div>
                        <div class="data-content">
                            <el-tabs v-model="tabActive" type="card">  <!--34-->
                                <el-tab-pane label="螺纹钢" name="first">
                                    <el-table :data="dailyVolumeTable" size="small" fit>
                                        <el-table-column prop="province" label="省份" width="50px"></el-table-column>
                                        <el-table-column prop="city" label="城市" width="52px"></el-table-column>
                                        <el-table-column prop="name" label="品名" width="80px"></el-table-column>
                                        <el-table-column prop="standard" label="规格" width="55px"></el-table-column>
                                        <el-table-column prop="texture" label="材质" width="60px"></el-table-column>
                                        <el-table-column prop="mill" label="钢厂" width="60px"></el-table-column>
                                        <el-table-column prop="date" label="日期" width="50px"></el-table-column>
                                        <el-table-column prop="turnover" label="成交量" width="55px"></el-table-column>
                                        <el-table-column prop="upDowns" label="涨跌" width="60px"></el-table-column>
                                    </el-table>
                                </el-tab-pane>
                                <el-tab-pane label="高线" name="second">配置管理</el-tab-pane>
                                <el-tab-pane label="盘螺" name="third">角色管理</el-tab-pane>
                                <el-tab-pane label="热轧板卷" name="fourth">定时任务补偿</el-tab-pane>
                            </el-tabs>

                        </div>
                        <div class="data-footer-box">
                            <div class="action-group g-lf">
                                <el-button icon="icon iconfont icon-caidan" @click="expandData"></el-button>
                                <el-button icon="icon iconfont icon-jiugongge-copy"></el-button>
                            </div>
                            <div class="action-group box-center">
                                <el-button icon="icon iconfont icon-arrow-down-circle-left"
                                           @click="expandData"></el-button>
                                <el-button icon="icon iconfont icon-arrow-down-circle-right"></el-button>
                            </div>
                            <div class="action-group g-rt">
                                <el-button icon="icon iconfont icon-msnui-menu" @click="expandData"></el-button>
                                <el-button icon="icon iconfont icon-pie"></el-button>
                            </div>
                        </div>
                    </div>
                    <div class="daily-price-table">
                        <div class="data-header-box">
                            <span class="title">title</span>
                            <div class="action-group g-rt">
                                <el-button icon="icon iconfont icon-fangda" @click="expandData"></el-button>
                                <el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
                                    <el-button icon="icon iconfont icon-wenhao1"></el-button>
                                </el-tooltip>
                            </div>
                        </div>
                        <div class="data-content">
                            <el-row>
                                <el-col :span="12">
                                    <el-table :data="dailyVolumeTable" size="small" fit>
                                        <el-table-column prop="province" label="省份" width="45px"></el-table-column>
                                        <el-table-column prop="city" label="城市" width="45px"></el-table-column>
                                        <el-table-column prop="name" label="品名" width="69px"></el-table-column>
                                        <el-table-column prop="turnover" label="指数" width="50px"></el-table-column>
                                        <el-table-column prop="upDowns" label="涨跌" width="50px"></el-table-column>
                                    </el-table>
                                </el-col>
                                <el-col :span="12">
                                    <el-table :data="dailyVolumeTable" size="small" fit>
                                        <el-table-column prop="province" label="省份" width="45px"></el-table-column>
                                        <el-table-column prop="city" label="城市" width="45px"></el-table-column>
                                        <el-table-column prop="name" label="品名" width="69px"></el-table-column>
                                        <el-table-column prop="turnover" label="指数" width="50px"></el-table-column>
                                        <el-table-column prop="upDowns" label="涨跌" width="50px"></el-table-column>
                                    </el-table>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="data-footer-box">
                            <div class="action-group g-lf">
                                <el-button icon="icon iconfont icon-caidan" @click="expandData"></el-button>
                                <el-button icon="icon iconfont icon-jiugongge-copy"></el-button>
                            </div>
                            <div class="action-group box-center">
                                <el-button icon="icon iconfont icon-arrow-down-circle-left"
                                           @click="expandData"></el-button>
                                <el-button icon="icon iconfont icon-arrow-down-circle-right"></el-button>
                            </div>
                            <div class="action-group g-rt">
                                <el-button icon="icon iconfont icon-msnui-menu" @click="expandData"></el-button>
                                <el-button icon="icon iconfont icon-pie"></el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            return {
                tabActive: 'first',
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
                    }
                ],
                dailyVolumeTable: [{
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
                }]
            }
        },
        methods: {
            expandData: function () {
                console.log('展开');
            },
        },
        mounted() {


        }
    }
</script>
