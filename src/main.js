// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue';
// import VueRouter from 'vue-router';
import Routers from './router';
import App from './app.vue';
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';


// import {Table, TableColumn, Button, Tooltip, Row, Col, Tabs, TabPane, Dialog, Select, Option,Menu,MenuItem,DatePicker,Form,FormItem,Popover,Radio,RadioGroup} from 'element-ui'
//
//
// Vue.use(VueRouter);
//
// Vue.use(Table);
// Vue.use(TableColumn);
// Vue.use(Button);
// Vue.use(Tooltip);
// Vue.use(Row);
// Vue.use(Col);
// Vue.use(Tabs);
// Vue.use(TabPane);
// Vue.use(Dialog);
// Vue.use(Select);
// Vue.use(Option);
// Vue.use(Menu);
// Vue.use(MenuItem);
//
// Vue.use(DatePicker);
// Vue.use(Form);
// Vue.use(FormItem);
// Vue.use(Popover);
// Vue.use(Radio);
// Vue.use(RadioGroup);
// Vue.component(CollapseTransition.name, CollapseTransition);

// require videojs style [and custom videojs theme]
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')


// 路由配置
const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    if (to.meta.title) {//如果设置标题，拦截后设置标题
        document.title = to.meta.title
    }
    next()
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});








