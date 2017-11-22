const routers = [
    {
        path: '/',
        meta: {title: "中国地图"},
        name: 'homepage',
        component: (resolve) => require(['../views/HomePage.vue'], resolve)
    },
    {
        path: '/map',
        meta: {title: "中国地图"},
        name: 'MapOfChina',
        component: (resolve) => require(['../views/MapOfChina.vue'], resolve)
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
