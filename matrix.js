
/*jshint esversion: 6 */

var createMatrix = (function (row, col, fill){
  var arr = [];

  for (var i = 0; i < row; i++){
    var innerarr = [];
    for (var j = 0; j < col; j++){
      innerarr.push(fill);
    }
    arr.push(innerarr);
  }
  return arr;
})(2, 3, "old");

function augmentMatrix (arr, row, col, fill) {
  
  var outLength = arr.length;
  var initialLength = arr[0].length;
  var innerarr;
  var inLength;

  if (col < outLength || col < initialLength){
    throw new Error ('That ish dont fly.');
  } else {
    for (let i = 0; i < arr.length; i++){
              innerarr = arr[i];
        inLength = arr[i].length;
          for (let j = 0; j < (col-inLength); j++ ){
           innerarr.push(fill);
          }
    for (let k = arr.length; k < row; k++){
        innerarr = [];
        inLength = 0;
          for (let l = 0; l < (col-inLength); l++ ){
            innerarr.push(fill);
          }
        arr.push(innerarr);
      } 
    }
  }
  return arr;
}

console.log(augmentMatrix(createMatrix, 3,4,"new"));
