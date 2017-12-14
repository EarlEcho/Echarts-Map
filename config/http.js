import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = '/ggw';
// POST传参序列化
axios.interceptors.request.use(function (config) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, function (error) {
    console.log("错误的传参");
    return Promise.reject(error);
});
// code状态码200判断
axios.interceptors.response.use(function (res) {
    if (res.status != '200') {
        console.log("请求失败");
        return Promise.reject(res);
    }
    return res;
}, function (error) {
    console.log("网络异常");
    return Promise.reject(error);
});

export default axios;
