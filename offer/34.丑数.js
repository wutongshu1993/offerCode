/**
 * Created by lh on 2017/1/12.
 */

function GetUglyNumber_Solution(index)
{
    // write code here
    var res = [];
    var next = 1;
    res.push(1);
    var m2 = 0, m3 = 0, m5 = 0;
    var min, i;
    if(index <= 0){
        return 0;
    }
    while(next < index){
        i = 0;
        while(m2 <= res[next - 1]){
            m2 = res[i] * 2;
            i++;
        }
        i = 0;
        while(m3 <= res[next - 1]){
            m3 = res[i] * 3;
            i++;
        }
        i = 0;
        while(m5 <= res[next - 1]){
            m5 = res[i] * 5;
            i++;
        }
        min = Math.min(Math.min(m2, m3), m5);
        res.push(min);
        next++;
    }
    // console.log( res[index - 1]);
    return res[index - 1];
}
GetUglyNumber_Solution(4);