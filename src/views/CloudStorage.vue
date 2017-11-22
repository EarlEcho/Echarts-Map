<style lang="less">
    .mian-box {
        width: 100%;
        div {
            box-sizing: border-box;
        }
        #main {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1080px;
            z-index: 0;
            box-sizing: border-box;
        }
        /* .content-wrapper {
             min-height: 100%;
             padding: 0 35px;
             position: relative;
             z-index: 10;
             overflow: hidden;
         }*/
        .sys-header-box {
            position: absolute;
            z-index: 10;
            width: 100%;
            height: 164px;
            background: url(../assets/logo.png) no-repeat;
            background-size: 100%;
        }
        .data-content-box {
            width: 100%;
            height: 916px;
        }
        .left-data-wrapper {
            position: absolute;
            left: 35px;
            top: 164px;
            width: 453px;
            height: 880px;
        }
        .right-data-wrapper {
            position: absolute;
            top: 164px;
            right: 35px;
            width: 820px;
        }
        .real-time-table {
            width: 100%;
            height: 435px;
            margin-bottom: 35px;
            background: url(../assets/boxBk.png) no-repeat;
            background-size: 100%;
            .data-content {
                height: 340px;
            }
        }
        .transaction-data-table {
            width: 322px;
            height: 402px;
            margin-bottom: 35px;
            background: url(../assets/smallBox.png) no-repeat;
            background-size: 100%;
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
                height: 29px;
                line-height: 29px;
            }
            .light-item {
                height: 50px;
                line-height: 50px;
            }
        }
        .transaction-pie {
            width: 100%;
            height: 402px;
            margin-bottom: 35px;
            background: url(../assets/boxBk.png) no-repeat;
            background-size: 100%;
        }

        .daily-volume-table {
            width: 522px;
            height: 500px;
            margin-bottom: 13px;
            background: url(../assets/rt1.png) no-repeat;
            background-size: 100%;
            float: right;
            .data-content {
                height: 405px;
            }
            .data-content .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
                width: 132px;
            }
            .data-content .el-tabs__item {
                width: 130px;
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
        .real-pie-chart {
            width: 450px;
            height: 300px;
        }

        .right-line-charts-wrapper {
            width: 820px;
            height: 500px;
            background-color: #1b3a57;
            margin-bottom: 10px;
            float: right;
        }
        .right-line-charts-wrapper2 {
            width: 820px;
            height: 370px;
            background-color: #1b3a57;
            float: right;
        }

    }
</style>
<template>
    <div class="mian-box">
        <div id="main">

        </div>
        <!--页面头部的logo 导航-->
        <sys-header-box></sys-header-box>
        <!--左侧数据-->
        <div class="left-data-wrapper g-lf">

            <!--实时交易数据的表格-->
            <div class="real-time-table" v-show="showRealPie">
                <data-header-box item-title="实时交易数据" :expand-popup="true"></data-header-box>
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
                <data-footer-box :left-item="true" :center-item="true" :pie-charts="realPieChart"
                                 :table-datas="realTableData"></data-footer-box>
            </div>
            <!--实时交易数据的图表-->
            <div class="real-time-table" v-show="!showRealPie">
                <data-header-box item-title="实时交易数据" :expand-popup="true"></data-header-box>
                <div class="data-content">
                    <div id="real-pie-chart" style="width: 453px;height: 340px;">
                        <!--点击模块的饼图后的图表-->
                    </div>
                </div>
                <data-footer-box :left-item="true" :center-item="false" :pie-charts="realPieChart"
                                 :table-datas="realTableData"></data-footer-box>
            </div>


            <!--左下方的数据图-->
            <div class="transaction-data-table" v-show="!showTransacPie">
                <data-header-box item-title="交易数据分析" :expand-popup="false"></data-header-box>
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
                <data-footer-box :left-item="false" :center-item="false" :pie-charts="transacPieChart"
                                 :table-datas="transactionTableData"></data-footer-box>
            </div>
            <!--左下方的饼图-->
            <div class="transaction-pie" v-show="showTransacPie">
                <data-header-box item-title="交易数据分析" :expand-popup="false"></data-header-box>
                <div id="transaction-pie-chart" style="width: 450px;height: 300px;"></div>
                <data-footer-box :left-item="false" :center-item="false"
                                 :pie-charts="transacPieChart" :table-datas="transactionTableData"></data-footer-box>
            </div>

        </div>

        <!--右侧数据-->
        <div class="right-data-wrapper clearfix">
            <div class="daily-volume-table" v-show="!showDailyVolumeLine">
                <data-header-box item-title="今日成交价" :expand-popup="true"></data-header-box>
                <div class="data-content">
                    <el-tabs v-model="tabActive" type="card">
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
                <right-bottom-tool :line-charts="dailyLineChart" :pages="true"
                                   :table-datas="dailyLineTable"></right-bottom-tool>
            </div>
            <div class="right-line-charts-wrapper" v-show="showDailyVolumeLine">
                <data-header-box item-title="今日成交价" :expand-popup="true"></data-header-box>
                <div id="daily-line-chart" style="width: 820px;height: 410px;"></div>
                <right-bottom-tool :line-charts="dailyLineChart" :pages="false"
                                   :table-datas="dailyLineTable"></right-bottom-tool>
            </div>


            <!--右下角的数据-->
            <div class="daily-price-table" v-show="!showDailyPriceLine">
                <data-header-box item-title="今日价格指数" :expand-popup="true"></data-header-box>
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
                <right-bottom-tool :line-charts="dailyPriceChart" :pages="true"
                                   :table-datas="dailyPriceTable"></right-bottom-tool>
            </div>
            <div class="right-line-charts-wrapper2" v-show="showDailyPriceLine">
                <data-header-box item-title="今日价格指数" :expand-popup="true"></data-header-box>
                <div id="daily-price-chart" style="width: 820px;height: 280px;">

                </div>
                <right-bottom-tool :line-charts="dailyPriceChart" :pages="false"
                                   :table-datas="dailyPriceTable"></right-bottom-tool>
            </div>
        </div>


    </div>

