"use strict";

var chet = '';
var nechet = '';
var x = parseInt(prompt("Число", 1234)); //Сумма чисел
var f1 = parseInt( x / 1000 );
var f2 = parseInt( (( x / 100 ) % 100 ) % 10 );
var f3 = parseInt( (x / 10 ) % 10 );
var f4 = parseInt( x % 10 );


if (f1%2 == 0) {
    chet += (f1 + " ") ;
} else {
    nechet += (f1 + " ");
}


if (f2%2 == 0) {
    chet += (f2 + " ") ;
} else {
    nechet += (f2 + " ");
}


if (f3%2 == 0) {
    chet += (f3 + " ") ;
} else {
    nechet += (f3 + " ");
}

if (f4%2 == 0) {
    chet += (f4 + " ") ;
} else {
    nechet += (f4 + " ");
}

console.log("Начальное число: ", x);
console.log("Четные числа: ", chet);
console.log("Нечетные числа: ", nechet);