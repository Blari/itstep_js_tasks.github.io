"use strict";

var x = parseInt(prompt("Число", 1234)); //Сумма чисел
var f1 = parseInt( x / 1000 );
var f2 = parseInt( (( x / 100 ) % 100 ) % 10 );
var f3 = parseInt( (x / 10 ) % 10 );
var f4 = parseInt( x % 10 );

f1 = ((f1 == 2) || (f1 == 5) || (f1 == 8)) ? "_" : f1;
f2 = ((f2 == 2) || (f2 == 5) || (f2 == 8)) ? "_" : f2;
f3 = ((f3 == 2) || (f3 == 5) || (f3 == 8)) ? "_" : f3;
f4 = ((f4 == 2) || (f4 == 5) || (f4 == 8)) ? "_" : f4;

console.log(f1);
console.log(f2);
console.log(f3);
console.log(f4);
console.log( String(f1) + String(f2) + String(f3) + String(f4) );