function randomSring() {
    let str = "";
    let n = Math.floor(Math.random() * 10 + 5);

    for (let i = 0; i < n; i++) {
        if (i + 1 < n) {
            str += +Math.floor(Math.random() * 10) + ",";
        } else str += +Math.floor(Math.random() * 10);
    }
    str.slice(-1);

    return str;
}
//1. Возростающие последовательности из массива
function arrSort(arr) {
    let arr3 = [];
    let str = "";
    arr3 = arr.split(",");
    let el = [];
    let arr2 = [].concat(arr3); //копияисходного массива
    let newArray = [];
    let n = 0;

    //Цикл для поиска всех возростающих последовательностей
    //Включает единичные элементы

    for (let i = 0; i < arr2.length; i++) {
        i = 0; //Обнуляем счетчик цикла, каждый раз начиная с начала массива
        for (let i = 0; i < arr2.length - 1; i++) {
            if (arr2[i] < arr2[i + 1]) {
                //если первый элемент меньше второго, то проверяем сколько там тахих элементов
                n++; // счетчик количества элементов повозростанию
            } else break; //если первый элемент не больше второго, останавливаем цикл
        }

        el = arr2.splice(0, n + 1); //вырезаем из исходного массива и заносимв переменную возростающую последовательность

        newArray.push(el); //пушим эту последовательность в новый массив
        if (el.length > 1) {
            for (let k = 0; k < el.length; k++) {
                str += +el[k] + " ";
            }
            str += "\n";
        }

        el = []; //обнуляем
        n = 0; //обнуляем
    }

    //Цикл для удаления единичных массивов из массива

    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].length < 2) {
            //если длинна внутреннего массива меньше двух элементов, то вырезаем его
            newArray.splice(i, 1);
            i--;
        }
    }
    let maxArray = newArray[0];
    //Ищем самую длинную последовательность
    for (let i = 1; i < newArray.length; i++) {
        if (newArray[i].length > maxArray.length) {
            maxArray = newArray[i];
        }
    }
    let str2 = maxArray.join(" ");

    return `Исходный массив:\n${arr3}\n\nСтроки по возростанию:\n${str}\nСамая длинная последовательность:\n${str2}`;
}

document.getElementById("buttonT1").onclick = function() {
    let str = document.getElementById("inputT1").value;

    document.getElementById("textAreaT1").value = arrSort(str);
};

document.getElementById("buttonT1-0").onclick = function() {
    let str = randomSring();

    document.getElementById("inputT1").value = str;
};
