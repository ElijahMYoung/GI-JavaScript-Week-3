function excercise(e) {
  return function () {
    return e;
  };
}

var run = excercise("running");
console.log(run());
var swim = excercise("swimming");
console.log(swim());
