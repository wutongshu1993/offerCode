/**
 * Created by lh on 2017/1/14.
 */
function GetNumberOfK(data, k)
{
    // write code here
    var len = data.length;
    var p = getFirstK(data, k, 0, len - 1 );
    var count = 0;
    while(data[p] == k){
        count++;
        p++;
    }
    return count;
}
function getFirstK(data, k, start, end){
    if(start > end){
        return -1;
    }
    var mid = Math.floor((end + start) / 2);
    var ele = data[mid];
    if(ele < k){
        start = mid + 1;
    }
    else if(ele > k){
        end = mid -1;
    }
    else if(ele == k){
        if(mid > 0 && data[mid - 1] != k || mid == 0){
            return mid;
        }
        else {
            end = mid - 1;
        }
    }
    return getFirstK(data, k, start, end);
}
var arr = [1,2,3,3,3,3,4,5];
console.log(GetNumberOfK(arr, 3));