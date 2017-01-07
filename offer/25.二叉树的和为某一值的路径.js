/**
 * Created by lh on 2017/1/7.
 * 输入一颗二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
 */
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function FindPath(root, expectNumber)
{
    // write code here
    var res = [];
    var temp = [];
    dfs(res, temp, root, expectNumber);
    return res;
}
function dfs(res, temp, root, expectedNumber) {
    if(root == null){
        temp.push(0);
        return;
    }
    temp.push(root.val);
    if(root.left == null && root.right == null){
        if(root.val == expectedNumber){
            res.push(temp.slice(0));
            return;
        }
    }
    dfs(res, temp, root.left, expectedNumber - root.val);
    temp.pop();
    dfs(res, temp, root.right, expectedNumber - root.val);
    temp.pop();

}
var t1 = new TreeNode(10);
var t2 = new TreeNode(5);
var t3 = new TreeNode(12);
var t4 = new TreeNode(4);
var t5 = new TreeNode(7);
t1.left = t2;
t1.right = t3;
t2.left = t4;
t2.right = t5;
console.log(FindPath(t1, 22));
var a = [1,2,3,4];
var b = a.slice(0);
a.push(111);
console.log(a);
console.log(b);
