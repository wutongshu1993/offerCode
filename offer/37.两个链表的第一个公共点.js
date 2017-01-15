/**
 * Created by lh on 2017/1/14.
 */
function ListNode(x){
    this.val = x;
    this.next = null;
}
function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    var arr1 = [];
    var arr2 = [];
    var p = pHead1;
    var q = pHead2;
    var result = null;
    while(p!=null){
        arr1.unshift(p);
        p = p.next;
    }
    while(q!= null){
        arr2.unshift(q);
        q = q.next;
    }
    while (arr1.length >= 1 && arr2.length >= 1){
        if(arr1[0] != arr2[0]){
            return result;
        }
        else {
            result = arr1.shift();
            arr2.shift();
        }    }


    return result;
}
var n1 = new ListNode(1);
var n2 = new ListNode(2);
var n3 = new ListNode(3);
var n4 = new ListNode(4);
var n5 = new ListNode(5);
var n6 = new ListNode(6);
var n7 = new ListNode(7);
n1.next = n2;
n2.next = n3;
n3.next = n6;
n6.next = n7;
n4.next = n5;
n5.next = n6;
console.log(FindFirstCommonNode(n1, n4));

