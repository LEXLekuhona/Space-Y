for (var i = 1; i <= 4; i++) { //Область видимости
  function foo(x) {
    setTimeout(() => {
      console.log(x);
    }, 0)
  }
  foo(i);
}


/*var foo = 1;
setTimeout(() => {

}, 2000)

var bar = 2;

console.log(foo, bar);*/
