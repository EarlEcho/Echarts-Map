<style scoped lang="less">
    /*.border-box {
        width: 260px;
        height: 220px;
        margin: 0 auto;
        background-color: #11213A;
        border: solid 3px #96E6EC;
        position: static;
        #border1 {
            width: 260px;
            height: 180px;
            background-color: #11213A;
            position: relative;
            top: 20px;
            left: -3px;
        }
        #border2 {
            width: 210px;
            height: 220px;
            background-color: #11213A;
            position: relative;
            top: -24px;
            left: 22px;
        }
        .border-inner-content {
            !*border: solid 1px white;*!
            width: 260px;
            height: 220px;
            position: relative;
            top: 1px;
            left: -22px;
        }
    }*/
</style>
<template>
    <div class="border-box">
        <div id="border1">
            <div id="border2">
                <div class="border-inner-content">
                    <slot :data="data"></slot>
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
            return {
                data: []
            }
        },
        methods: {}
    }
</script>
