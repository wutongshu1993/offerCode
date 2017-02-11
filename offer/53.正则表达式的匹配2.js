/**
 * 正则表达式的匹配，考察状态机的知识
 */
var len1;
var len2;
function match(s, pattern)
{
    var p = 0;
    var q = 0;
    len1 = s.length;
    len2 = pattern.length;
    return matchCore(s, pattern, p, q);
}


function matchCore(s, pattern, p , q){
    if(p == len1 && q == len2){
        return true;
    }
    if(p != len1 && q == len2){
        return false;
    }


    if(pattern.charAt(q+1) == '*'){
        if(s.charAt(p) == pattern.charAt(q) || (pattern.charAt(q) == '.' && p < len1)){
            return matchCore(s, pattern, p, q+2) || matchCore(s, pattern, p+1, q) || matchCore(s, pattern, p+1, q+2);
        }

    else {
            return matchCore(s,pattern, p, q+2);
        }
    }

    if(s.charAt(p) == pattern.charAt(q) || (pattern.charAt(q) == '.' && p < len1)){
        return matchCore(s, pattern, p+1, q+1);
    }

    return false;
}
var s = 'a';
var pattern = '.*';
var flag = match(s, pattern);
console.log(flag);