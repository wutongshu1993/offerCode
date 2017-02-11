/**
 * Created by Administrator on 2017-1-27.
 * 给一个数组，判断数组中的5个数是否为顺子，其中王用0表示
 */
function IsContinuous(numbers)
{
    // write code here
    if(numbers == null || numbers.length == 0){
        return false;
    }
    numbers.sort(function (a,b) {
        return a-b;
    });
    var len = numbers.length;
    var i = 0;
    var s = 0;
    for(i=0; i < len-1; i++){
        if(numbers[i] == 0){
            s++;
            continue;
        }
        if(numbers[i+1] == numbers[i]){
           return false;
        }
        if(numbers[i+1] - numbers[i] == 1  ){
            continue;
        }
        if(numbers[i+1] - numbers[i] - 1 <= s){
            s--;
            continue;
        }
        if(numbers[i+1] - numbers[i] -1 > s){
            return false;
        }

    }
    if(s < 0){
        return false;
    }
    return true;
}
var nums = [5,7,9,0,0];
console.log(IsContinuous(nums));