/**
 * Created by lh on 2017/1/15.
 */
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function IsBalanced_Solution(pRoot)
{
    // write code here
    if(pRoot == null){
        return true;
    }
    var left = getDepth(pRoot.left);
    var right = getDepth(pRoot.right);
    if(Math.abs(left - right) > 1){
        return false;
    }
    return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);
}
function getDepth(node){
    if(node == null){
        return 0;
    }
    var left = getDepth(node.left);
    var right = getDepth(node.right);
    return Math.max(left + 1, right + 1)
}
