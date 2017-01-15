/**
 * Created by lh on 2017/1/10.
 */
function FindGreatestSumOfSubArray(array)
{
    // write code here
    var len = array.length;
    if(len == 0){
        return 0;
    }
    var dp = [];
    var max = array[0];
    dp[0] = array[0];
    var i;
    for(i = 1; i < len; i++){
        dp[i] = Math.max(dp[i-1] + array[i], array[i]);
        max = Math.max(max, dp[i]);
    }
    return max;
}

var arr = [6,-3,-2,7,-15,1,2,2];
console.log(FindGreatestSumOfSubArray(arr));