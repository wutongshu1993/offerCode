/**
 * Created by Administrator on 2017-2-3.
 * 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
 * 例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。
 * 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。
[+-](0-9)[.[(0-9)][e|E[+/-](0-9)]]
 */
function isNumeric(s)
{
    // write code here
    var pattern = /[+-]{0,1}\d*(\.{0,1}\d*([eE][+-]{0,1}\d+){0,1}){0,1}/g
    if(!pattern.test(s)){
        return false;
    }
    if(s.match(pattern)[0] == s){
        return true;
    }
    else {
        return false;
    }


}
var s = '+-2';
var flag = isNumeric(s);
console.log(flag);


