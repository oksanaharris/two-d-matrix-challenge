
/*jshint esversion: 6 */

var createMatrix = (function (col, row, fill){
  var arr = [];

  for (var i = 0; i < col; i++){
    var innerarr = [];
    for (var j = 0; j < row; j++){
      innerarr.push(fill);
    }
    arr.push(innerarr);
  }
  return arr;
})(2, 3, "old");

function augmentMatrix (arr, col, row, fill) {
  
  var outLength = arr.length;
  var initialLength = arr[0].length;
  var innerarr;
  var inLength;

  if (col < outLength || row < initialLength){
    throw new Error ('That ish dont fly.');
  } else {
    for (let i = 0; i < arr.length; i++){
              innerarr = arr[i];
        inLength = arr[i].length;
          for (let j = 0; j < (row-inLength); j++ ){
           innerarr.push(fill);
          }
    for (let k = arr.length; k < col; k++){
        innerarr = [];
        inLength = 0;
          for (let l = 0; l < (row-inLength); l++ ){
            innerarr.push(fill);
          }
        arr.push(innerarr);
      } 
    }
  }
  return arr;
}

console.log(augmentMatrix(createMatrix, 3,4,"new"));
