/**
 * Created by lh on 2016/12/31.
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 */
var d = [];
function jumpFloorII(number)
{
    // write code here
    if(number == 1){
        return d[number] = 1;
    }
    if(number == 2){
        return d[number] = 2;
    }
    else {
        if(d[number-1] == undefined){
            d[number -1] = jumpFloor(number -1) + 1;
        }
        if(d[number -2] == undefined){
            d[number -2] = jumpFloor(number -2) + 1;
        }
        d[number] = d[number - 1] + d[number -2] + 1;
        return d[number];
    }
}
jumpFloorII(4);
