<style scoped lang="less">
    .sys-header-box {
        width: 100%;
        height: 164px;
        background: url(../assets/logo.png) no-repeat;
        background-size: 100%;
    }

    .sys-header-box .homepage-navbar {
        padding-left: 7px;
        height: 30px;
        margin-bottom: 1px;
    }

    .sys-header-box .homepage-navbar .el-menu {
        background: transparent;
    }

    .logo-header-navbar {
        width: 400px;
        margin: 70px 12%;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        border-bottom: none;
    }

    .logo-header-navbar .el-menu-item {
        height: 30px;
        width: 115px;
        text-align: center;
        line-height: 30px;
        border: 2px solid #2ca1f4;
        color: white;
        background-color: #11213a;
        transform: skewX(40deg);
        margin-right: 10px;
        border-bottom-color: #2ca1f4 !important;
    }

    .logo-header-navbar .el-menu--horizontal .el-menu-item:focus, .el-menu--horizontal .el-menu-item:hover {
        background-color: #11213A;
        color: white;
    }

    .logo-header-navbar span {
        display: inline-block;
        -webkit-transform: skew(-40deg);
        vertical-align: top;
        line-height: 30px;
    }

    .logo-header-navbar .iconfont {
        color: white;
        vertical-align: bottom;
        padding-right: 5px;
        line-height: 30px;
    }

    .logo-header-navbar .el-menu-item.is-active {
        background-color: #11213a;
        color: white;
    }

    /*菜单栏*/

    .homepage-right-toolbar {
        color: #007ccf;
        width: 550px;
        height: 40px;
        line-height: 40px;
        margin: 30px 30px;
        font-size: 15px;
    }

    .homepage-right-toolbar .timer {
        letter-spacing: 1px;
    }

    .homepage-right-toolbar .choose {
        margin: 0 20px;
    }

    .homepage-right-toolbar .tool-group i {
        margin: 0 7px;
        vertical-align: initial;
    }

</style>
<template>
    <div class="sys-header-box">
        <div class="homepage-navbar clearfix">
            <el-menu :default-active="logoHeaderActive" mode="horizontal" class="logo-header-navbar">
                <router-link to="/">
                    <el-menu-item index="1"><span>首页</span></el-menu-item>
                </router-link>
                <router-link to="/cloud-storage">
                    <el-menu-item index="2"><span><i class="icon iconfont icon-tilewarehouse"></i>云仓储</span>
                    </el-menu-item>
                </router-link>
                <router-link to="/">
                    <el-menu-item index="3"><span><i class="icon iconfont icon-chart"></i>交易监控</span></el-menu-item>
                </router-link>
            </el-menu>
        </div>
        <div class="homepage-right-toolbar clearfix g-rt">
            <span class="timer">2017-11-20 &emsp; 11:20:22 </span>
            <span class="choose">监测间隔 2分钟 </span>
            <span class="tool-group">
                    <i class="icon iconfont icon-yifu"></i>
                    <i class="icon iconfont icon-zhaopian"></i>
                    <i class="icon iconfont icon-windows"></i>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sys-header-box',
        components: {},
        props: [],
        data() {
            return {
                logoHeaderActive: '1',
            }
        },
        methods: {}
    }
</script>
