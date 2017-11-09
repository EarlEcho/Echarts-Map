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
    }
];
export default routers;
