function randomNumber() {
    var x = Math.floor(Math.random() * 100000000);
    return x;
}
function numberCount(x){
    var sum = 0;
    var ost = 0;
    i = 0;
    do {
        ost = x % 10;
        x = (x - ost) / 10;
        sum += ost;
        i++;
    } while (x != 0);
return i;

}
function maxNumber(){

}


function firstTask(x){
    var sum = 0;
    var ost = 0;
    do {
        ost = x % 10;
        x = (x - ost) / 10;
        sum += ost;
    } while (x != 0);
return sum;
}
function secondTask(x1,x2){
    var sum = "";
    var ost = 0;
    var i = 0;
//Посколько мы идем по числам с конца, то число перевернем
    do {
        ost = x1 % 10;
        x1 = (x1 - ost) / 10;
        sum += ost;
        i++;
       // console.log("i = ", i, "x2 = ", x2, " ", sum);
    } while (x1 != 0);

// Зажираем данные прошлого цикла 
    x1 = +sum;
    var sum = "";
    var ost = 0;
    var i = 0;
//Идя с конца по перевернутуму числу отсекаем цифру с порядковым номером x2
    do {
        if (x2 == i+1){
            ost = x1 % 10;
            x1 = (x1 - ost) / 10;
            sum += "";
            i++;
        } else {
            ost = x1 % 10;
            x1 = (x1 - ost) / 10;
            sum += ost;
            i++;
        }
    } while (x1 != 0);




return sum;
}
function thirdTask(x1){
    var sum = "";
    var ost = 0;
    var i = 1;
    s1 = 0;
    s2 = 0;
// Переворачиваем число
    do {
        if ( i == 1){
            ost = x1 % 10;
            x1 = (x1 - ost) / 10;
            sum += ost;
            s1 = +ost;
            i++;
        } else {
            ost = x1 % 10;
            x1 = (x1 - ost) / 10;
        }
        
    } while (x1 != 0);

        s2 = +ost % 10;
        return s1 + s2;
}
function fourthTask(){
    var str = "";
    var x;
    var max = 0;
    var min = 0;
    while (x != 0)
    {
        x = parseInt(prompt("Введите число", Math.floor(Math.random() * (100 - (-100) + 1) + -100)));

        if (max <= x && x != 0) {
            max = x;
            str += (x + " ");
        } else{
            if (x == 0){

            } else {
                str += (x + " ");
            }
        }
        
        if (min >= x && x != 0) {
           min = x; 
        } else {

        }  
    } 
    return str + "<br>Максимальное число: " + max + "<br>Минимальное число: " + min;
}
function fifthTask() {
    var str = "";
    var str1 = "";
    var x;
    var n = 1;
    while (x != 0)
    {
        x = parseInt(prompt("Введите число", Math.floor( Math.random() * 10 )));
        if (x == 0) {
            break;
        }else {
                y = x;
                do{ 
                    x *= y;
                    n++;
                } while (y > n);
                str += x + " ";
                str1 += y + " ";
                n = 1;
            }   
        }   

    return "Исходные числа: " + str1 + "<br>Измененные числа: " + str;
}

document.getElementById("t1RandomNumber").onclick = function(){
    document.getElementById("t1Number").value = randomNumber();
}
document.getElementById("t2RandomNumber").onclick = function(){
    document.getElementById("t2Number").value = randomNumber();
}
document.getElementById("t3RandomNumber").onclick = function(){
    document.getElementById("t3Number").value = randomNumber();
}
document.getElementById("t4RandomNumber").onclick = function(){
    var x1 = fourthTask();

    document.getElementById("t4Task1").innerHTML = "Исходные числа: " + x1;
    //document.getElementById("t3Task2").innerHTML = "Сумма перой и последней цифры: " + thirdTask(x1);
}
document.getElementById("t1Answer").onclick = function(){
    var x = parseInt(document.getElementById("t1Number").value);
    document.getElementById("t1Task1").innerHTML = "Число состоит из " + numberCount(x) + " цифр";
    document.getElementById("t1Task2").innerHTML = "Сумма цифр числа: " + firstTask(x);
}
document.getElementById("t2Answer").onclick = function(){
    var x1 = parseInt(document.getElementById("t2Number").value);
    var x2 = parseInt(document.getElementById("t2Number2").value);

    document.getElementById("t2Task1").innerHTML = "Исходное число: " + x1;
    document.getElementById("t2Task2").innerHTML = "Число после удаления: " + secondTask(x1,x2);
}
document.getElementById("t3Answer").onclick = function(){
    var x1 = parseInt(document.getElementById("t3Number").value);

    document.getElementById("t3Task1").innerHTML = "Исходное число: " + x1;
    document.getElementById("t3Task2").innerHTML = "Сумма перой и последней цифры: " + thirdTask(x1);
}
document.getElementById("t5RandomNumber").onclick = function(){
    var x1 = fifthTask();

    document.getElementById("t5Task1").innerHTML = x1;
}

