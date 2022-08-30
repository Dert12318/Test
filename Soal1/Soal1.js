var input = 5;

function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}
var matrix = Create2DArray(input);
for (let i = 0; i < input; i++) { 
  for (let j = 0; j < input; j++) { 
    if (i==0){
      matrix[i][j] = j+1;
    }else if (j==0){
      matrix[i][j] = i+1;
    }else{
      matrix[i][j] = matrix[i][0]*matrix[0][j]
    }
  }
}
console.table(matrix);
// Untuk run tinggal node Soal1.js