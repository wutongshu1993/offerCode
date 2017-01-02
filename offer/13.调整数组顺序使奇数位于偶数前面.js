/**
 * Created by lh on 2017/1/1.
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，
 * 所有的偶数位于位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 * 如果不采用辅助数组的话，采用类似冒泡排序的想法，如果前者前偶后奇则交换。
 */
function reOrderArray(array)
{
    // write code here
    var arr1 = [];
    var arr2 = [];
    var len = array.length;
    var i;
    for(i = 0; i < len; i++){
        if(array[i] & 1 == 1){//奇数
            arr1.push(array[i]);
        }
        else{//偶数
            arr2.push(array[i]);
        }
    }
    return arr1.concat(arr2);
}

console.log(reOrderArray([2,3,4,5]));
console.log(2&1);