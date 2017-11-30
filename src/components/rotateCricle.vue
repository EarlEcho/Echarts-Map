<style scoped lang="less">
    .rotate-cricle-wrapper {
        position: absolute;
        padding-top: 140px;
        z-index: -10;
        width: 100%;
        height: 1080px;
        background-color: #11213A;
    }

    .out_circle {
        width: 440px;
        height: 440px;
        border: 1px solid;
        border-radius: 50%;
        margin: 0 auto;
        position: relative;
        /*background-color: #f5f5f5;*/
        border: solid 5px white;
    }

    .nav_circle {
        width: 8px;
        height: 434px;
        float: left;
        position: absolute;
        background-color: white;
        top: -1px;
        left: 210px;
        text-align: center;
        /* border-radius: 60px; */
    }

    .r1 {
        transform: rotate(0deg) skew(0deg) scale(1);
        -ms-transform: rotate(0deg) skew(0deg) scale(1); /* IE 9 */
        -moz-transform: rotate(0deg) skew(0deg) scale(1); /* Firefox */
        -webkit-transform: rotate(0deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
        -o-transform: rotate(0deg) skew(0deg) scale(1);
        animation: rotate 10s linear infinite;
        -webkit-animation: rotate 10s linear infinite;
        -moz-animation: rotate 10s linear infinite;
        -o-animation: rotate 10s linear infinite;
    }

    .r2 {
        transform: rotate(45deg) skew(0deg) scale(1);
        -ms-transform: rotate(45deg) skew(0deg) scale(1); /* IE 9 */
        -moz-transform: rotate(45deg) skew(0deg) scale(1); /* Firefox */
        -webkit-transform: rotate(45deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
        -o-transform: rotate(45deg) skew(0deg) scale(1);
        animation: rotatef 10s linear infinite;
        -webkit-animation: rotatef 10s linear infinite;
        -moz-animation: rotatef 10s linear infinite;
        -o-animation: rotatef 10s linear infinite;
    }

    .r3 {
        transform: rotate(90deg) skew(0deg) scale(1);
        -ms-transform: rotate(90deg) skew(0deg) scale(1); /* IE 9 */
        -moz-transform: rotate(90deg) skew(0deg) scale(1); /* Firefox */
        -webkit-transform: rotate(90deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
        -o-transform: rotate(90deg) skew(0deg) scale(1);
        animation: rotates 10s linear infinite;
        -webkit-animation: rotates 10s linear infinite;
        -moz-animation: rotates 10s linear infinite;
        -o-animation: rotates 10s linear infinite;
    }

    .r4 {
        transform: rotate(135deg) skew(0deg) scale(1);
        -ms-transform: rotate(135deg) skew(0deg) scale(1); /* IE 9 */
        -moz-transform: rotate(135deg) skew(0deg) scale(1); /* Firefox */
        -webkit-transform: rotate(135deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
        -o-transform: rotate(135deg) skew(0deg) scale(1);
        animation: rotatet 10s linear infinite;
        -webkit-animation: rotatet 10s linear infinite;
        -moz-animation: rotatet 10s linear infinite;
        -o-animation: rotatet 10s linear infinite;
    }

    /*@keyframes rotate {
        0% {
            transform: rotate(0deg) skew(0deg) scale(1);
            -ms-transform: rotate(0deg) skew(0deg) scale(1); !* IE 9 *!
            -moz-transform: rotate(0deg) skew(0deg) scale(1); !* Firefox *!
            -webkit-transform: rotate(0deg) skew(0deg) scale(1); !* Safari ºÍ Chrome *!
            -o-transform: rotate(0deg) skew(0deg) scale(1);
        }
        100% {
            transform: rotate(360deg) skew(0deg) scale(1);
            -ms-transform: rotate(360deg) skew(0deg) scale(1); !* IE 9 *!
            -moz-transform: rotate(360deg) skew(0deg) scale(1); !* Firefox *!
            -webkit-transform: rotate(360deg) skew(0deg) scale(1); !* Safari ºÍ Chrome *!
            -o-transform: rotate(360deg) skew(0deg) scale(1);
        }
    }

    @keyframes rotatef {
        0% {
            transform: rotate(45deg) skew(0deg) scale(1);
            -ms-transform: rotate(45deg) skew(0deg) scale(1); !* IE 9 *!
            -moz-transform: rotate(45deg) skew(0deg) scale(1); !* Firefox *!
            -webkit-transform: rotate(45deg) skew(0deg) scale(1); !* Safari ºÍ Chrome *!
            -o-transform: rotate(45deg) skew(0deg) scale(1);
        }
        100% {
            transform: rotate(405deg) skew(0deg) scale(1);
            -ms-transform: rotate(405deg) skew(0deg) scale(1); !* IE 9 *!
            -moz-transform: rotate(405deg) skew(0deg) scale(1); !* Firefox *!
            -webkit-transform: rotate(405deg) skew(0deg) scale(1); !* Safari ºÍ Chrome *!
            -o-transform: rotate(405deg) skew(0deg) scale(1);
        }
    }

    @keyframes rotates {
        0% {
            transform: rotate(90deg) skew(0deg) scale(1);
            -ms-transform: rotate(90deg) skew(0deg) scale(1); !* IE 9 *!
            -moz-transform: rotate(90deg) skew(0deg) scale(1); !* Firefox *!
            -webkit-transform: rotate(90deg) skew(0deg) scale(1); !* Safari ºÍ Chrome *!
            -o-transform: rotate(90deg) skew(0deg) scale(1);
        }
        100% {
            transform: rotate(450deg) skew(0deg) scale(1);
            -ms-transform: rotate(450deg) skew(0deg) scale(1); !* IE 9 *!
            -moz-transform: rotate(450deg) skew(0deg) scale(1); !* Firefox *!
            -webkit-transform: rotate(450deg) skew(0deg) scale(1); !* Safari ºÍ Chrome *!
            -o-transform: rotate(450deg) skew(0deg) scale(1);
        }
    }

    @keyframes rotatet {
        0% {
            transform: rotate(135deg) skew(0deg) scale(1);
            -ms-transform: rotate(135deg) skew(0deg) scale(1); !* IE 9 *!
            -moz-transform: rotate(135deg) skew(0deg) scale(1); !* Firefox *!
            -webkit-transform: rotate(135deg) skew(0deg) scale(1); !* Safari ºÍ Chrome *!
            -o-transform: rotate(135deg) skew(0deg) scale(1);
        }
        100% {
            transform: rotate(495deg) skew(0deg) scale(1);
            -ms-transform: rotate(495deg) skew(0deg) scale(1); !* IE 9 *!
            -moz-transform: rotate(495deg) skew(0deg) scale(1); !* Firefox *!
            -webkit-transform: rotate(495deg) skew(0deg) scale(1); !* Safari ºÍ Chrome *!
            -o-transform: rotate(495deg) skew(0deg) scale(1);
        }
    }*/
</style>
<template>
    <div class="rotate-cricle-wrapper">
        <!--<div class="out_circle">
            <div class="slide"></div>
            <div class="nav_circle r1">
            </div>
            <div class="nav_circle r2">
            </div>
            <div class="nav_circle r3">
            </div>
            <div class="nav_circle r4">
            </div>
        </div>-->
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
