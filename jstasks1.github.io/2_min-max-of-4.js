"use strict";
var x1 = parseInt(prompt("Первое число", 1));
var x2 = parseInt(prompt("Второе число", 2));
var x3 = parseInt(prompt("Третье число", 3));
var x4 = parseInt(prompt("Третье число", 4));

var max = ((x1 > x2) && (x1 > x3) && (x1 > x4)) ? x1 :
    ((x2 > x1) && (x2 > x3) && (x2 > x4)) ? x2 : 
    ((x3 > x1) && (x3 > x2) && (x3 > x4)) ? x3 : x4;

var min = ((x1 < x2) && (x1 < x3) && (x1 < x4)) ? x1 :
    ((x2 < x1) && (x2 < x3) && (x2 < x4)) ? x2 : 
    ((x3 < x1) && (x3 < x2) && (x3 < x4)) ? x3 : x4;

console.log("Максимальное число: ", max);
console.log("Минимальное число: ", min);

