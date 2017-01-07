/**
 * Created by lh on 2017/1/6.
 */
function IsPopOrder(pushV, popV)
{
    // write code here
    var len = pushV.length;
    if(len == 0){
        return true;
    }
    var stack = [];
    var i = 0;
    var j = 0;
    stack.push(pushV[i++]);
    while(i < len || j < len){
        while(stack[stack.length - 1] != popV[j]){
            if(i < len){
                stack.push(pushV[i]);
            }
            else {
                return false;
            }
            i++;
        }
        stack.pop();
        j++;
    }
    return true;
}

console.log(IsPopOrder([1,2,3,4,5],[4,3,5,1,2]));