/**
 * Created by lh on 2017/1/2.
 */
function ListNode(x){
    this.val = x;
    this.next = null;
}
function ReverseList(pHead)
{
    // write code here
    if(pHead.val == null){
        return {};
    }
    var newHead = null;
    while(pHead != null){
        var next = pHead.next;
        pHead.next = newHead;
        newHead = pHead;
        pHead = next;
    }
    return newHead;
}
var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);

a.next = b;
b.next = c;

console.log(ReverseList({}));

