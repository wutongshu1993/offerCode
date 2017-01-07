/**
 * Created by lh on 2017/1/7.
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 */
function VerifySquenceOfBST(sequence)
{
    // write code here
    var len = sequence.length;
    if(sequence == null || len == 0){
        return false;
    }
    if(len == 1){
        return true;
    }
    var root = sequence[len - 1];
    var left = [];
    var right = [];
    var i, j;
    for(i = 0; i < len - 1; i++){
        if(sequence[i] < root){
            left.push(sequence[i]);
        }
        else break;
    }
    j = i;
    for(j = i; j < len - 1; j++){
        if(sequence[j] < root){
            return false;
        }
        else right.push(sequence[j]);
    }
    if(left.length == 0){
        return VerifySquenceOfBST(right);
    }
    if(right.length == 0){
        return VerifySquenceOfBST(left);
    }
    return VerifySquenceOfBST(left) && VerifySquenceOfBST(right);
}

var seq = [4,6,7,5];
console.log(VerifySquenceOfBST(seq));
