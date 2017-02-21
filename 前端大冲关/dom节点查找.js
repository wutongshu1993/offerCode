/**
 * Created by lh on 2017/2/13.
 * 查找两个节点的最近的一个共同父节点，可以包括节点自身
 */
/*function commonParentNode(oNode1, oNode2) {
    var pNode1 = [];
    var i, len, n = 0;
    while(oNode1.parentNode != null){
        pNode1.push(oNode1.parentNode);
        oNode1 = oNode1.parentNode;
    }
    len = pNode1.length;
    while(oNode2.parentNode != null){
        for(i = n; i < len; i++){
            if(pNode1[i] == oNode2.parentNode){
                return oNode2.parentNode;
            }
            n++;
            oNode2 = oNode2.parentNode;
        }
    }
};*/
function commonParentNode(oNode1, oNode2) {
    if(oNode1.contains(oNode2)){
        return oNode1;
    }
    else {
         return commonParentNode(oNode1.parentNode, oNode2);

    }
}