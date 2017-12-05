<style lang="less">
    @import "../assets/css/common.css";

    .data-content-box {
        width: 100%;
        height: 914px;
        padding: 0 35px;
        .data-left-wrapper {
            width: 322px;
            height: 854px;
            padding-top: 30px;
            .border-box {
                width: 320px;
                height: 260px;
                background-color: #1C2B44;
                border: solid 2px #96E6EC;
                margin-bottom: 23px;
                position: static;
                #border1 {
                    width: 321px;
                    height: 210px;
                    background-color: #1C2B44;
                    position: relative;
                    top: 22px;
                    left: -3px;
                }
                #border2 {
                    width: 270px;
                    height: 261px;
                    background-color: #1C2B44;
                    position: relative;
                    top: -25px;
                    left: 25px;
                }
                .border-inner-content {
                    width: 321px;
                    height: 254px;
                    position: relative;
                    top: 3px;
                    left: -25px;
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
            }
        }
        .video-right-wrapper {
            width: 1492px;
            height: 854px;
        }

    }

    /*菜单栏*/
    .homepage-navbar {
        /*padding-left: 7px;*/
        height: 30px;
        margin-bottom: 1px;
        .el-menu {
            background: transparent;
        }
    }

    .video-navbar {
        background-color: #1d3c5b !important;
        border: none;
        .el-menu-item {
            height: 30px;
            width: 106px;
            text-align: center;
            line-height: 30px;
            &:hover {
                background-color: #2ca2f6;
                color: white;
            }
            &:focus {
                background-color: transparent;
                color: white;
                border-bottom: 3px solid #2ca2f6;
            }
        }
        .el-menu-item.is-active {
            border-bottom: 3px solid #409EFF;
            color: white;
            &:hover {
                background-color: #2ca2f6;
                color: white;
                border-bottom: 3px solid white;
            }
        }
    }

    .type-navbar {
        border: solid 1px #1f6198;
        border-right: none;
        border-bottom: none;
        .el-menu--horizontal {
            height: 30px;
            line-height: 26px;
        }
        .el-menu-item {
            height: 30px;
            width: 66px;
            text-align: center;
            line-height: 26px;
            border-right: 1px solid #1f6198;
            color: #1f6198;
            background-color: #11213a;
            i {
                font-size: 19px;
            }
        }
        .el-menu-item.is-active {
            background-color: #11213a;
            color: white;
            border-bottom: none;
        }

    }

    .videos-content-wrapper {
        height: 825px;
    }

    .videos-content-item {
        background-color: #2f6189;
        height: 165px;
        overflow: hidden;
        img {
            width: 100%;
            /*max-height: 100%;*/
            transition: all 0.5s;
            &:hover {
                transform: scale(1.04);
            }
        }
    }

    .videos-content-item-big {
        background-color: #2f6189;
        height: 330px;

    }

    .vjs_video_3-dimensions {
        width: 100% !important;
        height: 330px !important;
    }

    .homepage-wrapper {
        border: solid 1px;
        width: 1920px;
        min-height: 100%;
        background-color: #11213A;

        position: relative;
        z-index: 10;
        box-sizing: border-box;
        div {
            box-sizing: border-box;
        }
        .el-table th {
            padding: 6px 0;
        }

        .el-table td {
            padding: 3px 0;
        }
        .el-table td, .el-table th.is-leaf {
            border-bottom: 3px solid #172f4b;
        }
        .el-table__body, .el-table__footer, .el-table__header {
            border-bottom: 3px solid #172f4b;
        }

    }
    .dialog-fade-enter-active {
        -webkit-animation: dialog-fade-in 1.2s;
        animation: dialog-fade-in 1.2s
    }

    .dialog-fade-leave-active {
        -webkit-animation: dialog-fade-out 1.2s;
        animation: dialog-fade-out 1.2s
    }

    @-webkit-keyframes dialog-fade-in {
        0% {
            transform: scale(1.23);
            opacity: 0
        }
        100% {
            transform: scale(1);
            opacity: 1
        }
    }

    @keyframes dialog-fade-in {
        0% {
            transform: scale(1.23);
            opacity: 0
        }
        100% {
            transform: scale(1);
            opacity: 1
        }
    }

    @-webkit-keyframes dialog-fade-out {
        0% {
            transform: scale(1);
            opacity: 1
        }
        100% {
            transform: scale(1.23);
            opacity: 0
        }
    }

    @keyframes dialog-fade-out {
        0% {
            transform: scale(1);
            opacity: 1
        }
        100% {
            transform: scale(1.23);
            opacity: 0
        }
    }
