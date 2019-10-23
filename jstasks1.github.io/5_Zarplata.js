"use strict";

var x = prompt("Укажите Вашу зарплату", 500);
var zp = x;
var percent = "";

if (x <= 0 ) {
    alert("пораменять работу, брат! :)")
} else if ( (x > 0) && (x <= 100) ) {
    x = x - x * 0.005;
    percent = "0.5%";
} else if ( (x > 100) && (x <= 300) ) {
    x = x - x * 0.05;
    percent = "5%";
} else if ( (x > 300) && (x <= 700) ) {
    x = x - x * 0.08;
    percent = "8%";
} else if ( (x > 700) && (x <= 2000) ) {
    x = x - x * 0.15;
    percent = "15%";
}

console.log('Ваша зарплата ' + zp + ". Налог для Вас: " + percent + ' это ' + +(x * parseInt(percent) / 100) + ". Чистыми: " + x );
