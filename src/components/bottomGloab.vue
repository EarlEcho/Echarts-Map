<style scoped lang="less">

    /*.beforeDots(@top:20px,@left:15px){
        position: relative;
        top: @top;
        left: @left;
        content: "";
        height: 3px;
        width: 3px;
        border-radius: 50%;
        float: left;
        background: white;
    }
*/

    html {
        background: linear-gradient(#ff0 0%, #000 80%);
        height: 100%;
    }

    .wrap {
        position: absolute;
        z-index: 1;
        bottom: 25px;
        left: 29%;
        width: 760px;
        height: 170px;
        background-color: transparent;
        perspective: 1000px; /* 视图距元素的距离 相当于摄像机 */
        text-align: center;
    }

    .arrow-left {
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        width: 300px;
        margin-top: 60px;
        padding-right: 32px;
        .blocks {
            float: right;
        }

    }

    .arrow-right {
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        width: 300px;
        margin-top: 60px;
        padding-left: 32px;
        .blocks {
            float: left;
        }
    }

    .arrow-animation {
        width: 300px;
        margin-bottom: 20px;
    }

    .btn-group {
        .blocks {
            display: inline-block;
            width: 72px;
            height: 25px;
            padding-top: 5px;
            border-top: solid 1px white;
            .block-item {
                width: 12px;
                height: 12px;
                background-color: #96E6EC;
                display: inline-block;
                margin: 0 3px;
            }
        }
    }

    .ball {
        height: 160px;
        width: 160px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -80px 0 0 -80px;
        transition: all .6s;

    }

    .ball:hover {
        transform: scale(1.15);
    }

    .ball_box {
        width: 100%;
        height: 100%;
        transform-style: preserve-3d; /* 默认flat 2D */
        animation: rotate3d 40s infinite linear;
        img {
            position: relative;
            top: 55px;
        }
    }

    .ball div {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        position: absolute;
        /*border: solid 1px white;*/
        top: 50%;
        left: 50%;
        margin: -50% 0 0 -50%;
        transform-style: preserve-3d;
    }

    .ball div:nth-child(odd) {
        border: solid 1px #2b7080;
    }

    .ball div:nth-child(even) {
        border: solid 1px #96E6EC;
    }

    .ball .x1 {
        transform: rotateY(0);
    }

    .ball .x2 {
        transform: rotateY(20deg);
    }

    .ball .x3 {
        transform: rotateY(40deg);
    }

    .ball .x4 {
        transform: rotateY(60deg);
    }

    .ball .x5 {
        transform: rotateY(80deg)
    }

    .ball .x6 {
        transform: rotateY(100deg)
    }

    .ball .x7 {
        transform: rotateY(120deg)
    }

    .ball .x8 {
        transform: rotateY(140deg)
    }

    .ball .x9 {
        transform: rotateY(160deg)
    }

    .ball .y1 {
        transform: rotateX(90deg) translateZ(64px) scale(0.60);
    }

    .ball .y2 {
        transform: rotateX(90deg) translateZ(48px) scale(0.80);
    }

    .ball .y3 {
        transform: rotateX(90deg) translateZ(32) scale(0.92);
    }

    .ball .y4 {
        transform: rotateX(90deg) translateZ(16px) scale(0.98);
    }

    .ball .y5 {
        transform: rotateX(90deg) translateZ(0);
    }

    .ball .y6 {
        transform: rotateX(90deg) translateZ(-16px) scale(0.98);
    }

    .ball .y7 {
        transform: rotateX(90deg) translateZ(-32px) scale(0.92);
    }

    .ball .y8 {
        transform: rotateX(90deg) translateZ(-48px) scale(0.80);
    }

    .ball .y9 {
        transform: rotateX(90deg) translateZ(-64px) scale(0.60);
    }

    @keyframes rotate {
        0% {
            transform: rotateX(0deg) rotateY(0deg);
        }
        100% {
            transform: rotateX(360deg) rotateY(360deg);
        }
    }

    @keyframes rotate3d {
        0% {
            transform: rotate(-20deg) rotateX(-20deg) rotateY(0)
        }
        50% {
            transform: rotate(-20deg) rotateX(-55deg) rotateY(180deg)
        }
        100% {
            transform: rotate(-20deg) rotateX(-20deg) rotateY(360deg)
        }
    }

    .triangle-facing-right {
        display: inline-block;
        border-right: 6px solid #12669F;
        border-bottom: 6px solid #12669F;
        width: 20px;
        height: 20px;
        transform: rotate(-45deg) skew(5deg, 5deg);
        border-radius: 10%;
        margin-left: -2px;

    }

    .triangle-facing-left {
        display: inline-block;
        border-left: 6px solid #12669F;
        border-bottom: 6px solid #12669F;
        width: 20px;
        height: 20px;
        transform: rotate(45deg) skew(-5deg, -5deg);
        border-radius: 10%;
        margin-right: -2px;
    }
</style>
<template>
    <div class="wrap">
        <div class="arrow-left">
            <div class="arrow-animation">
                <div class="triangle-facing-left" v-for="i in 8" ref="triangleLeft"></div>
            </div>
            <div class="btn-group">
                <div class="blocks">
                    <div class="block-item" v-for="i in 4" :key="i">

                    </div>
                </div>
            </div>
        </div>
        <div class="ball">
            <div class="ball_box">
                <div class="x1"></div>
                <div class="x2"></div>
                <div class="x3"></div>
                <div class="x4"></div>
                <div class="x5"></div>
                <div class="x6"></div>
                <div class="x7"></div>
                <div class="x8"></div>
                <div class="x9"></div>
                <img src="../assets/logobk.png" alt="">
                <div class="y1"></div>
                <div class="y2"></div>
                <div class="y3"></div>
                <div class="y4"></div>
                <div class="y5"></div>
                <div class="y6"></div>
                <div class="y7"></div>
                <div class="y8"></div>
                <div class="y9"></div>
            </div>
        </div>
        <div class="arrow-right">
            <div class="arrow-animation">
                <div class="triangle-facing-right" v-for="i in 8" ref="triangleRight"></div>
            </div>
            <div class="btn-group">
                <div class="blocks">
                    <div class="block-item" v-for="i in 4" :key="i">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
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
        }
    }
</script>
