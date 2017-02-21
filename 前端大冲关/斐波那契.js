/**
 * Created by lh on 2017/2/13.
 */
function fibonacci(n) {
    if(n == 1){
        return 1;
    }
    if(n == 2){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(7));