</template>

<script>
    import ggdp from '@/functions/common'
    // 按需引入 ECharts 主模块
    let echarts = require('echarts/lib/echarts');
    import china from 'echarts/map/js/china.js';

    require('echarts/lib/chart/map');
    require('echarts/lib/chart/lines');
    require('echarts/lib/chart/gauge');
    require('echarts/lib/chart/pie');
    require('echarts/lib/component/geo');
    // 引入提示框和标题组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');
    import DataHeaderBox from '@/components/ToolTop'
    import DataFooterBox from '@/components/ToolBottom'
    import SysHeaderBox from '@/components/SysHeader'
    import RightBottomTool from '@/components/RightBottomTool'

    export default {
        name: 'CloudStorage',
        components: {DataHeaderBox, DataFooterBox, SysHeaderBox, RightBottomTool},
        props: [],
        data() {
            return {
                showRealPie: true,
                tabActive: 'first',
                logoHeaderActive: '1',
                showTransacPie: false,
                showDailyVolumeLine: false,
                showDailyPriceLine: false,
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
                }],
                geoCoordMap: {
                    '上海': [121.4648, 31.2891],
                    '东莞': [113.8953, 22.901],
                    '东营': [118.7073, 37.5513],
                    '中山': [113.4229, 22.478],
                    '临汾': [111.4783, 36.1615],
                    '临沂': [118.3118, 35.2936],
                    '丹东': [124.541, 40.4242],
                    '丽水': [119.5642, 28.1854],
                    '乌鲁木齐': [87.9236, 43.5883],
                    '佛山': [112.8955, 23.1097],
                    '保定': [115.0488, 39.0948],
                    '兰州': [103.5901, 36.3043],
                    '包头': [110.3467, 41.4899],
                    '北京': [116.4551, 40.2539],
                    '北海': [109.314, 21.6211],
                    '南京': [118.8062, 31.9208],
                    '南宁': [108.479, 23.1152],
                    '南昌': [116.0046, 28.6633],
                    '南通': [121.1023, 32.1625],
                    '厦门': [118.1689, 24.6478],
                    '台州': [121.1353, 28.6688],
                    '合肥': [117.29, 32.0581],
                    '呼和浩特': [111.4124, 40.4901],
                    '咸阳': [108.4131, 34.8706],
                    '哈尔滨': [127.9688, 45.368],
                    '唐山': [118.4766, 39.6826],
                    '嘉兴': [120.9155, 30.6354],
                    '大同': [113.7854, 39.8035],
                    '大连': [122.2229, 39.4409],
                    '天津': [117.4219, 39.4189],
                    '太原': [112.3352, 37.9413],
                    '威海': [121.9482, 37.1393],
                    '宁波': [121.5967, 29.6466],
                    '宝鸡': [107.1826, 34.3433],
                    '宿迁': [118.5535, 33.7775],
                    '常州': [119.4543, 31.5582],
                    '广州': [113.5107, 23.2196],
                    '廊坊': [116.521, 39.0509],
                    '延安': [109.1052, 36.4252],
                    '张家口': [115.1477, 40.8527],
                    '徐州': [117.5208, 34.3268],
                    '德州': [116.6858, 37.2107],
                    '惠州': [114.6204, 23.1647],
                    '成都': [103.9526, 30.7617],
                    '扬州': [119.4653, 32.8162],
                    '承德': [117.5757, 41.4075],
                    '拉萨': [91.1865, 30.1465],
                    '无锡': [120.3442, 31.5527],
                    '日照': [119.2786, 35.5023],
                    '昆明': [102.9199, 25.4663],
                    '杭州': [119.5313, 29.8773],
                    '枣庄': [117.323, 34.8926],
                    '柳州': [109.3799, 24.9774],
                    '株洲': [113.5327, 27.0319],
                    '武汉': [114.3896, 30.6628],
                    '汕头': [117.1692, 23.3405],
                    '江门': [112.6318, 22.1484],
                    '沈阳': [123.1238, 42.1216],
                    '沧州': [116.8286, 38.2104],
                    '河源': [114.917, 23.9722],
                    '泉州': [118.3228, 25.1147],
                    '泰安': [117.0264, 36.0516],
                    '泰州': [120.0586, 32.5525],
                    '济南': [117.1582, 36.8701],
                    '济宁': [116.8286, 35.3375],
                    '海口': [110.3893, 19.8516],
                    '淄博': [118.0371, 36.6064],
                    '淮安': [118.927, 33.4039],
                    '深圳': [114.5435, 22.5439],
                    '清远': [112.9175, 24.3292],
                    '温州': [120.498, 27.8119],
                    '渭南': [109.7864, 35.0299],
                    '湖州': [119.8608, 30.7782],
                    '湘潭': [112.5439, 27.7075],
                    '滨州': [117.8174, 37.4963],
                    '潍坊': [119.0918, 36.524],
                    '烟台': [120.7397, 37.5128],
                    '玉溪': [101.9312, 23.8898],
                    '珠海': [113.7305, 22.1155],
                    '盐城': [120.2234, 33.5577],
                    '盘锦': [121.9482, 41.0449],
                    '石家庄': [114.4995, 38.1006],
                    '福州': [119.4543, 25.9222],
                    '秦皇岛': [119.2126, 40.0232],
                    '绍兴': [120.564, 29.7565],
                    '聊城': [115.9167, 36.4032],
                    '肇庆': [112.1265, 23.5822],
                    '舟山': [122.2559, 30.2234],
                    '苏州': [120.6519, 31.3989],
                    '莱芜': [117.6526, 36.2714],
                    '菏泽': [115.6201, 35.2057],
                    '营口': [122.4316, 40.4297],
                    '葫芦岛': [120.1575, 40.578],
                    '衡水': [115.8838, 37.7161],
                    '衢州': [118.6853, 28.8666],
                    '西宁': [101.4038, 36.8207],
                    '西安': [109.1162, 34.2004],
                    '贵阳': [106.6992, 26.7682],
                    '连云港': [119.1248, 34.552],
                    '邢台': [114.8071, 37.2821],
                    '邯郸': [114.4775, 36.535],
                    '郑州': [113.4668, 34.6234],
                    '鄂尔多斯': [108.9734, 39.2487],
                    '重庆': [107.7539, 30.1904],
                    '金华': [120.0037, 29.1028],
                    '铜川': [109.0393, 35.1947],
                    '银川': [106.3586, 38.1775],
                    '镇江': [119.4763, 31.9702],
                    '长春': [125.8154, 44.2584],
                    '长沙': [113.0823, 28.2568],
                    '长治': [112.8625, 36.4746],
                    '阳泉': [113.4778, 38.0951],
                    '青岛': [120.4651, 36.3373],
                    '韶关': [113.7964, 24.7028]
                },
                BJData: [
                    [{
                        name: '北京'
                    }, {
                        name: '上海',
                        value: 100
                    }],
                    [{
                        name: '北京'
                    }, {
                        name: '广州',
                        value: 70
                    }],
                    [{
                        name: '北京'
                    }, {
                        name: '葫芦岛',
                        value: 30
                    }],
                    [{
                        name: '北京'
                    }, {
                        name: '成都',
                        value: 30
                    }],
                    [{
                        name: '北京'
                    }, {
                        name: '哈尔滨',
                        value: 30
                    }],
                    [{
                        name: '北京'
                    }, {
                        name: '鄂尔多斯',
                        value: 30
                    }],
                    [{
                        name: '北京'
                    }, {
                        name: '银川',
                        value: 10
                    }],
                    [{
                        name: '北京'
                    }, {
                        name: '拉萨',
                        value: 80
                    }],
                    [{
                        name: '北京'
                    }, {
                        name: '西安',
                        value: 55
                    }],
                    [{
                        name: '北京'
                    }, {
                        name: '乌鲁木齐',
                        value: 90
                    }]
                ],
                planePath: 'arrow',
                series: [],
                fromdata: '北京',
                color: ['#02ACB2', '#FFFF00', '#FFA011', '#A6141B', '#00FF01'],
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
                            center: ['60%', '55%'],
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
                },
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
                },
                dailyLineOptions: {
                    backgroundColor: '#0E2A43',
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['螺纹钢', '高线', '盘螺', '热轧板卷'],
                        top: 'top',
                        textStyle: {
                            color: '#fff'
                        },
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
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
                }
            }
        },
        methods: {
            dailyPriceChart: function () {
                let _this = this;
                _this.showDailyPriceLine = true;
                let LineChart = echarts.init(document.getElementById('daily-price-chart'));
                LineChart.setOption(_this.dailyLineOptions);
            },
            dailyPriceTable: function () {
                this.showDailyPriceLine = false;
            },
            dailyLineChart: function () {
                let _this = this;
                _this.showDailyVolumeLine = true;
                let LineChart = echarts.init(document.getElementById('daily-line-chart'));
                LineChart.setOption(_this.dailyLineOptions);
            },
            dailyLineTable: function () {
                this.showDailyVolumeLine = false;
            },
            transacPieChart: function () {
                let _this = this;
                _this.showTransacPie = true;
                let pieChart = echarts.init(document.getElementById('transaction-pie-chart'));
                pieChart.setOption(_this.transacPieOptions);
            },
            transactionTableData: function () {
                this.showTransacPie = false;
            },
            realPieChart: function () {
                let _this = this;
                _this.showRealPie = false;
                let pieChart = echarts.init(document.getElementById('real-pie-chart'));
                pieChart.setOption(_this.realPieOptions);
            },
            realTableData: function () {
                this.showRealPie = true;
            },
            expandData: function () {
                console.log('展开');
            },
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(document.getElementById('main'));


                myChart.on('click', function (param) {
                    if (param.componentType == 'geo') {
                        console.log('地图的点击事件：', param);
                    }
                });

                // 绘制图表
                myChart.setOption({
                    backgroundColor: '#11213A',
                    visualMap: {
                        min: 1000,
                        max: 5000,
                        calculable: true,
                        left: '34%',
                        bottom: '5%',
                        zlevel: 10,
                        color: ['#50a3ba', '#f1c40f', '#e67e22', '#d94e5d'],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    geo: {
                        map: 'china',
                        label: {
                            emphasis: {show: true}
                        },
                        zlevel: 10,
                        layoutCenter: ['46%', '52.4%'],
                        roam: true,
                        layoutSize: "108%",
                        zoom: 1.08,
                        itemStyle: {
                            normal: {
                                color: '#062031',
                                borderWidth: 1.1,
                                borderColor: '#43D0D6'
                            },
                            emphasis: {
                                areaColor: '#43D0D6'
                            }
                        }

                    },
                    series: this.series,
                });
            },
            randomData: function () {
                return Math.round(Math.random() * 1000);
            },
            convertData: function (data) {
                var res = [];
                let _this = this;
                console.log(data);

                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    var fromCoord = _this.geoCoordMap[dataItem[0].name];
                    var toCoord = _this.geoCoordMap[dataItem[1].name];
                    if (fromCoord && toCoord) {
                        res.push({
                            fromName: dataItem[0].name, toName: dataItem[1].name, coords: [fromCoord, toCoord]
                        });
                    }
                }
                return res;

            },
        },
        mounted() {


        },
        created() {
            let _this = this;
            var rotate = 45;
            var width = 4;
            [[this.fromdata, this.BJData]].forEach(function (item, i) {
                _this.series.push(
                    /*{
                        type: 'lines',
                        zlevel: 2,
                        effect: {  show: true,  period: 4,  trailLength: 0,  symbol: 'arrow',  symbolSize: 7,
                        },
                        lineStyle: {  normal: {      width: 1.2,      opacity: 0.6,      curveness: 0.2,      color: '#02ACB2'  }
                        },
                        data: _this.convertData(item[1])
                    },*/
                    //出发点
                    {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        zlevel: 15,
                        rippleEffect: {
                            period: 4, brushType: 'stroke', scale: 4
                        },
                        symbol: 'circle',
                        symbolSize: function (val) {
                            return 4 + val[2] / 10;
                        },
                        itemStyle: {
                            normal: {show: true, color: '#00FFFF'}, emphasis: {show: true, color: '#00FFFF'}
                        },
                        data: [{
                            name: _this.fromdata, value: _this.geoCoordMap[item[0]].concat([100]),
                        }],
                    },
                    /*到达点*/
                    {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        rippleEffect: {
                            period: 4, brushType: 'stroke', scale: 4
                        },
                        zlevel: 15,
                        label: {
                            normal: {show: true, position: 'right', offset: [5, 0], formatter: '{b}'},
                            emphasis: {show: true}
                        },
                        symbol: 'circle',
                        symbolSize: 15,
                        itemStyle: {
                            normal: {show: false, color: '#00FFFF', textStyle: {color: "white"}}
                        },
                        data: item[1].map(function (dataItem) {
                            return {
                                name: dataItem[1].name,
                                value: _this.geoCoordMap[dataItem[1].name].concat([dataItem[1].name])
                            };
                        }),
                        /*markPoint 表示  高亮点*/
                        /*markPoint: {  symbol: 'circle',  symbolSize: 6,  label: {      normal: {          show: false      }  },  itemStyle: {      normal: {          color: 'red'      },      emphasis: {          color: 'red'      }  },  data: [      {          name: '广东',          value: 10,          coord: [113.23, 23.16]      }, {          name: '深圳',          coord: [114.07, 22.62]      }, {          name: '成都',          coord: [102.56, 30.92]      }, {          name: '南京',          coord: [118.78, 32.04]      }, {          name: '兰州',          coord: [103.73, 35.03]      }, {          name: '武汉',          coord: [114.31, 30.5]      }, {          name: '义乌',          coord: [120.06, 29.32]      }, {          name: '抚顺',          coord: [123.97, 41.97]      }, {          name: '拉萨',          coord: [91.11, 30.97]      }, {          name: '曲靖',          coord: [103.79, 25.51]      }, {          name: '嘉峪关',          coord: [98.289152, 39.77313]      }, {          name: '张家口',          coord: [114.87, 40.82]      }, {          name: '铜川',          coord: [109.11, 35.09]      }  ]
                        }*/
                    }, {
                        name: '左下红弧',
                        type: 'gauge',
                        radius: '99%',
                        startAngle: -160,
                        endAngle: -170,
                        zlevel: 2,
                        axisLine: {
                            lineStyle: {
                                color: [
                                    [0.2, '#d70029'],
                                    [1, '#d70029']
                                ],
                                width: 4,
                                shadowColor: '#d70029',
                                shadowOffsetX: 0,
                                shadowOffsetY: -12,
                                shadowBlur: 120,
                                opacity: 1,
                            }

                        },
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        detail: {
                            show: false
                        }
                    }, {
                        name: '右上红弧',
                        type: 'gauge',
                        radius: '99%',
                        startAngle: -340,
                        endAngle: -350,
                        zlevel: 2,
                        axisLine: {
                            lineStyle: {
                                color: [
                                    [0.2, '#d70029'],
                                    [1, '#d70029']
                                ],
                                width: 4,
                                shadowColor: '#d70029',
                                shadowOffsetX: 0,
                                shadowOffsetY: -12,
                                shadowBlur: 120,
                                opacity: 1,
                            }

                        },
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        detail: {
                            show: false
                        }
                    },
                    {
                        name: '右外圈',
                        type: 'gauge',
                        radius: '99%',
                        zlevel: 2,
                        startAngle: -320,
                        endAngle: -400,
                        axisLine: {
                            lineStyle: {
                                color: [
                                    [0.2, '#0e313f'],
                                    [0.8, '#0e313f'],
                                    [1, '#0e313f']
                                ],
                                width: 4,
                                // shadowColor: '#d70029',
                                shadowOffsetX: 0,
                                shadowOffsetY: -12,
                                shadowBlur: 120,
                                opacity: 1,
                            }

                        },
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        detail: {
                            show: false
                        }
                    },

                    {
                        name: '左外圈',
                        type: 'gauge',
                        radius: '99%',
                        startAngle: -140,
                        endAngle: -220,
                        zlevel: 2,
                        axisLine: {
                            lineStyle: {
                                color: [
                                    [0.2, '#0e313f'],
                                    [0.8, '#0e313f'],
                                    [1, '#0e313f']
                                ],
                                width: 4,
                                // shadowColor: '#d70029',
                                shadowOffsetX: 0,
                                shadowOffsetY: -12,
                                shadowBlur: 120,
                                opacity: 1,
                            }

                        },
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        detail: {
                            show: false
                        }
                    }, {
                        name: '蓝色外圈1',
                        type: 'gauge',
                        radius: '80%',
                        zlevel: 2,
                        startAngle: -90 + rotate,
                        endAngle: -135 + rotate,
                        splitNumber: 5,
                        axisLine: {
                            lineStyle: {
                                color: [
                                    [1, '#1e5a67']
                                ],
                                width: width,
                                opacity: 1,
                            }
                        },
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        detail: {
                            show: false
                        }
                    }, {
                        name: '蓝色外圈1',
                        type: 'gauge',
                        radius: '99%',
                        zlevel: 2,
                        startAngle: -85 + rotate,
                        endAngle: -115 + rotate,
                        splitNumber: 4,
                        axisLine: {
                            lineStyle: {
                                color: [
                                    [1, '#1e5a67']
                                ],
                                width: width,
                                opacity: 1,
                            }
                        },
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        detail: {
                            show: false
                        }
                    }, {
                        name: '蓝色外圈2',
                        type: 'gauge',
                        radius: '99%',
                        zlevel: 2,
                        startAngle: -155 + rotate,
                        endAngle: 175 + rotate,
                        splitNumber: 4,
                        axisLine: {
                            lineStyle: {
                                color: [
                                    [1, '#1e5a67']
                                ],
                                width: width,
                                opacity: 1,
                            }
                        },
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        detail: {
                            show: false
                        }
                    }, {
                        name: '蓝色外圈3',
                        type: 'gauge',
                        radius: '99%',
                        zlevel: 2,
                        startAngle: 25 + rotate,
                        endAngle: -5 + rotate,
                        splitNumber: 4,
                        axisLine: {
                            lineStyle: {
                                color: [
                                    [1, '#1e5a67']
                                ],
                                width: width,


                                opacity: 1,
                            }

                        },
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        detail: {
                            show: false
                        }
                    }, {
                        name: '蓝色外圈4',
                        type: 'gauge',
                        radius: '99%',
                        zlevel: 2,
                        startAngle: 95 + rotate,
                        endAngle: 65 + rotate,
                        splitNumber: 4,
                        axisLine: {

                            lineStyle: {
                                color: [
                                    [1, '#1e5a67']
                                ],
                                width: width,
                                opacity: 1,
                            }

                        },
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        detail: {
                            show: false
                        }
                    },
                    {
                        name: '蓝色外圈5',
                        type: 'gauge',
                        radius: '80%',
                        zlevel: 2,
                        startAngle: 70 + rotate,
                        endAngle: -10 + rotate,
                        splitNumber: 4,
                        axisLine: {
                            lineStyle: {
                                color: [
                                    [1, '#1e5a67']
                                ],
                                width: width,
                                opacity: 1,
                            }

                        },
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        detail: {
                            show: false
                        }
                    },
                    {
                        type: 'pie',
                        zlevel: 2,
                        radius: ['72%', '85%'],
                        label: {
                            normal: {
                                position: 'center'
                            }
                        },
                        data: [{
                            value: 1000,
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: '#4dfaff',
                                    opacity: 0.2
                                }
                            }
                        }]
                    },
                );
            });
            let map = setInterval(function () {
                _this.drawLine();
                clearInterval(map);
            }, 500)
        }
    }
</script>
