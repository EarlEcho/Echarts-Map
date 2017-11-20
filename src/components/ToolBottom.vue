<style scoped lang="less">

</style>
<template>
    <div class="data-footer-box clearfix">
        <div class="action-group g-lf left" v-if="showLeft">
            <el-button icon="icon iconfont icon-caidan1" @click="expandData"></el-button>
            <el-button icon="icon iconfont icon-jiugongge"></el-button>
        </div>
        <div class="action-group center" v-if="showCenter">
            <el-button icon="icon iconfont icon-arrow-down-circle-left"
                       @click="expandData"></el-button>
            <el-button icon="icon iconfont icon-arrow-down-circle-right"></el-button>
        </div>
        <div class="action-group g-rt right">
            <el-button icon="icon iconfont icon-msnui-menu" @click="expandData"></el-button>
            <el-button icon="icon iconfont icon-pie" @click="showPieChart"></el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'data-footer-box',
        props: ['leftItem', 'centerItem', 'pieCharts'],
        data() {
            return {
                showLeft: true,
                showCenter: true
            }
        },
        mounted: function () {
            this.showLeft = this.leftItem;
            this.showCenter = this.centerItem;
        },
        methods: {
            expandData: function () {

            },
            showPieChart: function () {
                this.pieCharts();
            },
        }
    }
</script>
