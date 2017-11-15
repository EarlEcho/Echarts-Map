<style scoped lang="less">
    .popup-table {
        width: 100%;
        height: 100%;
    }

    .content-wrapper {
        margin: 37px 60px;
        background: url(../assets/popupInner.png) no-repeat;
        background-size: 100%;
        height: 900px;
        .tooltip{
            text-align: right;
            padding: 2px 10px 0 10px;
            .el-button{
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
        line-height:30px;
    }
    .expand-table-wrapper{
        .data-content{
            max-height: 585px;
        }
    }
    .expand-dialog .el-dialog {
        max-height: 917px;
    }
    .el-button .el-tooltip .item .el-button--default{

    }
</style>
<template>
    <div class="popup-table">
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

        <div class="expand-dialog">
            <el-dialog :visible.sync="dialogVisible" width="75%" top="12vh">
                <div class="content-wrapper">
                    <p class="tooltip">
                        <el-tooltip class="item" effect="dark" content="提示文字" placement="top-start">
                            <el-button icon="icon iconfont icon-wenhao1"></el-button>
                        </el-tooltip>
                    </p>
                    <p class="popup-title">实时交易数据分析</p>
                    <div class="select-group-wrapper">
                        <el-select v-model="value" placeholder="请选择" size="small">
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                       :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="value" placeholder="请选择" size="small">
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                       :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="value" placeholder="请选择" size="small">
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                       :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="value" placeholder="请选择" size="small">
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                       :value="item.value">
                            </el-option>
                        </el-select>
                        <el-button @click="dialogVisible = true" size="small">搜索</el-button>
                    </div>
                    <div class="expand-table-wrapper">
                        <div class="data-content">
                            <el-table :data="expandTableData" size="small" fit>
                                <el-table-column prop="date" label="日期" width="55px"></el-table-column>
                                <el-table-column prop="time" label="时间" width="55px"></el-table-column>
                                <el-table-column prop="area" label="地区"></el-table-column>
                                <el-table-column prop="company" label="公司"></el-table-column>
                                <el-table-column prop="user" label="用户"></el-table-column>
                                <el-table-column prop="type" label="品种"></el-table-column>
                                <el-table-column prop="standard" label="规格"></el-table-column>
                                <el-table-column prop="num" label="合同数量"></el-table-column>
                                <el-table-column prop="outNum" label="已出库数量"></el-table-column>
                                <el-table-column prop="innerNum" label="未出库数量"></el-table-column>
                                <el-table-column prop="price" label="单价"></el-table-column>
                                <el-table-column prop="allPrice" label="总价(万元)"></el-table-column>
                            </el-table>
                        </div>
                        <div class="data-footer-box clearfix">
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
            </el-dialog>
        </div>

    </div>


</template>

<script>
    export default {
        name: '',
        components: {},
        props: [],
        data() {
            return {
                dialogVisible: true,
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
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
                }]
            }
        },
        methods: {
            expandData: function () {

            }
        }
    }
</script>
