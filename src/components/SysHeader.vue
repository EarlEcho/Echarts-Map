<style scoped lang="less">

</style>
<template>
    <div class="sys-header-box">
        <div class="homepage-navbar clearfix">
            <el-menu :default-active="logoHeaderActive" mode="horizontal" class="logo-header-navbar">
                <router-link to="/">
                    <el-menu-item index="1" ><span>首页</span></el-menu-item>
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
