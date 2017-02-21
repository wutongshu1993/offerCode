/**
 * Created by lh on 2017/2/14.
 */
function isAvailableEmail(sEmail) {
var reg = /^[\w\d_\.\-]+\@[\w\d\-]+\.([\w\d]{2,4})+$/g
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    return reg.test(sEmail);
}
console.log(isAvailableEmail('123@qq.com'));