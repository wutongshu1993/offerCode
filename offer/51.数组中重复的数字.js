/**
 * Created by Administrator on 2017-1-30.
 */
function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    var len = numbers.length;
    var i;
    var obj = {};
    for(i = 0; i < len; i++){
        if(obj[numbers[i]]  == undefined){
            obj[numbers[i]] = numbers[i];
        }
        else {
            duplication[0] = numbers[i];
            return true;
        }
    }
    return false;
}
var flag = duplicate([1,2,3,2,4,5], []);
console.log(flag);