<style scoped lang="less">
    .mian-box {
        position: absolute;
        width: 100%;
        height: 100%;
        display: block;
        text-align: center;
        padding: 10px 10px;
        box-sizing: border-box;
        background-color: #11213A;
        box-sizing: border-box;
        #main {
            position: absolute;
            top: 2%;
            left: 3%;
            width: 95%;
            height: 95%;
            z-index: 0;
        }

    }

    .data-list-wrapper {
        position: absolute;
        top: 5px;
        left: 2%;
        z-index: 5;
        width: 96%;
        height: 99%;
        box-sizing: border-box;
    }

    .left-wrapper {
        float: left;
        width: 40%;
        height: 100%;
        border: solid 1px red;
        .real-time-data {
            width: 452px;
            height: 432px;
            margin: 5% 0;
            padding: 2px 0;
            background: url(../assets/boxBk.png) no-repeat;
            background-size: 100%;
            .data-content {
                width: 452px;
                height: 334px;
            }
        }

    }

    .right-wrapper {
        float: right;
        width: 40%;
        height: 100%;
        border: solid 1px red;

    }

    .transaction-data {
        width: 322px;
        height: 400px;
        margin: 5% 0;
        padding: 2px 0;
        background: url(../assets/smallBox.png) no-repeat;
        background-size: 100%;
        .data-content {
            width: 322px;
            height: 305px;
        }
        .transaction-item {
            font-size: 14px;
            font-weight: bold;
            span{
                color: #cccccc;
                padding: 0 8px;
            }
            .el-row{
                padding: 0 15px;
            }
            .el-col-8{
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
</style>
<template>
    <div class="mian-box">
        <div id="main">

        </div>
        <div class="data-list-wrapper">
            <div class="left-wrapper">
                <div class="real-time-data">
                    <div class="data-header-box">
                        <span class="title">title</span>
                        <div class="action-group">
                            <el-button icon="icon iconfont icon-fangda" @click="expandData"></el-button>
                            <el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
                                <el-button icon="icon iconfont icon-wenhao1"></el-button>
                            </el-tooltip>
                        </div>
                    </div>
                    <div class="data-content">
                        <el-table :data="tableData" size="small">
                            <el-table-column prop="date" label="时间" width="45px"></el-table-column>
                            <el-table-column prop="area" label="地区" width="45px"></el-table-column>
                            <el-table-column prop="company" label="公司" width="82px"></el-table-column>
                            <el-table-column prop="type" label="品种" width="75px"></el-table-column>
                            <el-table-column prop="standard" label="规格" width="60px"></el-table-column>
                            <el-table-column prop="num" label="数量" width="45px"></el-table-column>
                            <el-table-column prop="price" label="单价" width="50px"></el-table-column>
                            <el-table-column prop="allCount" label="总价" width="50px"></el-table-column>
                        </el-table>
                    </div>
                    <div class="data-footer-box">
                        <div class="action-group g-lf">
                            <el-button icon="icon iconfont icon-caidan" @click="expandData"></el-button>
                            <el-button icon="icon iconfont icon-jiugongge-copy"></el-button>
                        </div>
                        <div class="action-group box-center" >
                            <el-button icon="icon iconfont icon-arrow-down-circle-left" @click="expandData"></el-button>
                            <el-button icon="icon iconfont icon-arrow-down-circle-right"></el-button>
                        </div>
                        <div class="action-group g-rf">
                            <el-button icon="icon iconfont icon-msnui-menu" @click="expandData"></el-button>
                            <el-button icon="icon iconfont icon-pie"></el-button>
                        </div>
                    </div>
                </div>

                <div class="transaction-data">
                    <div class="data-header-box">
                        <span class="title">title</span>
                        <div class="action-group">
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
                        <div class="action-group  g-rf">
                            <el-button icon="icon iconfont icon-msnui-menu" @click="expandData"></el-button>
                            <el-button icon="icon iconfont icon-pie"></el-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-wrapper">

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
                tableData: [
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
                color: ['#02ACB2', '#FFFF00', '#FFA011', '#A6141B', '#00FF01']

            }
        },
        methods: {
            expandData: function () {
                console.log('展开');
            },
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(document.getElementById('main'));


                myChart.on('click', function (param) {
                    console.log('地图的点击事件：', param);
                });

                // 绘制图表
                myChart.setOption({
                    backgroundColor: '#11213A',

                    visualMap: {
                        min: 1000,
                        max: 5000,
//                        calculable: true,
                        color: ['#43D0D6', '#062031'],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    legend: {
                        animation: false
                    },
                    geo: {
                        map: 'china',
                        label: {
                            emphasis: {show: false}
                        },
                        roam: true,
                        layoutSize: "108%",
                        zoom: 1.22,
                        itemStyle: {
                            normal: {color: '#062031', borderWidth: 1.1, borderColor: '#43D0D6'},
                            emphasis: {color: 'rgba(37, 43, 61, .5)'}
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
        created() {
            let _this = this;
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
                        zlevel: 2,
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
                        zlevel: 2,
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
                    }
                );
            });
            let map = setInterval(function () {
//                _this.drawLine();
                clearInterval(map);
            }, 500)
        }
    }
</script>
