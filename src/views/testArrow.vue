<style scoped lang="less">
    .xxx-wrapper {
        padding: 200px;
        background-color: white;
    }

    .triangle-facing-right {
        display: inline-block;
        border-right: 6px solid #12669F;
        border-bottom: 6px solid #12669F;
        width: 16px;
        height: 16px;
        transform: rotate(-45deg) skew(8deg, 8deg);
        border-radius: 10%;
        margin-bottom: 30px;
        margin-left: -2px;

    }

    .triangle-facing-left {
        display: inline-block;
        border-left: 6px solid #12669F;
        border-bottom: 6px solid #12669F;
        width: 16px;
        height: 16px;
        transform: rotate(45deg) skew(-8deg, -8deg);
        border-radius: 10%;
        margin-right: -2px;
    }
</style>
<template>
    <div class="xxx-wrapper">
        <div class="triangle-facing-right" v-for="i in 8" ref="triangleRight"></div>
        <br>
        <div class="triangle-facing-left" v-for="i in 8" ref="triangleLeft"></div>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        props: [],
        data() {
            return {
                msg: 'hello vue'
            }
        },
        mounted() {
            let arrowsRight = this.$refs.triangleRight;
            let arrowsLeft = this.$refs.triangleLeft;
            let ops = 0.2;
            let i = 0;
            let length = arrowsRight.length;
            for (i; i < length; i++) {
                arrowsRight[i].style.opacity = ops;
                ops = ops + 0.1;
            }
            ops = 1;
            i = 0;
            for (i; i < length; i++) {
                arrowsLeft[i].style.opacity = ops;
                ops = ops - 0.1;
            }
        },
        methods: {}
    }
</script>
