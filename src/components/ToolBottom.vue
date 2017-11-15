<style scoped lang="less">

</style>
<template>
    <div class="data-footer-box">
        <div class="action-group g-lf" v-if="showLeft">
            <el-button icon="icon iconfont icon-caidan" @click="expandData"></el-button>
            <el-button icon="icon iconfont icon-jiugongge-copy"></el-button>
        </div>
        <div class="action-group box-center" v-if="showCenter">
            <el-button icon="icon iconfont icon-arrow-down-circle-left"
                       @click="expandData"></el-button>
            <el-button icon="icon iconfont icon-arrow-down-circle-right"></el-button>
        </div>
        <div class="action-group g-rt">
            <el-button icon="icon iconfont icon-msnui-menu" @click="expandData"></el-button>
            <el-button icon="icon iconfont icon-pie"></el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'data-footer-box',
        props: ['leftItem', 'centerItem'],
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

            }
        }
    }
</script>
