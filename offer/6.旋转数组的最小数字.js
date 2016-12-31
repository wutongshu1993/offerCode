/**
 * Created by lh on 2016/12/31.
 */
function minNumberInRotateArray(rotateArray)
{
    // write code here
    var i = 0;
    var len = rotateArray.length;
    if(len == 0){
        return 0;
    }
    if(len == 1){
        return rotateArray[0];
    }

    for(i = 1; i < len; i++){
        if(rotateArray[i] < rotateArray[i-1]){
            return rotateArray[i];
        }
    }
}
var arr = [3,4,5.1,1]
console.log(minNumberInRotateArray(arr));