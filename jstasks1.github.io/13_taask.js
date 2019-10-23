"use strict";

let n = parseInt(prompt("Введите число", 1234));
let n1 = parseInt(n / 1000);
let n2 = parseInt( (n / 100) % 10);
let n3 = parseInt( (n / 10) % 10);
let n4 = parseInt( (n % 100) % 10);
let ns = n1 + n2 + n3 + n4;

if ( parseInt( n / 1000 ) >= 1 ) {
    console.log( ((ns % 7 == 0) ? "Число четырехзначное и кратное семи" : "Число четырехзначное и сумма чисел не кратна семи") );
}else{
    console.log( ((ns % 7 == 0) ? "Число трехзначное и кратное семи" : "Число трехзначное и сумма чисел не кратна семи") );
}