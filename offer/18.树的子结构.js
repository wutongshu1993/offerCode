/**
 * Created by lh on 2017/1/3.
 * 输入两棵二叉树A，B，判断B是不是A的子结构。
 * 想法是先比较根节点是否相等，相等则进行下一步子节点的比较
 */
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    var res = false;
    if(pRoot1 != null && pRoot2 != null){
        if(pRoot1.val == pRoot2.val){
            res = doesTree1HasTree2(pRoot1, pRoot2);
        }
        if(!res){
            res = HasSubtree(pRoot1.left, pRoot2);
        }
        if(!res){
            res = HasSubtree(pRoot1.right, pRoot2);
        }
    }
    return res;
}
function doesTree1HasTree2(t1, t2){
    if(t2 == null){
        return true;
    }
    if(t1 == null){
        return false;
    }
    if(t1.val != t2.val){
        return false;
    }
    return doesTree1HasTree2(t1.left, t2.left) && doesTree1HasTree2(t1.right, t2.right);
}
