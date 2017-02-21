/**
 * Created by lh on 2017/2/14.
 * 统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率
 1. 不限制 key 的顺序
 2. 输入的字符串参数不会为空
 3. 忽略空白字符
 输入例子:
 count('hello world')

 输出例子:
 {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
 */
function count(str) {
str = str.replace(/\s*/g,'');
    console.log(str);
    var len = str.length,
        map = {};
    for(var i = 0; i < len; i++){
        var key = str[i];
        if(map[key]){
            map[key]++;
        }
        else {
            map[key] = 1;
        }
    }
    return map;
}
console.log(count('hello world'));
