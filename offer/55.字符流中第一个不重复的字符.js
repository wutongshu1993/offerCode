/**
 * Created by Administrator on 2017-2-3.
 * 请实现一个函数用来找出字符流中第一个只出现一次的字符。
 * 例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。
 * 当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。

 */
function Init()
{
    // write code here
}
var map = {}
var array = [];
var index = 0;
var temp;
//Insert one char from stringstream
function Insert(ch)
{
    // write code here
    temp = index;
    if(map.ch == null){
        map.ch = temp;
        array[index++] = ch;
    }
    else {
        array[map.ch]++;
    }

}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // write code here
    var len = array.length;
    var i;
    for(i = 0; i < len; i++){
        if(array[i] == 1){
            return array[i];
        }
    }
    return null;
}

