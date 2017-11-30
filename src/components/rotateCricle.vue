<style scoped lang="less">
    #preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #11213A;
    }

    #loader {
        display: block;
        position: relative;
        left: 50%;
        top: 50%;
        width: 1000px;
        height: 1000px;
        margin: -450px 0 0 -500px;
        border-radius: 50%;
        border: 30px solid transparent;
        border-top-color: #152d46;
        -webkit-animation: spin 8s linear infinite;
        animation: spin 8s linear infinite;
    }

    #loader-inner {
        width: 600px;
        height: 600px;
        background: -webkit-radial-gradient(circle, #051C27, #18364D, #11213A); /* Safari 5.1 - 6.0 */
        background: -o-radial-gradient(circle, #051C27, #18364D, #11213A); /* Opera 11.6 - 12.0 */
        background: -moz-radial-gradient(circle, #051C27, #18364D, #11213A); /* Firefox 3.6 - 15 */
        background: radial-gradient(circle, #051C27, #18364D, #11213A); /* 标准的语法 */
        -moz-box-shadow: 0px 0px 100px #11213A;
        -webkit-box-shadow: 0px 0px 100px #11213A;
        box-shadow: 0px 0px 50px #18364D;
        position: relative;
        left: 50%;
        top: 50%;
        margin: -280px 0 0 -280px;
        border-radius: 50%;
        -webkit-animation: spin 15s linear infinite;
        animation: spin 15s linear infinite;
        &:after {
            content: "";
            position: absolute;
            top: 30px;
            left: 30px;
            right: 30px;
            bottom: 30px;
            border-radius: 50%;
            border: 5px solid transparent;
            border-top-color: #2E6793;
            -webkit-animation: spin 5s linear infinite;
            animation: spin 5s linear infinite;
        }
        &:before {
            content: "";
            position: absolute;
            top: 90px;
            left: 90px;
            right: 90px;
            bottom: 90px;
            border-radius: 50%;
            border: 10px solid transparent;
            border-top-color: #12588b;
            -webkit-animation: spin 10s linear infinite;
            animation: spin 10s linear infinite;
        }

    }

    #loader:before {
        content: "";
        position: absolute;
        top: 30px;
        left: 30px;
        right: 30px;
        bottom: 30px;
        border-radius: 50%;
        border: 10px solid transparent;
        border-top-color: #3ec4cd;
        -webkit-animation: spin 5s linear infinite;
        animation: spin 5s linear infinite;
    }

    #loader:after {
        content: "";
        position: absolute;
        top: 90px;
        left: 90px;
        right: 90px;
        bottom: 90px;
        border-radius: 50%;
        border: 8px solid transparent;
        border-top-color: #12588b;
        -webkit-animation: spin 10s linear infinite;
        animation: spin 10s linear infinite;
    }

    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

</style>
<template>
    <div class="rotate-cricle-wrapper">
        <div id="preloader">
            <div id="loader">
                <div id="loader-inner">
                </div>
            </div>
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
