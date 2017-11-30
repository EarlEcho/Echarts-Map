<style scoped lang="less">
    .border-box {

        background-color: #1C2B44;
        border: solid 2px #96E6EC;
        position: static;
        #border1 {
            position: relative;
            background-color: #1C2B44;
        }
        #border2 {
            background-color: #1C2B44;
            position: relative;
        }
        .border-inner-content {
            position: relative;
        }

    }
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
