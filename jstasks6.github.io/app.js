// Удалить в массиве все числа, которые повторяются
//                         более двух раз.
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
function arrayPos(n) {
    //var n = randomInteger(3, 5);
    var array = [];
    let array2 = [];
    var str = "";
    var str2 = "";
    let sum = 0;
    let sum2 = 0;
    let strSum2 = "";
    let sum3 = 0;
    let strSum3 = "";

    for (var i = 0; i < n; i++) {
        array[i] = [];
        array2[i] = [];
        for (var j = 0; j < n; j++) {
            var elem = randomInteger(1, 9);
            array[i].push(elem);
            array2[i].push(elem);
            //sum += elem;
        }
        str += array[i].join(" ") + " \n";
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= n - 2; j++) {
            for (let k = 0; k <= n - 2; k++) {
                if (array[i][k] > array[i][k + 1]) {
                    let temp = array[i][k];
                    array[i][k] = array[i][k + 1];
                    array[i][k + 1] = temp;
                }
            }
        }
        str2 += array[i].join(" ") + " \n";
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                sum += array2[i][j];
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            sum2 += array2[i][j];
            strSum2 += +array2[i][j];
            if (array2[i][j + 1] != undefined) {
                strSum2 += " + ";
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            sum3 += array2[i][j];
            strSum3 += +array2[i][j];
            if (i < n - 1) {
                strSum3 += " + ";
            }
        }
    }
    return `Исходный массив:\n${str}\nСтроки по возростанию:\n${str2}\nСумма элементов по диагонали (исходный массив): ${sum}\nСумма элементов ниже главной диагонали(включая главную диагональ): ${strSum2} = ${sum2}\nСумма элементов выше главной диагонали(включая главную диагональ): ${strSum3} = ${sum3}`;
}

document.getElementById("buttonT1").onclick = function() {
    n = document.getElementById("arrayNum").value;
    document.getElementById("textAreaT1").value = arrayPos(n);
};
