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
function searchAndDelate2() {
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
    let n2;
    let str = "";
    for (let i = 0; n2 != 0; i++) {
        n2 = parseInt(
            prompt(
                "Введите элементы которые нужно удалить",
                Math.floor(Math.random() * 10)
            )
        );

        if (n2 == 0) {
            break;
        } else {
            str += +n2 + " ";
            for (let j = 0; j < arr2.length; j++) {
                if (arr2[j] == n2) {
                    arr2.splice(j, 1);
                }
            }
        }
    }

    return `Исходный массив: ${arr}\nУдаляем числа: ${str}\nПолученный массив: ${arr2}`;
}
function searchSameElem() {
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
    let obj = {};
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                sum++;
                obj[arr[i]] = sum;
            }
        }
        sum = 0;
    }

    return `Исходный массив: ${arr.join(
        " "
    )}, \nЭлементы массива и их количество: ${JSON.stringify(obj)}`;
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
document.getElementById("buttonT4").onclick = function() {
    document.getElementById("textAreaT4").value = searchAndDelate2();
};
// document.getElementById("buttonT5").onclick = function() {
//     document.getElementById("textAreaT5").value = searchSameElem();
// };

const btnT5 = document.querySelector("#buttonT5");
const textAreaT5 = document.querySelector("#textAreaT5");

btnT5.addEventListener("click", () => {
    textAreaT5.value = searchSameElem();
});
