
function fibanachi(x){
    
    var x1 = 0;
    var x2 = 1;
    var f = 0;
    var str = "1 ";

    //0, 1, 1, 2, 3, 5, 8, 13, 21
    var t1 = performance.now();
    for(var i = 1; i < x; i++){
        f = x1 + x2;

        str += f + " ";

        x1 = x2; x2 = f;
    }
    var t2 = performance.now();
    var time = `Время выполнения: ${ (t2-t1).toFixed(3) } миллисекунд.`;

    return {
        first: str, 
        second: time,
    };
}
function factorial(x){
    var str = "1";
    var f = 1;
    var t1 = performance.now();
    for(var i = 2; x >= i; i++){
        f *= i;
        str += " * " + i;
    }
    var t2 = performance.now();
    var time = `Время выполнения: ${ (t2-t1).toFixed(3) } миллисекунд.`;

    return {
        first: "!" + x + " = " + str + " = " + f, 
        second: time,
    };
}
function starsLeft(n, n1, n2){
    var str = "";
    var a = 0;
    var t1 = performance.now();
for(var i = 1; i <= n; i++){
    a = 0;
    while(i > a){
        str += n1;
        a++;
    }
    

    for(var j = i; j < n; j++){
        str += n2;
    }

    str += "\n";
    var t2 = performance.now();
    var time = `Время выполнения: ${ (t2-t1).toFixed(3) } миллисекунд.`;
}
    return {
        first: str,
        second: time,
            };
}
function starsRight(n, n1, n2){
    var str = "";
    var a = 0;
    var j = 0;
    var t1 = performance.now();
    
for(var i = 1; i <= n; i++){
    a = i;
    while(n > a){
        str += n1;
        a++;
        j++;
    }
    

    for(j; j < n; j++){
        str += n2;
    }
    j = 0;
    str += "\n";
    var t2 = performance.now();
    var time = `Время выполнения: ${ (t2-t1).toFixed(3) } миллисекунд.`;
}
    return {
        first: str,
        second: time,
            };
}
function starsCenter(n, n1, n2){
    let str = '';
    let lenStr = 2*n - 1;
    let lenPart = n-1;
    let lenNumb = 1;
    var t1 = performance.now();

    

    for(let i = 0; i < n; i++){
        lenPart = n-1;
        lenPart -= i;

        // Формирование нулей слева 

        for(let i1 = 0; i1 < lenPart; i1++){

            str += n1;
        }

    // Формирование единиц в центре    

        for(let i2 = 0; i2 < lenNumb; i2++){
           
            str += n2;
        }
        lenNumb += 2;

    // Формирование нулей справа

        for(let i3 = 0; i3 < lenPart; i3++){
           
            str += n1;
        }

        str += "\n";
    }

    var t2 = performance.now();
    var time = `Время выполнения: ${ (t2-t1).toFixed(3) } миллисекунд.`;
    return {
        first: str,
        second: time,
    };
}
function starsCenter2(n, n1, n2){
    let str = '';
    let lenStr = 2*n - 1;
    let lenPart = n-1;
    let lenNumb = 1;
    var t1 = performance.now();



    for(let i = 0; i < n; i++){
        lenPart = 0; //0; 0; 0
        lenPart += i;//0; 1; 2;

    // Формирование нулей слева 

        for(let i1 = 0; i1 < lenPart; i1++){

            str += n1;
        }
    // Формирование единиц в центре    

        for(let i2 = 0; i2 < lenStr; i2++){
           
            str += n2;
        }
        lenStr -= 2;

    // Формирование нулей справа

        for(let i3 = 0; i3 < lenPart; i3++){ //2
           
            str += n1;
        }

        str += "\n";
    }

    var t2 = performance.now();
    var time = `Время выполнения: ${ (t2-t1).toFixed(3) } миллисекунд.`;
    return {
        first: str,
        second: time,
    };
}
function findSameNumbers(s1, s2){
    var str = '';
    var sameNumbers = '';
    var t1 = performance.now();
    let i = 1;
    let n = 1;
    let s2Origin = s2;
    let s1Origin = s1;
    //Находим количество символов первого числа
    
    do {
            if ( ( (s1 / n) > 0 ) && ( (s1 / n) < 10) ) {

            } else {
                n *= 10;
                i++;
            }
        } while ( (s1 / n) > 10 );
    
    let lenS1 = i;
    i = 1; n = 1; // Обнуляемся
    
    //Находим количество символов второго числа

    do {
        if ( ( (s2 / n) > 0 ) && ( (s2 / n) < 10) ) {

        } else {
            n *= 10;
            i++;
        }
    } while ( (s2 / n) > 10 );
    
    let lenS2 = i;
    
    //Погнали сравнивать числа

    for(i = 0; i < lenS1; i++){
        let ost = parseInt(s1 % 10); // Достаем последнее число

        for(i2 = 0; i2 < lenS2; i2++){

            let ost2 = parseInt(s2 % 10); //Достаем последнее число второй строки

            if( ost == ost2 ){  //Если числа совпали, сохраняем
                sameNumbers += ost2 + " ";
            }
            s2 = (s2 - ost2) / 10; //Удаляем последнее число второй строки
        }
        s2 = s2Origin; //востанавливаем вторую строку
        s1 = (s1 - ost) / 10; //Удалили последнее число первой строки
    };

    if(sameNumbers == ''){
        sameNumbers = 'Нет таких';
    };

    str = `Длинна первой строки: ${lenS1} cимвола(ов)\nДлинна второй строки: ${lenS2} символа(ов)\nОдинаковые числа: ${sameNumbers}`;   

    var t2 = performance.now();
    var time = `Время выполнения: ${ (t2-t1).toFixed(3) } миллисекунд.`;
    
    return {
        first: str,
        second: time,
    };
}
function generRandomNumber(){

    return parseInt( (Math.random() * 10000) + 1);
}

