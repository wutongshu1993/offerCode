/**
 * Created by Administrator on 2017-1-30.
 * 将字符串转为整数，如果不合法则为0；
 * 如果前面为+/-则转换为对应的正负数;
 * 还需要考虑下溢出
 */
function StrToInt(str)
{
    // write code here
    var res = 0;
    var len = str.length;
    var i;
    var temp;
    var weight = 1;
    for(i = len - 1; i >= 0; i--){
        temp = str.charCodeAt(i) - '0'.charCodeAt(0);
        if( temp>= 0 &&　temp <= 9){
            res += temp * weight;
            weight *= 10;
        }
        else if(i == 0 && str.charAt(i) == '+' || i == 0 && str.charAt(i) == '-'){
            res = res * (str.charAt(i) == '+' ? 1 : -1);
        }
        else {
            return 0;
        }
    }
    return res;
}

var str = StrToInt("-001223");
console.log(str);

