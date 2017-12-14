import axios from '../../config/http'

let ggdp = {

    getAjax(url, callback) {
        axios({
            method: 'get',
            url: url,
        }).then((response) => {
            callback(response.data);
        }).catch((response) => {
        });
    },

    postAjax(url, data, callback) {
        axios({
            method: 'post',
            url: url,
            data: data
        }).then((response) => {
            console.log(response.data);
            callback(response.data);
        }).catch((response) => {
        });
    },

    //时间戳转 xxxx-xx-xx
    timestampToshortText(value) {
        var padding0 = function (m) {
            return m < 10 ? '0' + m : m
        };
        var time = new Date(value * 1000);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        return y + '-' + padding0(m) + '-' + padding0(d)
    },
//时间戳转 xxxx-xx-xx xx:xx(分)
    timestampToMText(value) {
        var padding0 = function (m) {
            return m < 10 ? '0' + m : m
        };

        var time = new Date(value * 1000);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        return y + '-' + padding0(m) + '-' + padding0(d) + ' ' + padding0(h) + ':' + padding0(mm);
    },

    //时间戳转 xxxx-xx-xx xx:xx(秒)
    timestampToLongText(value) {
        var padding0 = function (m) {
            return m < 10 ? '0' + m : m
        };

        var time = new Date(value * 1000);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return y + '-' + padding0(m) + '-' + padding0(d) + ' ' + padding0(h) + ':' + padding0(mm) + ':' + padding0(s);
    },
    //在url后面增加参数
    appendUrlParams(url, params) {
        if (url.indexOf('?') > 0) {
            return url + '&' + params;
        } else {
            return url + '?' + params;
        }
    },
    //循环
    foreach(arr, func) {
        for (var i in arr) {
            if (func(i, arr[i]) === false) {
                return false;
            }
        }
        return true;
    },
    //克隆
    clone(obj) {
        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj) return obj;

        // Handle Date
        if (obj instanceof Date) {
            var copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        // Handle Array
        if (obj instanceof Array) {
            var copy = [];
            for (var i = 0; i < obj.length; ++i) {
                copy[i] = dz.utils.clone(obj[i]);
            }
            return copy;
        }

        // Handle Object
        if (obj instanceof Object) {
            var copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = dz.utils.clone(obj[attr]);
            }
            return copy;
        }

        throw new Error("Unable to copy obj! Its type isn't supported.");
    },

};

export default ggdp
