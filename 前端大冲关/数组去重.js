/**
 * Created by lh on 2017/2/13.
 */
Array.prototype.uniq2 = function () {
 var a = new Set();
    this.forEach(function (arr, i) {
        a.add(arr);
    })
    // return Array.from(new Set(this));
    return Array.from(a);
};
Array.prototype.uniq = function () {
   var map = {};//用map就不行，？？？
    var result = [];
    var i , len = this.length;
    var flag = true;
    for(i = 0; i < len; i++){
        if(result.indexOf(this[i]) == -1){//NaN和{}满足
            if(this[i] != this[i]){//只有NaN的时候满足，虽然{} ！= {} ，但是{}不满足条件，因为this[i]代表的是同一个对象
                if(flag){
                    flag = false;
                    result.push(this[i])
                }
            }
            else {
                result.push(this[i]);
            }
        }
    }
    return result;
};
Array.prototype.uniq3 = function () {
    var resArr = [];
    var flag = true;

    for(var i=0;i<this.length;i++){
        if(resArr.indexOf(this[i]) == -1){////NaN 和 {} 出现的情况
            if(this[i] != this[i]){   //排除 NaN
                if(flag){
                    resArr.push(this[i]);
                    flag = false;
                }
            }else{
                resArr.push(this[i]);
            }
        }
    }
    return resArr;
}
/*为什么通过率只有50%
Array.prototype.uniq = function () {
    var map = {};
    var result = [];
    var i , len = this.length;
    for(i = 0; i < len; i++){
        if(typeof this[i] === "object" && this[i] != null){
            result.push(this[i]);
        }
        else if(!map[this[i]]){
            result.push(this[i]);
            map[this[i]] = 1;
        }
    }
    return result;
};*/

//console.log([false, true, undefined,{}, null,null, NaN,  NaN,0, 1, {}, {}, 'a', 'a', NaN].uniq());
console.log([ undefined,undefined,{},{}, null,null, NaN,  NaN].uniq3());