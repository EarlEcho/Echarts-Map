<style scoped lang="less">
    .popup-table {
        width: 100%;
        height: 100%;
    }
</style>
<template>
    <div class="popup-table">
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

        <div class="expand-dialog">
            <el-dialog title="提示" :visible.sync="dialogVisible" width="75%" top="12vh">
                <div class="select-group-wrapper">
                    <el-select v-model="value" placeholder="请选择" size="small">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value" placeholder="请选择" size="small">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value" placeholder="请选择" size="small">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value" placeholder="请选择" size="small">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button @click="dialogVisible = true" size="small">搜索</el-button>
                </div>
                <div class="expand-table-wrapper">
                    <div class="data-content">
                        <el-table :data="expandTableData" size="small" fit>
                            <el-table-column prop="date" label="日期"></el-table-column>
                            <el-table-column prop="time" label="时间"></el-table-column>
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
                        <div class="action-group box-center">
                            <el-button icon="icon iconfont icon-arrow-down-circle-left"
                                       @click="expandData"></el-button>
                            <el-button icon="icon iconfont icon-arrow-down-circle-right"></el-button>
                        </div>
                        <div class="action-group g-rt">
                            <el-button icon="icon iconfont icon-msnui-menu" @click="expandData"></el-button>
                            <el-button icon="icon iconfont icon-weibiaoti11"></el-button>
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
                },{
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
                },{
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
                },{
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
                },{
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
            expandData:function () {

            }
        }
    }
</script>
