"use strict";

// var x1 = parseInt(prompt("Первое число", 1));
// var x2 = parseInt(prompt("Второе число", 2));
// var x3 = parseInt(prompt("Третье число", 3));


function searchMax (x1,x2,x3){
    var max = ((x1 > x2) && (x1 > x3)) ? x1 :
    ((x2 > x1) && (x2 > x3)) ? x2 : x3;

    return max;
}
function searchMin (x1,x2,x3){

    var min = ((x1 < x2) && (x1 < x3)) ? x1 :
    ((x2 < x1) && (x2 < x3)) ? x2 : x3;

    return min;
}
function maxOfFour(x1,x2,x3,x4){
    let max = ((x1 >= x2) && (x1 >= x3) && (x1 >= x4)) ? x1 :
    ((x2 >= x1) && (x2 >= x3) && (x2 >= x4)) ? x2 : 
    ((x3 >= x1) && (x3 >= x2) && (x3 >= x4)) ? x3 : x4;
    return max;
}
function minOfFour(x1,x2,x3,x4){
    let min = ((x1 <= x2) && (x1 <= x3) && (x1 <= x4)) ? x1 :
    ((x2 <= x1) && (x2 <= x3) && (x2 <= x4)) ? x2 : 
    ((x3 <= x1) && (x3 <= x2) && (x3 <= x4)) ? x3 : x4;
    return min;
}
function chetStr(x){
    var chet = '';
    var nechet = '';
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
    return chet;
}
function neChetStr(x){
    var chet = '';
    var nechet = '';
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
    return nechet;
}
function randomNumber (){
    
    let x = Math.floor(Math.random() * 100);
    return x;
}
function randomFour(){
    let x = Math.floor(1000 + Math.random() * 9000);
    return x;
}
function randomFourT5(){
    let x = Math.floor(Math.random() * (3000 + 1));
    return x;
}
function swapNumber(x){

    var f1 = parseInt( x / 1000 );
    var f2 = parseInt( (( x / 100 ) % 100 ) % 10 );
    var f3 = parseInt( (x / 10 ) % 10 );
    var f4 = parseInt( x % 10 );

    f1 = ((f1 === 2) || (f1 === 5) || (f1 === 8)) ? "_" : f1;
    f2 = ((f2 === 2) || (f2 === 5) || (f2 === 8)) ? "_" : f2;
    f3 = ((f3 === 2) || (f3 === 5) || (f3 === 8)) ? "_" : f3;
    f4 = ((f4 === 2) || (f4 === 5) || (f4 === 8)) ? "_" : f4;

    return String(f1) + String(f2) + String(f3) + String(f4) ;
}

function zarplata(x) {
    var zp = x;
    var percent = "";

    if (x <= 0 ) {
        alert("Пора менять работу, брат! :)")
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
    else if  (x > 2000) {
        x = x - x * 0.21;
        percent = "21%";
    }
    let sum = 'Ваша зарплата ' + zp + ". Налог для Вас: " + percent + ' это ' + +((x * parseInt(percent) / 100).toFixed(2)) + ". Чистыми: " + x.toFixed(2);
    return sum;
}


document.getElementById("firstTask").onclick = function() {
    var x1 = document.getElementById("number1").value;
    var x2 = document.getElementById("number2").value;
    var x3 = document.getElementById("number3").value;

    document.getElementById("maxNumb").innerHTML = "Максимальное число: " + searchMax(x1,x2,x3);
    document.getElementById("minNumb").innerHTML = "Минимальное число: " + searchMin(x1,x2,x3);
};
document.getElementById("secondTask").onclick = function() {
    var x1 = parseInt(document.getElementById("t2number1").value);
    var x2 = parseInt(document.getElementById("t2number2").value);
    var x3 = parseInt(document.getElementById("t2number3").value);
    var x4 = parseInt(document.getElementById("t2number4").value);

    document.getElementById("maxOfFour").innerHTML = "Максимальное число: " + maxOfFour(x1,x2,x3,x4);
    document.getElementById("minOfFour").innerHTML = "Минимальное число: " + minOfFour(x1,x2,x3,x4);
};
document.getElementById("thirdTask").onclick = function(){
    var x = document.getElementById("t3number").value;

    document.getElementById("t3Chet").innerHTML = "Чётные числа: " + chetStr(x);
    document.getElementById("t3NeChet").innerHTML = "Нечётные числа: " + neChetStr(x);
};
document.getElementById('fourthTask').onclick = function(){
    let x = parseInt(document.getElementById('t4number').value);

    document.getElementById('t4Task').innerHTML = "Результат: " + swapNumber(x);
}
document.getElementById('fifthTask').onclick = function(){
    let x = parseInt(document.getElementById('t5number').value);

    document.getElementById('t5Task').innerHTML = "Результат: " + zarplata(x);
}

document.getElementById("randomNumbOfFour").onclick = function(){
    document.getElementById("t2number1").value = randomNumber();
    document.getElementById("t2number2").value = randomNumber();
    document.getElementById("t2number3").value = randomNumber();
    document.getElementById("t2number4").value = randomNumber();
};
document.getElementById("randomNumbT3").onclick = function(){
    document.getElementById("t3number").value = randomFour();
};
document.getElementById("randomNumb").onclick = function(){
    document.getElementById("number1").value = randomNumber();
    document.getElementById("number2").value = randomNumber();
    document.getElementById("number3").value = randomNumber();
};
document.getElementById("randomNumbT4").onclick = function(){
    document.getElementById("t4number").value = randomFour();
};
document.getElementById("randomNumbT5").onclick = function(){
    document.getElementById("t5number").value = randomFourT5();
};




