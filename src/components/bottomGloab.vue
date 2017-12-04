<style scoped lang="less">
    @keyframes rotate {
        0% {
            transform: rotateX(0deg) rotateY(0deg);
        }
        100% {
            transform: rotateX(360deg) rotateY(360deg);
        }
    }

    html {
        background: linear-gradient(#ff0 0%, #000 80%);
        height: 100%;
    }

    .wrap {
        position: absolute;
        z-index: 5;
        bottom: 25px;
        left: 44%;
        width: 200px;
        height: 200px;
        background-color: transparent;
        overflow: hidden;
        perspective: 1000px; /* 视图距元素的距离 相当于摄像机 */
        text-align: center;
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
        animation: rotate3d 20s infinite linear;
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
    .ball div:nth-child(odd){
        border: solid 1px #2b7080;
    }
    .ball div:nth-child(even){
        border: solid 1px #96E6EC;
    }

    .ball .x1 {
        transform: rotateY(0)
    }

    .ball .x2 {
        transform: rotateY(20deg)
    }

    .ball .x3 {
        transform: rotateY(40deg)
    }

    .ball .x4 {
        transform: rotateY(60deg)
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

    @keyframes rotate3d {
        0% {
            transform: rotate(-20deg) rotateX(-20deg) rotateY(0)
        }
        100% {
            transform: rotate(-20deg) rotateX(-20deg) rotateY(360deg)
        }
    }
</style>
<template>
    <div class="wrap">
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
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        }
    }
</script>
