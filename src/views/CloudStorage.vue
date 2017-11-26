<style lang="less">
    @import "../assets/css/common.css";

    .mian-box {
        width: 100%;
        .sys-header-box {
            position: absolute;
            z-index: 15;
        }
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
            background-color: #11213A;
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
            height: 875px;
        }
        .right-data-wrapper {
            position: absolute;
            top: 164px;
            right: 35px;
            /*width: 820px;*/
        }

    }

    .el-popover {
        padding: 0;
        border-radius: 0;
    }

    .map-click-chart {
        width: 600px;
        height: 364px;
        position: absolute;
        border: solid 1px #288ed9;
        top: 29%;
        left: 32%;
        background: rgba(22, 45, 72, 0.8);
        .title {
            height: 40px;
            line-height: 40px;
            text-align: center;
            color: white;
            border-bottom: solid 1px #288ed9;
        }
        .chart-tabs {
            height: 35px;
            .el-tabs--card > .el-tabs__header {
                border-bottom: none;
            }
            .el-tabs--card > .el-tabs__header .el-tabs__nav {
                border: none;
            }
            .el-tabs__item {
                border: none;
                border-radius: 0;
                background: transparent;
                height: 34px;
                line-height: 34px;
                color: white;
                width: 299px;
                text-align: center;
                border-bottom: solid 1px #288ed9;
                &:first-child {
                    border-right: solid 1px #288ed9;
                }
            }
            .el-tabs__item.is-active {
                border-bottom: none;
            }

        }
    }
