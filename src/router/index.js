const routers = [
    {
        path: '/',
        meta: {title: "中国地图"},
        name: 'MapOfChina',
        component: (resolve) => require(['../views/MapOfChina.vue'], resolve)
    }
];
export default routers;