document.getElementById("task1Fibanachi").onclick = function(){

    
    var x = parseInt(document.getElementById("inputTask1").value);
    var fib = fibanachi(x);
    document.getElementById("task1TextArea").value = fib.first;
    document.getElementById("task1Time").innerHTML = fib.second;

}
document.getElementById("task2Factorial").onclick = function() {
    
    var x = parseInt( document.getElementById("inputTask2").value );
    var fac = factorial(x);

    document.getElementById("task2TextArea").value = fac.first;
    document.getElementById("task2Time").innerHTML = fac.second;
}
document.getElementById("task3Stars").onclick = function(){

    var x = parseInt(document.getElementById("inputTask3").value);
    var s1 = document.getElementById("firstSimbol").value;
    var s2 = document.getElementById("secondSimbol").value;

    document.getElementById("task3TextArea1").value = starsLeft(x, s1, s2).first;
    document.getElementById("task3_1Time").innerHTML = starsLeft(x).second;

    document.getElementById("task3TextArea2").value = starsRight(x, s1, s2).first;
    document.getElementById("task3_2Time").innerHTML = starsRight(x).second;

    document.getElementById("task3TextArea3").value = starsCenter(x, s1, s2).first;
    document.getElementById("task3_3Time").innerHTML = starsCenter(x).second;

    document.getElementById("task3TextArea4").value = starsCenter2(x, s1, s2).first;
    document.getElementById("task3_4Time").innerHTML = starsCenter2(x).second;
}
document.getElementById("task4SameNumbers").onclick = function(){

    var s1 = document.getElementById("firstSimbolTask4").value;
    var s2 = document.getElementById("secondSimbolTask4").value;

    document.getElementById("task4TextArea").value = findSameNumbers(s1, s2).first;
    document.getElementById("task4Time").innerHTML = findSameNumbers(s1, s2).second;


}
document.getElementById("task4RandNumber").onclick = function(){

    let x = generRandomNumber();
    let y = generRandomNumber();

    document.getElementById("firstSimbolTask4").value = x;
    document.getElementById("secondSimbolTask4").value = y;
}