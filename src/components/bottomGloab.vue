<style scoped lang="less">
    .temp-wrr {
        position: absolute;
        z-index: 2;
        bottom: 30px;
        zoom: 1;
        width: 100%;
        height: 220px;
        overflow: hidden;
        background-color: transparent;
        perspective: 1000px;
        div {
            box-sizing: border-box;
        }
    }

    .pa, .pa0 {
        position: absolute;
    }

    .pr {
        position: relative;
    }

    ol, ul {
        padding-left: 0;
        list-style-type: none;
    }

    .bg0 {
        width: 200px;
        height: 200px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: url('http://www.17sucai.com/preview/11/2017-02-10/hx/images/bg0.png') no-repeat center center;
        background-size: 150%;
    }

    .bg1 {
        width: 100%;
        height: 100%;
        background: url(../assets/logobk.png) no-repeat center center;
    }

    .hx-box {
        top: 50%;
        left: 50%;
        width: 200px;
        height: 200px;
        transform-style: preserve-3d;
        transform: translate(-50%, -50%) rotateY(75deg);
    }

    .hx-box ul {
        width: 200px;
        height: 200px;
        transform-style: preserve-3d;
        animation: hxz 20s linear infinite;
    }

    @keyframes hxz {
        0% {
            transform: rotateX(0deg);
        }
        100% {
            transform: rotateX(-360deg);
        }
    }

    .hx-box ul li {
        width: 200px;
        height: 200px;
        border: 4px solid #5ec0ff;
        border-radius: 1000px;
    }

    .hx-box ul li span {
        display: block;
        width: 100%;
        height: 100%;
        background: url('http://www.17sucai.com/preview/11/2017-02-10/hx/images/hx.png') no-repeat center center;
        background-size: 100% 100%;
        animation: hx 4s linear infinite;
    }

    @keyframes hx {
        to {
            transform: rotate(360deg);
        }
    }

    .hx-k2 {
        transform: rotateX(60deg) rotateZ(60deg)
    }

    .hx-k3 {
        transform: rotateX(-60deg) rotateZ(-60deg)
    }
</style>
<template>
    <div class="temp-wrr">
        <div class="bg0 pa">
            <div class="bg1"></div>
        </div>
        <div class="hx-box pa">
            <ul class="pr">
                <li class="hx-k1 pa0">
                    <span></span>
                </li>
                <li class="hx-k2 pa0">
                    <span></span>
                </li>
                <li class="hx-k3 pa0">
                    <span></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        props: [],
        data() {
            return {}
        },
        methods: {}
    }
</script>
