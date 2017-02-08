/**
 * Created by Administrator on 2017-2-3.
 */
function do_something(n, s, l){
    //你的代码
    if(n == 1){
        console.log(1);
        return 1;
    }
    var pernum = Math.floor(l / (s+1));
    if(pernum % 13  == 0){
        pernum = pernum - 1;
    }
    if(pernum > n && n %13 == 0){
        console.log(2);
        return 2;
    }
    var total = Math.ceil(n / pernum);
    console.log(total);
}
do_something(26, 1, 100);