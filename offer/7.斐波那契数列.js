/**
 * Created by lh on 2016/12/31.
 * 输入整数n，输出斐波那契数列的第n项
 */
var d = [];
function Fibonacci(n)
{
    if(n == 0){
        return 0;
    }
    if(n == 1 || n == 2){
        return d[n] = 1;;
    }
    else
    {
        if(d[n-1] == undefined){
            d[n-1] = Fibonacci(n-1);
        }
        if(d[n-2] == undefined){
            d[n-2] = Fibonacci(n-2);
        }
        return d[n] = d[n-1] + d[n-2];
    }
    // write code here
}

Fibonacci(5);
