/**
 * Created by Administrator on 2017-1-30.
 * 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],
 * 其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
 * 利用eval函数屌爆了。
 * function multiply(array)
 {
     // write code here
     var b=[],arr=[];
     for(var i=0;i<array.length;i++){
         var arr1=array.slice(0,i);
         if(i==array.length-1)
             var arr2=[];
         else
             var arr2=array.slice(i+1);

         arr=arr1.concat(arr2);
         b[i]=eval(arr.join("*"));
     }
     return b;
 }
 */
function multiply(array)
{
    // write code here
    var multi_array = [];
    var len = array.length;
    var c = [];
    var d = [];
    var b = [];
    var i, j;

    if(array == null || len == 0){
        return [];
    }
    //初始化二维数组
    for(i = 0; i < len; i++){
        multi_array[i] = [];
    }
    for( i = 0; i < len; i++){
        for(j = 0; j < len; j++){
            if(i == j){
                multi_array[i][j] = 1;
            }
            else {
                multi_array[i][j] = array[i][j];
            }
        }
    }
    //计算c[i]
    c[0] = 1;
    for(i = 1; i < len; i++){
        c[i] = c[i-1] * array[i-1];
    }
    //计算d[i]
    d[len-1] = 1;
    for(i = len - 2; i >= 0; i--){
        d[i] = d[i+1] * array[i+1];
    }
    //计算结果b[i];
    for(i = 0; i < len; i++){
        b[i] = c[i] * d[i];
    }
    return b;
}
var res = multiply([120,60,40,30,24]);
console.log(res);