</style>
<template>
    <div class="mian-box">
        <div id="main">

        </div>
        <!--页面头部的logo 导航-->
        <sys-header-box logo-active="2"></sys-header-box>
        <!--左侧数据-->
        <div class="left-data-wrapper g-lf">

            <!--左上方表格-->
            <left-top-table></left-top-table>

            <left-bottom-table></left-bottom-table>
            <!--左下方的数据图-->
        </div>
        <!--右侧数据-->
        <div class="right-data-wrapper clearfix">
            <!--右上方的数据-->
            <right-top-table></right-top-table>

            <!--右下方的数据-->
            <right-bottom-table></right-bottom-table>
        </div>


        <el-popover popper-class="map-click-chart" transition="el-zoom-in-center" v-model="showMapChart" ref="popover5"
                    placement="top">
            <div class="title">
                XX地区交易及价格信息
            </div>
            <div class="chart-tabs">
                <el-tabs v-model="chartActive" type="card">
                    <el-tab-pane label="交易数据分析" name="first"></el-tab-pane>
                    <el-tab-pane label="价格信息分析" name="second"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="checkbox-wrapper clearfix">
                <el-radio-group v-model="radioValue1">
                    <el-radio :label="3">按量</el-radio>
                    <el-radio :label="6">按金额</el-radio>
                    <el-radio :label="9">按品种</el-radio>
                </el-radio-group>
                <el-radio-group v-model="radioValue2" class="g-rt">
                    <el-radio :label="3">1月</el-radio>
                    <el-radio :label="6">3月</el-radio>
                    <el-radio :label="9">6月</el-radio>
                </el-radio-group>
            </div>
            <div id="map-innner-chart" style="width: 100%;height: 245px;">

            </div>

        </el-popover>
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

    import LeftTopTable from '@/components/LeftTopTable'
    import LeftBottomTable from '@/components/LeftBottomTable'
    import RightTopTable from '@/components/RightTopTable'
    import RightBottomTable from '@/components/RightBottomTable'
    import MapClickChart from '@/components/MapClickChart'


    import SysHeaderBox from '@/components/SysHeader'

    export default {
        name: 'CloudStorage',
        components: {
            SysHeaderBox,
            LeftTopTable,
            LeftBottomTable,
            RightTopTable,
            RightBottomTable,
            MapClickChart
        },
        props: [],
        data() {
            return {
                radioValue1: 3,
                radioValue2: 3,
                showClickItem: 'false',
                logoHeaderActive: '1',
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
                },
                geoCoordMap: {
                    '上海':
                        [121.4648, 31.2891],
                    '东莞':
                        [113.8953, 22.901],
                    '东营':
                        [118.7073, 37.5513],
                    '中山':
                        [113.4229, 22.478],
                    '临汾':
                        [111.4783, 36.1615],
                    '临沂':
                        [118.3118, 35.2936],
                    '丹东':
                        [124.541, 40.4242],
                    '丽水':
                        [119.5642, 28.1854],
                    '乌鲁木齐':
                        [87.9236, 43.5883],
                    '佛山':
                        [112.8955, 23.1097],
                    '保定':
                        [115.0488, 39.0948],
                    '兰州':
                        [103.5901, 36.3043],
                    '包头':
                        [110.3467, 41.4899],
                    '北京':
                        [116.4551, 40.2539],
                    '北海':
                        [109.314, 21.6211],
                    '南京':
                        [118.8062, 31.9208],
                    '南宁':
                        [108.479, 23.1152],
                    '南昌':
                        [116.0046, 28.6633],
                    '南通':
                        [121.1023, 32.1625],
                    '厦门':
                        [118.1689, 24.6478],
                    '台州':
                        [121.1353, 28.6688],
                    '合肥':
                        [117.29, 32.0581],
                    '呼和浩特':
                        [111.4124, 40.4901],
                    '咸阳':
                        [108.4131, 34.8706],
                    '哈尔滨':
                        [127.9688, 45.368],
                    '唐山':
                        [118.4766, 39.6826],
                    '嘉兴':
                        [120.9155, 30.6354],
                    '大同':
                        [113.7854, 39.8035],
                    '大连':
                        [122.2229, 39.4409],
                    '天津':
                        [117.4219, 39.4189],
                    '太原':
                        [112.3352, 37.9413],
                    '威海':
                        [121.9482, 37.1393],
                    '宁波':
                        [121.5967, 29.6466],
                    '宝鸡':
                        [107.1826, 34.3433],
                    '宿迁':
                        [118.5535, 33.7775],
                    '常州':
                        [119.4543, 31.5582],
                    '广州':
                        [113.5107, 23.2196],
                    '廊坊':
                        [116.521, 39.0509],
                    '延安':
                        [109.1052, 36.4252],
                    '张家口':
                        [115.1477, 40.8527],
                    '徐州':
                        [117.5208, 34.3268],
                    '德州':
                        [116.6858, 37.2107],
                    '惠州':
                        [114.6204, 23.1647],
                    '成都':
                        [103.9526, 30.7617],
                    '扬州':
                        [119.4653, 32.8162],
                    '承德':
                        [117.5757, 41.4075],
                    '拉萨':
                        [91.1865, 30.1465],
                    '无锡':
                        [120.3442, 31.5527],
                    '日照':
                        [119.2786, 35.5023],
                    '昆明':
                        [102.9199, 25.4663],
                    '杭州':
                        [119.5313, 29.8773],
                    '枣庄':
                        [117.323, 34.8926],
                    '柳州':
                        [109.3799, 24.9774],
                    '株洲':
                        [113.5327, 27.0319],
                    '武汉':
                        [114.3896, 30.6628],
                    '汕头':
                        [117.1692, 23.3405],
                    '江门':
                        [112.6318, 22.1484],
                    '沈阳':
                        [123.1238, 42.1216],
                    '沧州':
                        [116.8286, 38.2104],
                    '河源':
                        [114.917, 23.9722],
                    '泉州':
                        [118.3228, 25.1147],
                    '泰安':
                        [117.0264, 36.0516],
                    '泰州':
                        [120.0586, 32.5525],
                    '济南':
                        [117.1582, 36.8701],
                    '济宁':
                        [116.8286, 35.3375],
                    '海口':
                        [110.3893, 19.8516],
                    '淄博':
                        [118.0371, 36.6064],
                    '淮安':
                        [118.927, 33.4039],
                    '深圳':
                        [114.5435, 22.5439],
                    '清远':
                        [112.9175, 24.3292],
                    '温州':
                        [120.498, 27.8119],
                    '渭南':
                        [109.7864, 35.0299],
                    '湖州':
                        [119.8608, 30.7782],
                    '湘潭':
                        [112.5439, 27.7075],
                    '滨州':
                        [117.8174, 37.4963],
                    '潍坊':
                        [119.0918, 36.524],
                    '烟台':
                        [120.7397, 37.5128],
                    '玉溪':
                        [101.9312, 23.8898],
                    '珠海':
                        [113.7305, 22.1155],
                    '盐城':
                        [120.2234, 33.5577],
                    '盘锦':
                        [121.9482, 41.0449],
                    '石家庄':
                        [114.4995, 38.1006],
                    '福州':
                        [119.4543, 25.9222],
                    '秦皇岛':
                        [119.2126, 40.0232],
                    '绍兴':
                        [120.564, 29.7565],
                    '聊城':
                        [115.9167, 36.4032],
                    '肇庆':
                        [112.1265, 23.5822],
                    '舟山':
                        [122.2559, 30.2234],
                    '苏州':
                        [120.6519, 31.3989],
                    '莱芜':
                        [117.6526, 36.2714],
                    '菏泽':
                        [115.6201, 35.2057],
                    '营口':
                        [122.4316, 40.4297],
                    '葫芦岛':
                        [120.1575, 40.578],
                    '衡水':
                        [115.8838, 37.7161],
                    '衢州':
                        [118.6853, 28.8666],
                    '西宁':
                        [101.4038, 36.8207],
                    '西安':
                        [109.1162, 34.2004],
                    '贵阳':
                        [106.6992, 26.7682],
                    '连云港':
                        [119.1248, 34.552],
                    '邢台':
                        [114.8071, 37.2821],
                    '邯郸':
                        [114.4775, 36.535],
                    '郑州':
                        [113.4668, 34.6234],
                    '鄂尔多斯':
                        [108.9734, 39.2487],
                    '重庆':
                        [107.7539, 30.1904],
                    '金华':
                        [120.0037, 29.1028],
                    '铜川':
                        [109.0393, 35.1947],
                    '银川':
                        [106.3586, 38.1775],
                    '镇江':
                        [119.4763, 31.9702],
                    '长春':
                        [125.8154, 44.2584],
                    '长沙':
                        [113.0823, 28.2568],
                    '长治':
                        [112.8625, 36.4746],
                    '阳泉':
                        [113.4778, 38.0951],
                    '青岛':
                        [120.4651, 36.3373],
                    '韶关':
                        [113.7964, 24.7028]
                }
                ,
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
                fromdata: '北京'
            }
        },
        methods: {
            mapClickEvent: function () {
                let innerChart;
                let _this = this;

                if (_this.showMapChart) {
                    _this.showMapChart = false;

                } else {
                    _this.showMapChart = true;
                    setTimeout(function () {
                        innerChart = echarts.init(document.getElementById('map-innner-chart'));
                        innerChart.setOption(_this.chartOption);
                    }, 500);
                }


            },

            expandData: function () {
                console.log('展开');
            },
            drawLine() {
                let _this = this;
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(document.getElementById('main'));


                myChart.on('click', function (param) {

                    if (param.componentType == 'geo') {
                        _this.mapClickEvent();
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
                        color: ['#80F1BE', '#fec42c', '#dd4444', '#64FFFF'],
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
                                opacity: 1
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
                        radius: ['70%', '81%'],
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
                                    opacity: 0.2
                                }
                            }
                        }]
                    },
                    {
                        type: 'pie',
                        zlevel: 2,
                        radius: ['55%', '60%'],
                        label: {
                            normal: {
                                position: 'center'
                            }
                        },
                        itemStyle: {
                            normal: {
                                opacity: 0.5
                            }
                        },
                        data: [{
                            value: 200,
                            tooltip: {
                                show: false
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
