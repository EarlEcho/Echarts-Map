<style scoped lang="less">
    .homepage-wrapper {
        border: solid 1px;
        width: 100%;
        min-height: 100%;
        padding: 0 35px;
        position: relative;
        z-index: 10;
        box-sizing: border-box;
        div {
            box-sizing: border-box;
        }
    }

    .data-content-box {
        width: 100%;
        height: 914px;
        .data-left-wrapper {
            width: 322px;
            height: 854px;
            padding-top: 30px;
        }
        .video-right-wrapper {
            width: 75%;
            height: 854px;
        }

    }

    .data-modules {
        width: 320px;
        height: 260px;
        margin-bottom: 23px;
        background: url(../assets/homebox.png) no-repeat;
        background-size: 100%;
        .data-list-item {
            height: 170px;
            font-size: 14px;
            font-weight: bold;
            .inner-span {
                color: #cccccc;
                padding: 0 8px;
            }
            .el-row {
                padding: 0 15px;
            }
        }
        .dark-item {
            height: 31px;
            line-height: 31px;
        }
        .light-item {
            height: 31px;
            line-height: 31px;
        }
        &:last-child {
            margin-bottom: 0px;
        }
    }

    /*菜单栏*/
    .homepage-navbar {
        padding-left: 7px;
        height: 30px;
        margin-bottom: 1px;
        .el-menu {
            background: transparent;
        }
    }

    .video-navbar {
        border: none;
        .el-menu-item {
            height: 30px;
            width: 106px;
            text-align: center;
            line-height: 30px;
            border-right: 1px solid #11213A;
            color: white;
            transform: skewX(-20deg);
            background-color: #409EFF;
        }
        .el-menu-item.is-active {
            background-color: #409EFF;
            color: #000;
        }
    }

    .type-navbar {
        border: solid 1px #1f6198;
        border-right: none;
        border-bottom: none;
        .el-menu--horizontal {
            height: 30px;
            line-height: 30px;
        }
        .el-menu-item {
            height: 30px;
            width: 66px;
            text-align: center;
            line-height: 30px;
            border-right: 1px solid #1f6198;
            color: #1f6198;
            background-color: #11213a;
        }
        .el-menu-item.is-active {
            background-color: #11213a;
            color: white;
            border-bottom: none;
        }

    }

    .logo-header-navbar {
        width: 400px;
        margin: 65px 100px;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        border-bottom: none;
        .el-menu-item {
            height: 30px;
            width: 106px;
            text-align: center;
            line-height: 30px;
            border: 2px solid #2ca1f4;
            color: white;
            background-color: #11213a;
            transform: skewX(40deg);
            margin-right: 10px;
            span {
                display: inline-block;
                -webkit-transform: skew(-40deg);

            }
        }
        .el-menu-item.is-active {
            background-color: #11213a;
            color: white;
        }
    }

    .videos-content-wrapper {
        border: solid 1px #1f6198;
        height: 825px;
    }
