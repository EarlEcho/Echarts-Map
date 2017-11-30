<style scoped lang="less">
    #nav{
        background-color: white;
    }
    .nav-menu {
        display: block;
        background: #74adaa;
        width:600px;
        margin: 50px auto 150px;
    }
    .nav-menu > li {
        display: inline;
        float:left;
        border-right:1px solid #94c0be;
    }
    .nav-menu > li:last-child {
        border-right: none;
    }
    .nav-menu li a {
        color: #fff;
        display: block;
        text-decoration: none;
        font-family: 'sansationregular';
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
        font-smoothing: antialiased;
        text-transform: capitalize;
        overflow: visible;
        line-height: 20px;
        font-size: 20px;
        padding: 15px 30px 15px 31px;
    }
    /* animation domination */
    .three-d {
        -webkit-perspective: 200px;
        -moz-perspective: 200px;
        -ms-perspective: 200px;
        -o-perspective: 200px;
        perspective: 200px;
        -webkit-transition: all .5s linear;
        -moz-transition: all .5s linear;
        -ms-transition: all .5s linear;
        -o-transition: all .5s linear;
        transition: all .5s linear;
        position: relative;
    }

    .three-d:not(.active):hover {
        cursor: pointer;
    }

    .three-d:not(.active):hover .three-d-box,
    .three-d:not(.active):focus .three-d-box {
        -wekbit-transform: translateZ(-25px) rotateX(90deg);
        -moz-transform: translateZ(-25px) rotateX(90deg);
        -o-transform: translateZ(-25px) rotateX(90deg);
        -ms-transform: translateZ(-25px) rotateX(90deg);
        transform: translateZ(-25px) rotateX(90deg);
    }

    .three-d-box {
        -webkit-transition: all .5s ease-out;
        -moz-transition: all .5s ease-out;
        -ms-transition: all .5s ease-out;
        -o-transition: all .5s ease-out;
        transition: all .5s ease-out;
        -webkit-transform: translatez(-25px);
        -moz-transform: translatez(-25px);
        -ms-transform: translatez(-25px);
        -o-transform: translatez(-25px);
        transform: translatez(-25px);
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        -o-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-pointer-events: none;
        -moz-pointer-events: none;
        -ms-pointer-events: none;
        -o-pointer-events: none;
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
    }

    .front {
        -webkit-transform: rotatex(0deg) translatez(25px);
        -moz-transform: rotatex(0deg) translatez(25px);
        -ms-transform: rotatex(0deg) translatez(25px);
        -o-transform: rotatex(0deg) translatez(25px);
        transform: rotatex(0deg) translatez(25px);
    }
    .back {
        -webkit-transform: rotatex(-90deg) translatez(25px);
        -moz-transform: rotatex(-90deg) translatez(25px);
        -ms-transform: rotatex(-90deg) translatez(25px);
        -o-transform: rotatex(-90deg) translatez(25px);
        transform: rotatex(-90deg) translatez(25px);
        color: #FFE7C4;
    }

    .front, .back {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: #74adaa;
        padding: 15px 30px 15px 31px;
        color: white;
        -webkit-pointer-events: none;
        -moz-pointer-events: none;
        -ms-pointer-events: none;
        -o-pointer-events: none;
        pointer-events: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .nav-menu li .active .front,
    .nav-menu li .active .back,
    .nav-menu li a:hover .front,
    .nav-menu li a:hover .back {
        background-color: #51938f;
    }
</style>
<template>
    <div id="nav">
        <ul class="nav-menu clearfix">
            <li v-for="(items,index) in navList">
                <a href="#" class="three-d">
                    {{items.title}}
                    <span class="three-d-box"><span class="front">{{items.title}}</span><span class="back">{{items.title}}</span></span>
                </a>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: '',
        components: {},
        props: [],
        data() {
            return {
                navList:[{
                    title:'西安'
                },{
                    title:'北京'
                },{
                    title:'上海'
                },{
                    title:'深圳'
                },{
                    title:'广州'
                }]
            }
        },
        methods: {}
    }
</script>
