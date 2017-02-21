/**
 * Created by lh on 2017/2/14.
 */
function strLength(s, bUnicode255For1) {
    if(bUnicode255For1){
        return s.length;
    }
    else {
        var len = s.length;
        var res = 0;
        for(var i = 0; i < len; i++){
            if(s.charCodeAt(i) > 255){
                res += 2;
            }
            else{
                res += 1;
            }
        }
        return res;
    }
}