/**
 * Created by Administrator on 2017-1-25.
 模拟循环左移
 * abcXYZef -> XYZefabc
 */
function LeftRotateString(str, n)
{
    // write code here
   if(str == null){
       return "";
   }
        var str1 = str.slice(0, n);
        var str2 = str.slice(n);
        var res = str2.concat(str1);
        return res;


}
console.log(LeftRotateString(null, 9));
