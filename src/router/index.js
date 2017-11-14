const routers = [
    {
        path: '/',
        meta: {title: "中国地图"},
        name: 'MapOfChina',
        component: (resolve) => require(['../views/MapOfChina.vue'], resolve)
    },
    {
        path: '/map2',
        meta: {title: "地图迁移2"},
        name: 'MapLines',
        component: (resolve) => require(['../views/MapLines.vue'], resolve)
    },
    {
        path: '/cricle',
        meta: {title: "雷达图"},
        name: 'Cricle',
        component: (resolve) => require(['../views/Cricle.vue'], resolve)
    }, {
        path: '/popup',
        meta: {title: "弹出层"},
        name: 'PopupTable',
        component: (resolve) => require(['../views/PopupTable.vue'], resolve)
    }
];
export default routers;
