/**
 * Created by lh on 2017/1/1.
 * 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
 * 注意：负数可能会陷入死循环
 * >> 带符号位移位，高位用符号位补齐
 *
 */
function NumberOf1(n)
{
    // write code here
    var num = 0;
    while(n){
        num += n & 0x01;
        n>>>=1;
    }
    return num;
}
console.log(NumberOf1(-2));
