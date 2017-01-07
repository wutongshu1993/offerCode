/**
 * Created by lh on 2017/1/3.
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字
 */
function printMatrix(matrix)
{
    // write code here
    if(matrix == null){
        return null;
    }
    var rows = matrix.length;
    var cols = matrix[0].length;
    var start = 1;
    var array = [];
    if(rows == 0 || cols == 0){
        return null;
    }

    while(rows > start * 2 && cols > start * 2){
        printCircle(array, matrix, start);
        start++;
    }
    return array;
}
function printCircle(array, matrix, start){
    var rows = metrix.length;
    var cols = matrix[0].length;
    var endX = rows - start - 1;
    var endY = cols - start - 1;
    var i;
    //向右
    for(i = start; start <= endY; i++){
        array.push(matrix[start][i])
    }
    //向下
    if(start < endX){
        for(i = start+1; i < endX; i++){
            array.push(matrix[i][endY]);
        }
    }
    //向左
    if(start < endX && start < endY){
        for(i = endY - 1; i >= start; i-- ){
            array.push(matrix[endX][i]);
        }
    }
    //向上
    if(start < endX && start < endY - 1){
        for(i = endX - 1; i >= start + 1; i++ ){
            array.push(matrix[i][start]);
        }
    }
}

