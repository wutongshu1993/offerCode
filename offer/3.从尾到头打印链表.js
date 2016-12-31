/**
 * Created by lh on 2016/12/30.
 */
function ListNode(x){
    this.val = x;
    this.next = null;
}

function printListFromTailToHead(head)
{
    var arr = [];
    // write code here
    return recur(head,arr);

}

function recur(head, arr) {
    if(head == null ){
        return arr;
    }
    if(head.next == null){
        arr.push(head.val);
        return arr;
    }

    var next = head.next;
    recur(next, arr);
    arr.push(head.val);
    return arr;
}

var a = new ListNode(95);
var b = new ListNode(61);
var c = new ListNode(81);
var d = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
console.log(printListFromTailToHead(a));