</style>
<template>
    <div class="homepage-wrapper">
        <sys-header-box logo-active="1"></sys-header-box>

        <div class="data-content-box clearfix">
            <div class="data-left-wrapper g-lf">
                <border-box>
                    <data-header-box item-title="云仓储数据" :expand-popup="true"></data-header-box>
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
                </border-box>


                <border-box>
                    <data-header-box item-title="云仓储待作业" :expand-popup="true"></data-header-box>
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
                    <!--<data-footer-box :left-item="false" :center-item="false"></data-footer-box>-->
                </border-box>


                <border-box>
                    <data-header-box item-title="集团库存数量" :expand-popup="true"></data-header-box>
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
                    <!--<data-footer-box :left-item="false" :center-item="false"></data-footer-box>-->
                </border-box>
            </div>
            <div class="video-right-wrapper g-rt">
                <div class="homepage-navbar clearfix">
                    <el-menu :default-active="activeIndex" class="video-navbar g-lf" mode="horizontal"
                             @select="handleCitySelect">
                        <el-menu-item v-for="cityItem in monitorCitys" :index="cityItem.key" :key="cityItem.key">
                            {{cityItem.value}}
                        </el-menu-item>
                    </el-menu>
                    <el-menu :default-active="typeActiveIndex" class="type-navbar g-rt" mode="horizontal">
                        <el-menu-item index="1"><i class="icon iconfont icon-map"></i></el-menu-item>
                        <el-menu-item index="2"><i class="icon iconfont icon-video"></i></el-menu-item>
                        <el-menu-item index="3"><i class="icon iconfont icon-icon3d"></i></el-menu-item>
                    </el-menu>
                </div>
                <transition name="el-fade-in-linear">
                    <div class="videos-content-wrapper" v-show="showVideos">
                        <el-row>
                            <el-col :span="12">
                                <!--大的视频-->
                                <video-player class="vjs-custom-skin videos-content-item-big"
                                              ref="videoPlayer"
                                              :options="playerOptions"
                                              :playsinline="true"
                                              @play="onPlayerPlay($event)"
                                              @pause="onPlayerPause($event)"
                                              @ended="onPlayerEnded($event)"
                                              @loadeddata="onPlayerLoadeddata($event)"
                                              @waiting="onPlayerWaiting($event)"
                                              @playing="onPlayerPlaying($event)"
                                              @timeupdate="onPlayerTimeupdate($event)"
                                              @canplay="onPlayerCanplay($event)"
                                              @canplaythrough="onPlayerCanplaythrough($event)"
                                              @ready="playerReadied"
                                              @statechanged="playerStateChanged($event)">
                                </video-player>
                            </el-col>
                            <el-col :span="12">
                                <el-row>
                                    <el-col :span="12">
                                        <div class="videos-content-item">
                                            <img src="../assets/m0.png" alt="">
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="videos-content-item">
                                            <img src="../assets/m10.jpg" alt="">
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="12">
                                        <div class="videos-content-item">
                                            <img src="../assets/m2.jpg" alt="">
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="videos-content-item">
                                            <img src="../assets/m6.jpg" alt="">
                                        </div>
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                        <el-row v-for="(viedoItem,index) in monitorItems" :key="index">
                            <el-col :span="6" v-for="items in viedoItem" :key="items.key">
                                <div class="videos-content-item">
                                    <img :src="items.imgUrl" alt="">
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </transition>


            </div>
        </div>
    </div>
