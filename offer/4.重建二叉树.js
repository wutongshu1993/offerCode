/**
 * Created by lh on 2016/12/30.
 * 根据前序和中序重建二叉树
 */
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function reConstructBinaryTree(pre, vin)
{
    // write code here
}
function rebuild(pre, vin) {
    var len = pre.length;
    if(len < 1){
        return null;
    }
    var root = new TreeNode(pre[0]);
    var left_len = vin.indexOf(pre[0]);
    var right_len = len - left_len- 1;
    if(left_len == 0){
        root.left = null;
    }
    else {
        root.left = rebuild(pre.slice(1, left_len + 1), vin.slice(0, left_len));
    }
    if(right_len == 0){
        root.right = null;
    }
    else {
        root.right = rebuild(pre.slice(left_len+1), vin.slice(left_len + 1));
    }
    return root;
}
var pre = [1,2,4,7,3,5,6,8]
var vin = [4,7,2,1,5,3,8,6]
var result = rebuild(pre, vin);
console.log("a");


