/**
 * Created by lh on 2017/1/2.
 */
function ListNode(x){
 this.val = x;
 this.next = null;
 }
function Merge(pHead1, pHead2)
{
    // write code here

    var newHead = {};
    var root = newHead;
    // if( !pHead1.val && !pHead2.val){
    //     return newHead;
    // }
    // if( JSON.stringify(pHead1) == '{}' &&  JSON.stringify(pHead2) == '{}'){
    //     console.log(111)
    //     return newHead;
    // }
    if({} == null){
        console.log(111);
        return newHead;
    }
    while(pHead1 != null && pHead2 != null){
       if(pHead1.val < pHead2.val){
           newHead.next = pHead1;
           pHead1 = pHead1.next;
           newHead = newHead.next;
       }
       else{
           newHead.next = pHead2;
           pHead2 = pHead2.next;
           newHead = newHead.next;
       }

    }
    while (pHead1 != null){
        newHead.next = pHead1;
        pHead1 = pHead1.next;
        newHead = newHead.next;
    }
    while(pHead2 != null){
        newHead.next = pHead2;
        pHead2 = pHead2.next;
        newHead = newHead.next;
    }
    return root.next;
}
var a = new ListNode(1);
var b = new ListNode(6);
var c = new ListNode(9);

a.next = b;
b.next = c;

var d = new ListNode(2);
var e = new ListNode(5);
var f = new ListNode(6);

d.next = e;
e.next = f;

console.log(Merge({}, {}));
console.log({} == null)
console.log({} == undefined);