</template>

<script>
    import DataHeaderBox from '@/components/ToolTop'

    import SysHeaderBox from '@/components/SysHeader'
    import BorderBox from '@/components/BoderCompontents'

    import {videoPlayer} from 'vue-video-player'


    import m0 from '../assets/m0.png';
    import m2 from '../assets/m2.jpg';
    import m5 from '../assets/m5.jpg';
    import m6 from '../assets/m6.jpg';
    import m7 from '../assets/m7.jpg';
    import m9 from '../assets/m9.jpg';
    import m10 from '../assets/m10.jpg';


    export default {
        name: 'HomePage',
        components: {DataHeaderBox, SysHeaderBox, videoPlayer, BorderBox},
        props: [],
        data() {
            return {
                showVideos: true,
                playerOptions: {
                    // videojs options
                    muted: true,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        src: "http://pic.ibaotu.com/00/25/86/008888piCNE6.mp4"
                    }],
                    poster: m9,
                },

                logoHeaderActive: '1',
                activeIndex: '1',
                typeActiveIndex: '2',
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
                },
                monitorCitys: [{
                    key: '1',
                    value: '西安'
                }, {
                    key: '2',
                    value: '北京'
                }, {
                    key: '3',
                    value: '上海'
                }, {
                    key: '4',
                    value: '深圳'
                }, {
                    key: '5',
                    value: '广州'
                }, {
                    key: '6',
                    value: '南京'
                }, {
                    key: '7',
                    value: '杭州'
                }, {
                    key: '8',
                    value: '重庆'
                }],
                monitorItems: [
                    [{
                        key: '1',
                        imgUrl: m0
                    }, {
                        key: '1',
                        imgUrl: m5
                    }, {
                        key: '1',
                        imgUrl: m6
                    }, {
                        key: '1',
                        imgUrl: m7
                    }],
                    [{
                        key: '1',
                        imgUrl: m7
                    }, {
                        key: '1',
                        imgUrl: m9
                    }, {
                        key: '1',
                        imgUrl: m10
                    }, {
                        key: '1',
                        imgUrl: m5
                    }],
                    [{
                        key: '1',
                        imgUrl: m6
                    }, {
                        key: '1',
                        imgUrl: m0
                    }, {
                        key: '1',
                        imgUrl: m2
                    }, {
                        key: '1',
                        imgUrl: m10
                    }]
                ]
            }
        },
        mounted: function () {
            setTimeout(() => {
                // console.log('dynamic change options', this.player)
                this.player.muted(false)
            }, 500)
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        },
        methods: {
            handleCitySelect(key, keyPath) {
//                console.log(key, keyPath);
                let _this = this;
                _this.showVideos = false;
                setTimeout(function () {
                    _this.showVideos = true;
                }, 500)

            },
            // listen event
            onPlayerPlay(player) {
                // console.log('player play!', player)
            },
            onPlayerPause(player) {
                // console.log('player pause!', player)
            },
            onPlayerEnded(player) {
                // console.log('player ended!', player)
            },
            onPlayerLoadeddata(player) {
                // console.log('player Loadeddata!', player)
            },
            onPlayerWaiting(player) {
                // console.log('player Waiting!', player)
            },
            onPlayerPlaying(player) {
                // console.log('player Playing!', player)
            },
            onPlayerTimeupdate(player) {
                // console.log('player Timeupdate!', player.currentTime())
            },
            onPlayerCanplay(player) {
                // console.log('player Canplay!', player)
            },
            onPlayerCanplaythrough(player) {
                // console.log('player Canplaythrough!', player)
            },
            // or listen state event
            playerStateChanged(playerCurrentState) {
                // console.log('player current update state', playerCurrentState)
            },
            // player is ready
            playerReadied(player) {
                // seek to 10s
                player.currentTime(10)
                // console.log('example 01: the player is readied', player)
            }
        }
    }
</script>
