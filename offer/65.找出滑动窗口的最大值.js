/**
 * Created by lh on 2017/2/21.
 * 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。
 * 例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，那么一共存在6个滑动窗口，
 * 他们的最大值分别为{4,4,6,6,6,5}； 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个：
 * {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}，
 * {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。
 * 解题思路：用一个队列存储当前窗口的最大值的下标，如果后面的值比index最后一个序号对应的值大，则取出最后一个数，
 * 直到该值小于index中对应的值为止，放入新的坐标。如果小，可能后面还用得着，所以则压入队列。
 * 存储序号是因为还要判断是否index[0]中的数已经不属于这个滑动窗口了。
 */
function maxInWindows(num, size)
{
    // write code here
    var index = [];//存入滑动组的最大值的下标
    var max = [];//存入滑动窗口的最大值
    var len = num.length;
    var i;
    if(size > 0 && len >= size){
        index[0] = 0;
       for(i = 0; i < size; i++){
           if(index.length > 0 && num[i] >= num[index[0]]){
               index.splice(0, index.length);
           }
           index.push(i);
       }
       for(i = size; i < len ; i++){
           max.push(num[index[0]]);
           while(index.length > 0 && num[i] >= num[index[index.length - 1]]){
               index.pop();
           }
           if(index.length > 0 && index[0] <= i - size){//将首位移除
               index.shift();
           }
           index.push(i);
       }
       max.push(num[index[0]]);
    }
return max;
}
var arr = maxInWindows([2,3,4,2,6,2,5,1], 3);
console.log(arr);
