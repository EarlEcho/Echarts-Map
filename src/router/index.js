
const HomePage = () => import('@/views/HomePage.vue')
const CloudStorage = () => import('@/views/CloudStorage.vue')
const Arrow = () => import('@/views/testArrow.vue')

const routers = [
    {
        path: '/',
        meta: {title: "首页-钢谷网大数据监控系统"},
        component: HomePage
    },
    {
        path: '/cloud-storage',
        meta: {title: "云仓储-钢谷网大数据监控系统"},
        component: CloudStorage
    },
    {
        path: '/arrow',
        meta: {title: "测试"},
        component: Arrow
    }
];
export default routers;
