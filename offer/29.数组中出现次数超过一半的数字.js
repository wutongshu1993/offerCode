/**
 * Created by lh on 2017/1/10.
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
 * 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
 * 掌握一个o(n)的方法
 */
function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    if(!checkInvalid(numbers)){
        return 0;
    }
    var times =0;
    var len = numbers.length;
    var i;
    var candidate = numbers[0];
    for(i = 0; i < len; i++){
        if(times == 0){
            candidate = numbers[i];
            times = 1;
        }
        else {
            if(candidate == numbers[i]){
                times++;
            }
            else {
                times--;
            }
        }
    }
    if(!checkMoreThanHalf(numbers, candidate)){
        return 0;
    }
    return candidate;
    
}
function  checkInvalid(numbers) {
    if(numbers == null || numbers.length == 0){
        return false;
    }
    return true;
}

function checkMoreThanHalf(numbers, number ) {
   var len = numbers.length;
    var i, time = 0;
    for(i = 0; i < len; i++){
        if(numbers[i] == number){
            time++;
        }
    }
    if(time * 2 <= len){
        return false;
    }
    return true;
}

var arr = [1,2,3,4,2,2,2,8];
console.log(MoreThanHalfNum_Solution(arr));

