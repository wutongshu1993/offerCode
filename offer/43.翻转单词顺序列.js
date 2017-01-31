/**
 * Created by Administrator on 2017-1-25.
 */
function ReverseSentence(str)
{
    // write code here
    var reg = / /g;
    var a = str.split(reg);
    return a.reverse().join(' ');

}
console.log(ReverseSentence("i am a student."))