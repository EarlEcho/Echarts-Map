<style scoped lang="less">
    .homepage-wrapper {
        border: solid 1px;
        width: 1920px;
        min-height: 100%;
        background-color: #11213A;
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
            width: 1492px;
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
            /*font-weight: 600;*/
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
</style>
<template>
    <div class="homepage-wrapper">
        <sys-header-box></sys-header-box>
        <div class="data-content-box clearfix">
            <div class="data-left-wrapper g-lf">
                <div class="data-modules">
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
                    <data-footer-box :left-item="false" :center-item="false"></data-footer-box>
                </div>
                <div class="data-modules">
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
                    <data-footer-box :left-item="false" :center-item="false"></data-footer-box>
                </div>
                <div class="data-modules">
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
                    <data-footer-box :left-item="false" :center-item="false"></data-footer-box>
                </div>
            </div>
            <div class="video-right-wrapper g-rt">
                <div class="homepage-navbar clearfix">
                    <el-menu :default-active="activeIndex" class="video-navbar g-lf" mode="horizontal">
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
                <div class="videos-content-wrapper">
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
                                        <img src="/static/image/m0.jpg" alt="">
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="videos-content-item">
                                        <img src="/static/image/m1.jpg" alt="">
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <div class="videos-content-item">
                                        <img src="/static/image/m2.jpg" alt="">
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="videos-content-item">
                                        <img src="/static/image/m3.jpg" alt="">
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


            </div>
        </div>
    </div>
</template>

<script>
    import DataHeaderBox from '@/components/ToolTop'

    import DataFooterBox from '@/components/ToolBottom'
    import SysHeaderBox from '@/components/SysHeader'
    import {videoPlayer} from 'vue-video-player'


    export default {
        name: 'HomePage',
        components: {DataHeaderBox, DataFooterBox, SysHeaderBox, videoPlayer},
        props: [],
        data() {
            return {
                playerOptions: {
                    // videojs options
                    muted: true,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                    }],
                    poster: "/static/image/m9.jpg",
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
                        imgUrl: "/static/image/m4.jpg"
                    }, {
                        key: '1',
                        imgUrl: '/static/image/m5.jpg'
                    }, {
                        key: '1',
                        imgUrl: '/static/image/m6.jpg'
                    }, {
                        key: '1',
                        imgUrl: '/static/image/m7.jpg'
                    }],
                    [{
                        key: '1',
                        imgUrl: '/static/image/m8.jpg'
                    }, {
                        key: '1',
                        imgUrl: '/static/image/m9.jpg'
                    }, {
                        key: '1',
                        imgUrl: '/static/image/m10.jpg'
                    }, {
                        key: '1',
                        imgUrl: '/static/image/m11.jpg'
                    }],
                    [{
                        key: '1',
                        imgUrl: "/static/image/m6.jpg"
                    }, {
                        key: '1',
                        imgUrl: '/static/image/m0.jpg'
                    }, {
                        key: '1',
                        imgUrl: '/static/image/m2.jpg'
                    }, {
                        key: '1',
                        imgUrl: '/static/image/m10.jpg'
                    }]
                ]
            }
        },
        mounted: function () {
            // console.log('this is current player instance object', this.player)
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
