/**
 * Created by lh on 2017/2/17.
 * 在N*N的数组中找所有横，竖，左上到右下，右上到左下四种方向的直线连续D个数字的和里面最大的值，输出一个整数，表示找到的和的最大值。
 */
//计算所有的横的最大和
function row_cal(array, d) {
    var n = array.length,
        row_max = 0,
        dp = new Array(),
        i,j;
    for(i = 0; i < n; i++){
        dp[i] = new Array();
        for(j = 0; j < n; j++){
            dp[i][j] = 0;
        }
    }
    for(i = 0; i < n; i++ ){
        for(j = 0; j < d; j++){
            dp[i][d-1] += array[i][j];
        }
        for(j = d; j < n-d+1; j++){
            dp[i][j] = Math.max(dp[i][j-1], dp[i][j-1] - array[i][j-d] + array[i][j]);
        }
        row_max = Math.max(row_max, dp[i][j-1]);
        // console.log(row_max);
    }
    return row_max;
}
//求一个数组的转置数组
function reverse_array(array) {
    var len = array.length,
        i,j,
        array2 = [];
    for(i = 0; i < len; i++){
        array2[i] = [];
    }
    for(i = 0; i < len; i++){
        var len2 = array[i].length;
        for(j = 0; j < len2; j++){
            array2[j][i] = array[i][j];
        }
    }
    return array2;
}
function col_cal(array, d) {
    var new_array = reverse_array(array);
    return row_cal(new_array, d);
};
//左上到右下
function l_r(array, d) {
    var dp = [],
        n = array.length,
        i;
    //初始化数组
    for(i = 0; i < n; i++){
        dp[i] = 0;
    }
    for(i = 0; i < d; i++){
        dp[d-1] += array[i][i];
    }
    // console.log('dp[1]'+dp[d-1]);
    for(i = d; i < n; i++){
        dp[i] = Math.max(dp[i-1], dp[i-1]-array[i-d][i-d] + array[i][i]);
        // console.log('opp'+dp[i]);
    }
    return dp[i-1];
}
//右上到左下
function r_l(array, d) {
    var dp = [],
        n = array.length,
        i;
    //初始化数组
    for(i = 0; i < n; i++){
        dp[i] = 0;
    }
    for(i = 0; i < d; i++){
        dp[d-1] += array[i][n-1-i];
    }
    // console.log('dp[1]'+dp[d-1]);
    for(i = d; i < n; i++){
        dp[i] = Math.max(dp[i-1], dp[i-1]-array[i-d][n-1-(i-d)] + array[i][n-1-i]);
        // console.log('llr'+dp[i]);
    }
    return dp[i-1];
}
//
var array = [
    [87, 98, 79, 61],
    [10, 27, 95, 70],
    [20, 64, 73, 29],
    [71, 65, 15, 0]

];
var res_row = row_cal(array, 2);
var res_col = col_cal(array, 2);
var res_l_r = l_r(array, 2);
var res_r_l = r_l(array, 2);
console.log(res_row);
console.log(res_col);
console.log(res_l_r);
console.log(res_r_l);
