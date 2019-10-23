// Пользователь вводит n элементов массива, пока не введет 0. Поменять местами первый и последний символ массива.
function firstLastNumber() {
    let arr = [];
    let arr2 = [];
    let n;
    for (let i = 0; n != 0; i++) {
        n = parseInt(
            prompt("Введите элемент массива", Math.floor(Math.random() * 10))
        );
        if (n == 0) {
            break;
        } else {
            arr.push(n);
        }
    }
    for (let i = 0; i <= arr.length - 1; i++) {
        arr2.push(arr[i]);
    }

    x = arr.pop();
    y = arr.shift();
    arr.unshift(x);
    arr.push(y);
    return `Исходный массив: ${arr}\nПолученный массив: ${arr2}`;
}
// Сумма элементов массива с четными индексами
function summElem() {
    let arr = [];
    let arr2 = [];
    let n;
    for (let i = 0; n != 0; i++) {
        n = parseInt(
            prompt("Введите элемент массива", Math.floor(Math.random() * 10))
        );
        if (n == 0) {
            break;
        } else {
            arr.push(n);
        }
    }

    n = 0;
    console.log(arr);
    for (let i = 1; i <= arr.length - 1; i++) {
        if (i % 2 == 0) {
            n += arr[i];
        }
    }
    return `Исходный массив: ${arr.join(
        " "
    )}\nСумма элементов с четными индексами: ${n}`;
}
function searchAndDelete(x) {
    let mainArr = [];
    let newArr = [];
    let arrLen = Math.floor(Math.random() * 10 + 5);
    for (let i = 0; i <= arrLen; i++) {
        mainArr.push(Math.floor(Math.random() * 10));
    }

    for (let i = 0; i <= mainArr.length; i++) {
        if (mainArr[i] == x) {
        } else {
            newArr.push(mainArr[i]);
        }
    }
    return `Исходный массив: ${mainArr.join(
        " "
    )}\nУдаляем число ${x} из массива...\nПолучаем новый массив ${newArr.join(
        " "
    )}`;
}
document.getElementById("buttonT1").onclick = function() {
    document.getElementById("textAreaT1").value = firstLastNumber();
};
document.getElementById("buttonT2").onclick = function() {
    document.getElementById("textAreaT2").value = summElem();
};
document.getElementById("buttonT3").onclick = function() {
    let x = document.getElementById("numberT3").value;
    document.getElementById("textAreaT3").value = searchAndDelete(x);
};
