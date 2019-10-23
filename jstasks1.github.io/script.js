"use strict";
/*var x = parseInt(prompt("Число", 123)); //Сумма чисел
var f1 = parseInt( x / 100 );
var f2 = parseInt( (x / 10) % 10 );
var f3 = parseInt( x % 10 );
console.log(f1);
console.log(f2);
console.log(f3);

//перевертыш

if (f1 == f3){  
    console.log("true") 
} else ("false");*/

// поменять местами числа
/*var x = parseInt(prompt("Число", 1234)); //Сумма чисел
var f1 = parseInt( x / 1000 );
var f2 = parseInt( ((x / 100) % 100 ) % 10 );
var f3 = parseInt( (x / 10) % 10 );
var f4 = parseInt( x % 10 );
console.log(f1);
console.log(f2);
console.log(f3);
console.log(f4);
console.log(String(f1) + String(f3) + String(f2) + String(f4));*/


// Нахождение максимального и минимального числа

var x1 = parseInt(prompt("Первое число", 1));
var x2 = parseInt(prompt("Второе число", 2));
var x3 = parseInt(prompt("Третье число", 3));

var max = ((x1 > x2) && (x1 > x3)) ? x1 :
    ((x2 > x1) && (x2 > x3)) ? x2 : x3;

var min = ((x1 < x2) && (x1 < x3)) ? x1 :
    ((x2 < x1) && (x2 < x3)) ? x2 : x3;

console.log("Максимальное число: ", max);
console.log("Минимальное число: ", min);


/*if ( (x1 > x2) && (x1 > x3) ) {
    console.log("Максимальное число: ", x1);
}
else if ((x2 > x1) && (x2 > x3)) {
    console.log("Максимальное число: ", x2);
}
else if ((x3 > x1) && (x3 > x2)) {
    console.log("Максимальное число: ", x3);
}

if ( (x1 < x2) && (x1 < x3) ) {
    console.log("Минимальное число: ", x1);
}
else if ((x2 < x1) && (x2 < x3)) {
    console.log("Минимальное число: ", x2);
}
else if ((x3 < x1) && (x3 < x2)) {
    console.log("Минимальное число: ", x3);
}*/
