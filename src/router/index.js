const routers = [
    {
        path: '/',
        meta: {title: "首页-钢谷网大数据监控系统"},
        name: 'HomePage',
        component: (resolve) => require(['../views/HomePage.vue'], resolve)
    },
    {
        path: '/cloud-storage',
        meta: {title: "云仓储-钢谷网大数据监控系统"},
        name: 'CloudStorage',
        component: (resolve) => require(['../views/CloudStorage.vue'], resolve)
    }
    ,
    {
        path: '/navbar',
        meta: {title: "navbar"},
        name: 'navbar',
        component: (resolve) => require(['../views/navbar.vue'], resolve)
    }
];
export default routers;
