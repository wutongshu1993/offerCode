/**
 * Created by lh on 2017/2/17.
 * 将AAABBCC编码成3A2B2C
 */
function decode(str) {
    var i=1, len = str.length, res='', count=1;
    while(i < len){
        if(str.charAt(i) == str.charAt(i-1)){
            count++;
        }
        else {
            res += count + str.charAt(i-1);
            count = 1;
        }
        i++;
    }
    res += count+str.charAt(i-1);
    return res;
}
console.log(decode('AAABBCCD'));
