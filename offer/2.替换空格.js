/**
 * Created by lh on 2016/12/30.
 */

function replaceSpace(str)
{
    // write code here
    str = str.replace(/\s/g,"%20");
    return str;
}
console.log(replaceSpace("hello world of"));