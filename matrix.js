
function createMatrix (col, row){
  var arr = [];
  var innerarr = [];

  for (var i = 0; i < col; i++){
    for (var j = 0; j < row; j++){
      innerarr.push(j);
    }
    arr.push(innerarr);
  }

  return arr;
}

console.log(createMatrix(2,3));