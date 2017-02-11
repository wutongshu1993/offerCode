/**
 * Created by Administrator on 2017-1-25.
 * 输入一个递增排序的数组和一个数字S，在数组中查找两个数，
 * 是的他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
 */
function FindNumbersWithSum(array, sum)
{
    // write code here
    var num1,num2,index,i,min;
    var res = [];
    min = Infinity;
    var len = array.length;
    for(i = 0; i < len; i++){
        num1 = array[i];
        index = binarySearch(array, sum - num1);
        if( index != -1){
            num2 = array[index];
            if(num1 * num2 < min){
                res[0] = num1;
                res[1] = num2;
                min = num1 * num2;
            }
        }
    }
    return res;
}
//这里的查找的数组应该要删除num1才对
function  binarySearch(array, key) {
    var len = array.length;
    var from = 0;
    var to = len - 1;
    var mid = Math.floor((from + to) / 2);
    while(from <= to ){
        mid = Math.floor((from + to) / 2);
        if(array[mid] < key){
            from = mid + 1;
        }
        else if(array[mid] > key){
            to = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}
//另一种方法
function solution(array, sum){
    var from = 0;
    var end = array.length - 1;
    var temp;
    var res = [];
    var min = Infinity;
    while(from < end){
        temp = array[from] + array[end];
        if(temp < sum){
            from++;
        }
        else if(temp > sum){
            end--;
        }
        else {
            if(array[from] * array[end] < min){
                res[0] = array[from];
                res[1] = array[end];
                min = array[from] * array[end];
            }
            from++;
        }
    }
    return res;
}
var array = [1,2,4,7,11,15];
console.log(solution(array, 15));