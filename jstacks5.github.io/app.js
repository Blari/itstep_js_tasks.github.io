// Удалить в массиве все числа, которые повторяются
//                         более двух раз.
function genericRandomArr() {
    let arr = [];
    let r = Math.floor(Math.random() * 10);

    for (let i = 0; i <= r; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

function deleteEllems(arr) {
    let newArray = [];
    let newArray1 = [];
    let newArray2 = [];
    let newArray3 = [];
    str = "";

    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        newArray1.push(arr[i]);
    }

    for (; arr.length != 0; ) {
        var elem = arr.splice(0, 1);
        elem[1] = 1;
        for (var j = 0; j < arr.length; j++) {
            if (elem[0] === arr[j]) {
                elem[1]++;
                arr.splice(j, 1);
                j--;
            }
        }

        newArray2.push(elem);
    }

    for (let i = 0; i < newArray2.length; i++) {
        if (newArray2[i][1] > 2) {
            for (let j = 0; j < newArray1.length; j++) {
                if (newArray2[i][0] === newArray1[j]) {
                    newArray1.splice(j, 1);
                    j--;
                }
            }
        }
    }

    return `Исходный массив: ${newArray}\nКонечный массив: ${newArray1}`;
}

//Удалить повторяющиеся элементы из массива

function deleteSameElements(arr) {
    let Arr1Copy = JSON.parse(JSON.stringify(arr));
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return `Исходный массив: ${arr}\nИтоговый массив: ${result}`;
}

//Дан массив. Определить максимальную серию подряд элементов по возрастанию. Вывести ее
function maxSerie(arr) {
    let lens = [];
    lens[1] = 0;
    let max = 0;
    let arr2 = [];
    let str = "";

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            lens[i] = lens[i - 1] + 1;
        } else {
            lens[i] = 0;
        }
        max = Math.max(lens[i], max);
    }

    for (let i = 0; i < arr.length; i++) {
        if (lens[i] === max) {
            for (let j = i - lens[i]; j <= i; j++) {
                str += String(arr[j]) + " ";
            }
            str += "\n";
        }
    }
    return `Оригинальный массив: ${arr}\nМаксимальная последоательность = ${max +
        1}\nВот она/они:\n${str}`;
}

//Найти два максимальных элемента массива
function findTwoMaxNumber(arr) {
    let max = arr[0];
    let copyArr = JSON.parse(JSON.stringify(arr));
    let max2 = arr[0];

    if (arr.length == 1) {
        return `Исходный массив: ${arr}\nМаксимум один: ${arr[0]}`;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) max = arr[i];
        }
        for (let i = 0; i < copyArr.length; i++) {
            if (copyArr[i] === max) {
                copyArr.splice(i, 1);
                i--;
            }
        }
        max2 = copyArr[0];

        for (let i = 0; i < copyArr.length; i++) {
            if (copyArr[i] > max2) max2 = copyArr[i];
        }

        return `Исходный массив: ${arr}\nПервый максимум: ${max}\nВторой максимум: ${max2}`;
    }
}

document.getElementById("buttonT1").onclick = function() {
    let r = genericRandomArr();
    document.getElementById("textAreaT1").value = deleteEllems(r);
};

document.getElementById("buttonT2").onclick = function() {
    let r = genericRandomArr();
    document.getElementById("textAreaT2").value = deleteSameElements(r);
};

document.getElementById("buttonT3").onclick = function() {
    let r = genericRandomArr();
    document.getElementById("textAreaT3").value = maxSerie(r);
};

document.getElementById("buttonT4").onclick = function() {
    let r = genericRandomArr();
    document.getElementById("textAreaT4").value = findTwoMaxNumber(r);
};