</style>
<template>
    <div class="homepage-wrapper">
        <div class="sys-header-box">
            <div class="homepage-navbar clearfix">
                <el-menu :default-active="logoHeaderActive" mode="horizontal" class="logo-header-navbar">
                    <el-menu-item index="1"><span>首页</span></el-menu-item>
                    <el-menu-item index="2"><span>云仓储</span></el-menu-item>
                    <el-menu-item index="3"><span>交易监控</span></el-menu-item>
                </el-menu>
            </div>
        </div>
        <div class="data-content-box clearfix">
            <div class="data-left-wrapper g-lf">
                <div class="data-modules">
                    <data-header-box item-title="云仓储数据"></data-header-box>
                    <div class="data-list-item">
                        <el-row v-for="(item,index) in homeLeftDatas.storeData" :key="index"
                                :class=" index%2==0?'dark-item':'light-item'">
                            <el-col :span="9" class="right">
                                {{item.title}}：
                            </el-col>
                            <el-col :span="15" class="right">
                                <span class="inner-span"> {{item.num}}</span>吨
                            </el-col>
                        </el-row>
                    </div>
                    <data-footer-box :left-item="false" :center-item="false"></data-footer-box>
                </div>
                <div class="data-modules">
                    <data-header-box item-title="云仓储待作业"></data-header-box>
                    <div class="data-list-item">
                        <el-row v-for="(item,index) in homeLeftDatas.notStoreData" :key="index"
                                :class="index%2==0?'dark-item':'light-item'">
                            <el-col :span="6">
                                {{item.title}}:<span class="inner-span">{{item.titleNum}}</span>
                            </el-col>
                            <el-col :span="4" class="right">
                                重量:
                            </el-col>
                            <el-col :span="6" class="right">
                                <span class="inner-span"> {{item.num}}</span>吨
                            </el-col>
                            <el-col :span="5" :push="3" class="left">
                                预警:<span class="red"> {{item.warn}}</span>
                            </el-col>
                        </el-row>
                    </div>
                    <data-footer-box :left-item="false" :center-item="false"></data-footer-box>
                </div>
                <div class="data-modules">
                    <data-header-box item-title="集团库存数量"></data-header-box>
                    <div class="data-list-item">
                        <el-row v-for="(item,index) in homeLeftDatas.groupStoreData" :key="index"
                                :class=" index%2==0?'dark-item':'light-item'">
                            <el-col :span="9" class="right">
                                {{item.title}}：
                            </el-col>
                            <el-col :span="15" class="right">
                                <span class="inner-span"> {{item.num}}</span>吨
                            </el-col>
                        </el-row>
                    </div>
                    <data-footer-box :left-item="false" :center-item="false"></data-footer-box>
                </div>
            </div>
            <div class="video-right-wrapper g-rt">
                <div class="homepage-navbar clearfix">
                    <el-menu :default-active="activeIndex" class="video-navbar g-lf" mode="horizontal">
                        <el-menu-item index="1">模块1</el-menu-item>
                        <el-menu-item index="2">模块2</el-menu-item>
                        <el-menu-item index="3">模块3</el-menu-item>
                        <el-menu-item index="4">模块4</el-menu-item>
                        <el-menu-item index="5">模块5</el-menu-item>
                    </el-menu>
                    <el-menu :default-active="activeIndex" class="type-navbar g-rt" mode="horizontal">
                        <el-menu-item index="1"><i class="icon iconfont icon-map"></i></el-menu-item>
                        <el-menu-item index="2"><i class="icon iconfont icon-video"></i></el-menu-item>
                        <el-menu-item index="3"><i class="icon iconfont icon-icon3d"></i></el-menu-item>
                    </el-menu>
                </div>
                <div class="videos-content-wrapper">

                </div>


            </div>
        </div>
    </div>
</template>

<script>
    import DataHeaderBox from '@/components/ToolTop'

    import DataFooterBox from '@/components/ToolBottom'

    export default {
        name: '',
        components: {DataHeaderBox, DataFooterBox},
        props: [],
        data() {
            return {
                logoHeaderActive: '1',
                activeIndex: '1',
                homeLeftDatas: {
                    storeData: [{
                        title: '今日入库量',
                        num: '1564584.4'
                    }, {
                        title: '出库量',
                        num: '12485.7'
                    }, {
                        title: '本月入库量',
                        num: '3598444.2'
                    }, {
                        title: '出库量',
                        num: '254874.9'
                    }, {
                        title: '实时静态库存',
                        num: '545645.4'
                    }],
                    notStoreData: [{
                        title: '入库',
                        titleNum: '22',
                        num: '232',
                        warn: '2'
                    }, {
                        title: '出库',
                        titleNum: '12',
                        num: '1231',
                        warn: '3'
                    }, {
                        title: '加工',
                        titleNum: '17',
                        num: '33',
                        warn: '1'
                    }, {
                        title: '收费',
                        titleNum: '2',
                        num: '432',
                        warn: '10'
                    }, {
                        title: '车皮',
                        titleNum: '41',
                        num: '18',
                        warn: '9'
                    }],
                    groupStoreData: [{
                        title: '今日入库量',
                        num: '1564584.4'
                    }, {
                        title: '出库量',
                        num: '12485.7'
                    }, {
                        title: '本月入库量',
                        num: '3598444.2'
                    }, {
                        title: '出库量',
                        num: '254874.9'
                    }, {
                        title: '实时静态库存',
                        num: '545645.4'
                    }]
                }
            }
        },
        mounted: function () {


        }
    }
</script>
