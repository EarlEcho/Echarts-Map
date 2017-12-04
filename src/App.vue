<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    @import "assets/css/common.css";
    @import "assets/fonts/iconfont.css";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        background-color: #11213A;
        box-sizing: border-box;
    }
    [v-cloak] {
        display: none;
    }
    .dialog-fade-enter-active {
        -webkit-animation: dialog-fade-in 1.2s;
        animation: dialog-fade-in 1.2s
    }

    .dialog-fade-leave-active {
        -webkit-animation: dialog-fade-out 1.2s;
        animation: dialog-fade-out 1.2s
    }

    @-webkit-keyframes dialog-fade-in {
        0% {
            transform: scale(1.23);
            opacity: 0
        }
        100% {
            transform: scale(1);
            opacity: 1
        }
    }

    @keyframes dialog-fade-in {
        0% {
            transform: scale(1.23);
            opacity: 0
        }
        100% {
            transform: scale(1);
            opacity: 1
        }
    }

    @-webkit-keyframes dialog-fade-out {
        0% {
            transform: scale(1);
            opacity: 1
        }
        100% {
            transform: scale(1.23);
            opacity: 0
        }
    }

    @keyframes dialog-fade-out {
        0% {
            transform: scale(1);
            opacity: 1
        }
        100% {
            transform: scale(1.23);
            opacity: 0
        }
    }

</style>
