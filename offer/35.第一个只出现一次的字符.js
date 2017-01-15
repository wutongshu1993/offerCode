/**
 * Created by lh on 2017/1/12.
 * 在一个字符串(1<=字符串长度<=10000，全部由大写字母组成)中找到第一个只出现一次的字符,并返回它的位置
 */
function FirstNotRepeatingChar(str)
{
    // write code here
    var map = {};
    var arr = str.split('');
    var i, temp,len = arr.length;
    for(i = 0; i < len ; i++){
        temp = arr[i];
        if(map[temp] == null ){
            map[temp] = 1;
        }
        else {
            map[temp] = 2;
        }
    }
    for( i = 0; i < len; i++){
        temp = arr[i];
        if(map[temp] == 1){
            return i;
        }
    }
    return -1;
}
console.log(FirstNotRepeatingChar('google'))