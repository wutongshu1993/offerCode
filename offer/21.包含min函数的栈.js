/**
 * Created by lh on 2017/1/6.
 */
var stack = [];
var helper = [];
function push(node)
{
    // write code here
    stack.push(node);
    var len = helper.length;
    if(len == 0){
        helper.push(node);
    }
    else {
        if(helper[len - 1] > node){
            helper.push(node)
        }
        else {
            helper.push(helper[len - 1]);
        }
    }
}
function pop()
{
    // write code here
    stack.pop();
    helper.pop();
}
function top()
{
    // write code here
}
function min()
{
    // write code here
    return helper[helper.length - 1];
}