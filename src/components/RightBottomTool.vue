<style scoped lang="less">
    .right-bottom-box {
        height: 42px;
        line-height: 42px;
        padding: 0 10px;
    }

    .pages-group {
        width: 57%;
        display: inline-block;
        height: 100%;
    }

    .right-bottom-box .action-group {
        display: inline-block;
        height: 100%;
        width: 40%;
    }

    .right-bottom-box .box-center .el-button {
        margin: 0 10px;
    }

    .right-bottom-box .action-group .el-button,
    .right-bottom-box .pages-group .el-button {
        background: transparent;
        color: white;
        padding: 5px;
        border: none;
        font-size: 18px;
        vertical-align: middle;
    }
</style>
<template>
    <div class="right-bottom-box clearfix">
        <div class="pages-group right" v-show="showPages">
            <el-button icon="icon iconfont icon-arrow-down-circle-left"></el-button>
            <el-button icon="icon iconfont icon-arrow-down-circle-right"></el-button>
        </div>
        <div class="action-group g-rt right">
            <el-button icon="icon iconfont icon-msnui-menu" @click="showTableData"></el-button>
            <el-button icon="icon iconfont icon-weibiaoti111" @click="showLineChart"></el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'right-bottom-box',
        props: ['lineCharts', 'pages', 'tableDatas'],
        data() {
            return {
                showPages: true,
            }
        },
        mounted: function () {
            this.showPages = this.pages;
        },
        methods: {
            showTableData: function () {
                this.tableDatas();
            },
            showLineChart: function () {
                this.lineCharts();
            },
        }
    }
</script>
