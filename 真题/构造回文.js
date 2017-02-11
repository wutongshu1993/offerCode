/**
 * Created by Administrator on 2017-2-7.
 */


function getResult(str){
    var str2 = new String(str).reverse();
    var len = LCS(str, str2);
    console.log(str.length - len);
}
function isPalindromic(str){
    var array = str.split('');
    if(array.reverse().join('') == str){
        return true;
    }
    return false;
}
//求a b两个数组的最长公共子序列
function LCS(a, b){
    var len1 = a.length;
    var len2 = b.length;
    var dp = [];
    var i, j;
    for(i=0; i < len1; i++){
        dp[i] = new Array();
    }
    for(i = 1; i <= len1; i++){
        for(j = 1; j <= len2; j++){
            if(a.charAt(i-1) == b.charAt(j-1)){
                dp[i][j] = dp[i-1][j-1]+1;
            }
            else{
                dp[i][j] = Math.max(dp[i-1][j]+1, dp[i][j-1]+1);
            }

        }
    }
    return dp[len1][len2];
}
var flag = isPalindromic("aba");
console.log(flag);