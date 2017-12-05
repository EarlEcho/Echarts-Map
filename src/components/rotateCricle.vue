<style scoped lang="less">
    .preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #11213A;
    }
    .main-content {
        width: 62%;
        height: 62%;
        margin: 0 auto;
    }
    svg circle:first-child {
        animation: anticlockwise-trans 12s linear infinite;
        -webkit-animation: anticlockwise-trans 12s linear infinite;
        -webkit-transform-origin: 50px 50px;
        -moz-animation: anticlockwise 12s linear infinite;
        -o-animation: anticlockwise 12s linear infinite;
    }

    svg circle:nth-child(2) {
        animation: clockwise-trans 7s linear infinite;
        -webkit-animation: clockwise-trans 7s linear infinite;
        -webkit-transform-origin: 50px 50px;
        -moz-animation: clockwise 7s linear infinite;
        -o-animation: clockwise 8s linear infinite;
    }

    svg circle:last-child {
        animation: anticlockwise-trans 10s linear infinite;
        -webkit-animation: anticlockwise-trans 10s linear infinite;
        -webkit-transform-origin: 50px 50px;
        -moz-animation: anticlockwise 10s linear infinite;
        -o-animation: anticlockwise 10s linear infinite;
    }

    /*@keyframes anticlockwise {
        from {
            transform: rotate(0)
        }
        to {
            transform: rotate(360deg)
        }
    }

    @keyframes anticlockwise-trans {
        from {
            transform: rotate(360deg)
        }
        to {
            transform: rotate(0)
        }
    }

    @keyframes clockwise {
        from {
            transform: rotate(-360deg)
        }
        to {
            transform: rotate(0)
        }
    }

    @keyframes clockwise-trans {
        from {
            transform: rotate(-360deg)
        }
        to {
            transform: rotate(0)
        }
    }*/
</style>
<template>
    <div class="preloader">
        <div class="main-content">
            <svg version="1.1" id="L1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                    <circle fill="none" stroke="#18354B" stroke-width="5" stroke-miterlimit="15" stroke-dasharray="14.2472,14.2472" cx="50" cy="50" r="47" >
                    </circle>
                    <circle fill="none" stroke="#0D1C29" stroke-width="1" stroke-miterlimit="10" stroke-dasharray="10,10" cx="50" cy="50" r="39">
                    </circle>
                    <circle fill="none" stroke="#96E6EC" stroke-width="1" cx="50" cy="50" r="30" style="opacity:0.5;"/>
                    <circle fill="#11213A" stroke="#96E6EC" stroke-width="1" cx="50" cy="20" r="2" class="aaaa">
                    </circle>
            </svg>
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
