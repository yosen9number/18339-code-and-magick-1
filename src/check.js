var message;

function getMessage(a, b) {
  if (typeof a == 'boolean') {
    if (a) {
      message = 'Я попал в ' + b;
    } else {
      message = 'Я никуда не попал';
    }
  }
  else if (typeof a == 'number') {
    message = 'Я прыгнул на '+ a * 100 + ' сантиметров';
  }
  else if (typeof a == 'object' && typeof b == 'object') {
    for (var i = 0; i < a.length; i++ ) {
      a[i] = a[i] * b[i];
    }
    var length = a.reduce(function(sum, current){
      return sum + current;
    });
    message = 'Я прошёл ' + length + ' метров';
  }
  else if (typeof a == 'object') {
    var result = a.reduce(function(sum, current){
      return sum + current;
    });
    message = 'Я прошёл ' + result + ' шагов';
  }
  return message;
}
