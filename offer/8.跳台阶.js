/**
 * Created by lh on 2016/12/31.
 * 跳台阶，一次可以跳1阶或2阶，n阶有多少种走法
 */
var d = [];
function jumpFloor(number)
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
            d[number -1] = jumpFloor(number -1);
        }
        if(d[number -2] == undefined){
            d[number -2] = jumpFloor(number -2);
        }
        d[number] = d[number - 1] + d[number -2];
        return d[number];
    }
}
