/**
 * Created by lh on 2017/2/12.
 * 获取 url 中的参数
 1. 指定参数名称，返回该参数的值 或者 空字符串
 2. 不指定参数名称，返回全部的参数对象 或者 {}
 3. 如果存在多个同名参数，则返回数组
 */
function getUrlParam(sUrl, sKey) {
    var params = sUrl.split('?')[1].split('#')[0].split('&');
    var res = {};
    var result;
    var i, len = params.length;
    for(i = 0; i < len; i++){
        var p = params[i].split('=');
        var key = p[0];
        var value = p[1];
        if(res[key]){
            res[key].push(value);
        }
        else {
            res[key] = [];
            res[key].push(value);
        }
    }
    if(sKey){
        for(var k in res){
            if(k == sKey){
                if(res[k].length == 1){
                    result = res[k][0];
                }
                else {
                    result = res[k];
                }
                return result;
            }
        }
        return '';
    }
    else {
        return res;
    }
}

function getUrlParam2(sUrl, sKey){
    var result = {};
    sUrl.replace(/\??(\w+)=(\w+)&?/g, function (w,k,v) {
        if(result[k]){
            var t = result[k];
            result[k] = [].concat(t, v);
        }
        else {
            result[k] = v;
        }
    });
    if(sKey){
        return result[sKey] || '';
    }
    else {
        return result;
    }
}
// console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'key'));
console.log(getUrlParam2('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'q'));