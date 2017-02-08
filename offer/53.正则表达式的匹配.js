/**
 * Created by Administrator on 2017-2-3.
 * 实现正则表达式中的. 和 *的匹配判断
 * 请实现一个函数用来匹配包括'.'和'*'的正则表达式。
 * 模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。
 * 在本题中，匹配是指字符串的所有字符匹配整个模式。
 * ，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配
 * "" ,".*"应该返回true;
 */
//s, pattern都是字符串
function match(s, pattern)
{
    // write code here
    var p = 0;
    var q = 0;
    var len1 = s.length;
    var len2 = pattern.length;
    var count = 0;
    if(s == pattern){
        return true;
    }
    while(p < len1 && q < len2){
        if(s.charAt(p) == pattern.charAt(q)){
            p++;
            q++;
        }
        else if(pattern.charAt(q) == '.'){
            p++;
            q++;
        }
        else if(pattern.charAt(q) == '*'){

            while(p < len1 && s.charAt(p) == pattern.charAt(q-1) || p < len1 && pattern.charAt(q-1) == '.' ){
                p++;
                count++;
            }
            q++;
             while (pattern.charAt(q) == s.charAt(p-1)){
                 count--;
                 q++;
             }
             if(count < 0){
                 return false;
             }
        }
        else if(q < len2 - 1 && pattern.charAt(q+1) == '*'){
            q = q+2;
        }
        else {
            return false;
        }


    }
    while(q < len2 - 1){
        if(pattern.charAt(q + 1) == '*'){
            q = q+2;
        }
    }
    if(p == len1 && q >= len2){
        return true;
}

return false;

}
var s = '';
var pattern = '.*';
var flag = match(s, pattern);
console.log(flag);