/**
 * Created by lh on 2017/1/11.
 * 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 * 例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
 */
function PrintMinNumber(numbers)
{
    // write code here
    var len = numbers.length;
    var i;
    var res = "";
    numbers.sort(function (a, b) {
        var s1 = a+""+b;
        var s2 = b+""+a;
        return s1 - s2;
    });
    for(i = 0; i < len; i++){
        res += numbers[i];
    }
    console.log(res);
    return res;


}

var numbers = [];
PrintMinNumber(numbers);
