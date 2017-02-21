/**
 * Created by lh on 2017/2/13.
 */
function formatDate(oDate, sFormation) {
/*var reg = /((yyyy)|(yy))?.?((MM)|(M))?.?((dd)|(d))?.?((HH)|(H))?.?((mm)|(m))?.?((ss)|(s))?.?(w)?/g;
    var str = oDate.getFullYear()+'-'+(parseInt(oDate.getMonth())+1 > 9 ? parseInt(oDate.getMonth())+1 : '0'+parseInt(oDate.getMonth())+1)
    +'-'+(oDate.getDate() > 9 ? oDate.getDate() : '0'+oDate.getDate())+' '+(oDate.getHours() > 9 ?oDate.getHours() : '0'+oDate.getHours() )+
            ':'+oDate.getMinutes()> 9 ? oDate.getMinutes() : '0'+ oDate.getMinutes() +':'+oDate.getSeconds()>9?oDate.getSeconds():'0'+oDate.getSeconds()+
        ' '+oDate.getDay();*/
var res = '';
    var days = ['日', '一', '二', '三', '四', '五', '六'];
    if(sFormation.indexOf('yyyy') > -1){
        res+=oDate.getFullYear()+'-';
    }
    else if(sFormation.indexOf('yy') > -1){
        res += oDate.getFullYear().slice(2)+'-';
    }
    if(sFormation.indexOf('MM') > -1){
        res += (parseInt(oDate.getMonth())+1) > 9 ? parseInt(oDate.getMonth())+1 : '0'+(parseInt(oDate.getMonth())+1)+'-';
    }
    else if(sFormation.indexOf('dd') > -1){
        res += oDate.getDate() > 9 ? oDate.getDate() : '0'+oDate.getDate()+' '
    }
    if(sFormation.indexOf('d') > -1){
        res += oDate.getDate()+' '
    }
    else if(sFormation.indexOf('M') > -1){
        res += parseInt(oDate.getMonth())+1+' '
    }
    if(sFormation.indexOf('HH')> -1){
        res += (oDate.getHours() > 9 ?oDate.getHours() : '0'+oDate.getHours() )+':'
    }
    else if(sFormation.indexOf('H')> -1){
        res += oDate.getHours()+':';
    }
    if(sFormation.indexOf('hh')> -1){
        if(oDate.getHours() < 10){
            res += '0'+oDate.getHours()+':';
        }
        else {
            res += (oDate.getHours() > 12 ? oDate.getHours() - 12 : oDate.getHours())+':'
        }
    }
    else if(sFormation.indexOf('h')> -1){
        res = (oDate.getHours() > 12 ? oDate.getHours() - 12 : oDate.getHours())+':';
    }
    if(sFormation.indexOf('mm')> -1){
        res += (oDate.getMinutes() > 9 ?oDate.getMinutes() : '0'+oDate.getMinutes() )+':'
    }
    else if(sFormation.indexOf('m')> -1){
        res += oDate.getMinutes()+':';
    }
    if(sFormation.indexOf('ss')> -1){
        res += (oDate.getSeconds() > 9 ?oDate.getSeconds() : '0'+oDate.getSeconds() )+' '
    }
    else if (sFormation.indexOf('s')> -1){
        res += oDate.getSeconds()+' ';
    }
    if(sFormation.indexOf('w')> -1){
        res += '星期'+days[oDate.getDay()]+'-';
    }
    return res.slice(0, res.length-1);
}
function formatDate(oDate, sFormation) {
    var weekdayArr = ['日', '一', '二', '三', '四', '五', '六'];

    var obj = {
        yyyy: oDate.getFullYear(),
        yy: ('' + oDate.getYear()).slice(-2),
        MM: ('0' + (oDate.getMonth() + 1)).slice(-2),
        M: oDate.getMonth() + 1,
        dd: ('0' + oDate.getDate()).slice(-2),
        d: oDate.getDate(),
        HH: ('0' + oDate.getHours()).slice(-2),
        H: oDate.getHours(),
        hh: ('0' + (oDate.getHours()%12)).slice(-2),
        h: oDate.getHours()%12,
        mm: ('0' + oDate.getMinutes()).slice(-2),
        m: oDate.getMinutes(),
        ss: ('0' + oDate.getSeconds()).slice(-2),
        s: oDate.getSeconds(),
        w: weekdayArr[oDate.getDay()]
    };

    return sFormation.replace(/[a-z]+/ig, function($1) {
        return obj[$1];
    });
}
console.log(formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:m:ss 星期w'));