/**
 * Created by lh on 2017/2/21.
 * 设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
 * 路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。
 * 如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。
 * 例如[a b c e s f c s a d e e]是3*4矩阵，其包含字符串"bcced"的路径，
 * 但是矩阵中不包含“abcb”路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。
 */
function hasPath(matrix, rows, cols, path)
{
    // write code here
    //将矩阵变形
   matrix = changeMatrix(matrix, rows, cols);
    var visited = new Array();
    var i, j;
    //初始化标记数组
    for(i =0; i < rows; i++){
        visited[i] = new Array();
        for( j = 0; j < cols; j++){
            visited[i][j] = false;
        }
    };

    for(i = 0; i < rows; i++){
        for(j = 0; j < cols; j++){
            if (dfs(matrix, i, j, path, visited)){
                return true;
            }
        }
    }
    return false;
}
//将一维数组转换为二维
function changeMatrix(matrix, rows, cols) {
    var matrixB = new Array();
    for(var i = 0; i < rows; i++){
        matrixB[i] = new Array();
        for(var j = 0; j < cols; j++){
            matrixB[i][j] = matrix[i * cols + j];
        }
    }
    return matrixB;
}
function dfs(matrix, i, j, word, visited) {
    var rows = matrix.length;
    var cols = matrix[0].length;
    if(i >=0 && i < rows && j >=0 && j < cols &&　!visited[i][j] && matrix[i][j] == word.charAt(0) ){
        visited[i][j] = true;
        if(word.length == 1 || dfs(matrix, i-1, j, word.slice(1), visited)){
            return true;
        }
        if(word.length == 1 || dfs(matrix, i+1, j, word.slice(1), visited)){
            return true;
        }
        if(word.length == 1 || dfs(matrix, i, j-1, word.slice(1), visited)){
            return true;
        }
        if(word.length == 1 || dfs(matrix, i, j+1, word.slice(1), visited)){
            return true;
        }
        visited[i][j] = false;
    }
    return false;
}
var res = hasPath(['a','b','c','e','s','f','c','s','a','d','e','e'], 3,4, 'abcb');
console.log(res);