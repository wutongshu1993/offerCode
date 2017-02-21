/**
 * Created by lh on 2017/1/2.
 * 输入一个链表，输出该链表中倒数第k个结点。
 * 采用快慢指针办法，一个指针比另一个快k，当快的到达末尾了，慢的即指向倒数第k个
 * 提交的时候，总会返回{NaN}是什么鬼
 */
function ListNode(x){
    this.val = x;
    this.next = null;
}
function FindKthToTail(head, k)
{
    // write code here
    var slow = head;
    var fast = head;
    if(head == null || k <=0){
        return Object.create(null);
    }
    while (fast != null && k > 1){
        fast = fast.next;
        k--;
    }
    if(fast == null){
        return Object.create(null);
    }
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
a.next = b;
b.next = c;
c.next = d;
console.log(FindKthToTail({}, 100));
