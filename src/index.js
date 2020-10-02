
exports.min = function min (array) {
  
  if (array && array.length) {
    return Math.min.apply(null, array);
  } else {
    return 0;
  }

 
}

exports.max = function max (array) {
  if (array && array.length) {
    return Math.max.apply(null, array);
  } else {
    return 0;
  }

}

exports.avg = function avg (array) {
  if (array && array.length) {
    let sum = array.reduce((sum, current) => sum + current, 0);
    return sum / array.length;
  } else {
    return 0;
  }
}
