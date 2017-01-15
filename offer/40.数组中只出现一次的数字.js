/**
 * Created by lh on 2017/1/15.
 */
function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    var result = 0;
    var k = 0;
    var list = [0,0];
    var len = array.length;
    for(var i = 0; i < len; i++) {
        result = result ^ array[i];
    }

    while((result & 0x01) != 1){
        k++;
        result = result >> 1;
    }
    for(var p = 0; p < len; p++){
        if(isBit1(array[p], k)){
            list[0] = list[0] ^array[p];
        }
        else list[1] = list[1] ^ array[p];
    }
    return list;
}
function isBit1(num, k){
    num = num >> k;
    if((num & 0x01) == 1){
       return true;
    }
    return false;

}

var array = [2,4,3,6,3,2,5,5];
console.log(FindNumsAppearOnce(array));
