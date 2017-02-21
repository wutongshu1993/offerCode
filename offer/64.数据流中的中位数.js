/**
 * Created by lh on 2017/2/21.
 * 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。
 * 如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。
 * 需要自己申请一个全局变量，每次插入的时候注意要维护秩序
 */
var array = [];
function Insert(num)
{
    // write code here
    var len = array.length;
    if(len == 0){
        array.push(num);
        return;
    }
    //采用二分查找的方法，来找到正确的插入位置
    var mid = Math.floor((len-1) / 2);
    var pre = 0;
    var post = len - 1;
    while(pre <= post && post >=0 && pre <= len - 1){
        mid = Math.floor((post + pre) / 2);
        if(array[mid] < num && array[mid + 1] >= num){
            array.splice(mid+1, 0, num);
            console.log(array);
            return;
        }
        else if(array[mid] < num){
            pre = mid + 1;
        }
        else if(array[mid] == num){
            array.splice(mid, 0, num);
            console.log(array);
            return;
        }
        else if(array[mid] > num){
            post = mid - 1;
        }
    }
    if(pre > len -1 ){
        array.push(num);
        return;
    }
    if(post < 0){
        array.unshift(num);
        return;
    }

}
function GetMedian(){
    // write code here
    var len = array.length;
    if(len % 2 == 1){
        return array[Math.floor(len / 2)];
    }
    else {

        return ((array[Math.floor((len-1) / 2)] +array[ Math.floor((len + 1) / 2)]) / 2) .toFixed(2);
    }
}

Insert(7);
Insert(8);
Insert(1);
Insert(4);
Insert(5);
Insert(6);
var mid = GetMedian();
console.log(mid);