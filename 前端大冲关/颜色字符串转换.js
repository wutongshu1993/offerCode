/**
 * Created by lh on 2017/2/14.
 * 将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
 1. rgb 中每个 , 后面的空格数量不固定
 2. 十六进制表达式使用六位小写字母
 3. 如果输入不符合 rgb 格式，返回原始输入
 输入例子:
 rgb2hex('rgb(255, 255, 255)')

 输出例子:
 #ffffff
 */
function rgb2hex(sRGB) {
    var reg = /^rgb\((.+)\)/g,
        RGB = sRGB.replace(reg, '$1').replace(/ /g,''),
        res='#',
        rgbs = RGB.split(',');
    if(rgbs.length == 3){
        for(var i=0; i< 3;i++){
            if(rgbs[i] <= 255 && rgbs[i] >= 0){
                res += (rgbs[i]-0)>15?(rgbs[i]-0).toString(16):'0'+(rgbs[i]-0).toString(16);
            }
            else {
                return sRGB;
            }
        }
        return res;
    }
    else {
        return sRGB;
    }

}
//最多8位
function intToHex(s){
var map = {
    '0' : 0,
    '1': 1,
    '2':2,
    '3':3,
    '4':4,
    '5':5,
    '6':6,
    '7':7,
    '8':8,
    '9':9,
    '10':'a',
    '11':'b',
    '12':'c',
    '13':'d',
    '14':'e',
    '15':'f'
},
temp = 0,
    res = '';

while(s != 0 ){
temp = s & 0xf;
   res = map[temp] + res;
    s = s >> 4;
};
return res;
}
 console.log(rgb2hex('rgb(28,  255, 255)'));
