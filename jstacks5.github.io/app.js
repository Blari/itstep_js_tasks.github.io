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
    let k = 0;
    let el = [];
    let arr2 = [];
    let newArr = [];
    //Создаем копию массива
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i]);
    }

    //Ищем количество повторений

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                k++;
            }
        }
        newArr.push(k);
        k = 0;
    }

    console.log(arr);
    return `Исходный массив: ${arr2}\nПосле обработки: ${newArr}`;
}

document.getElementById("buttonT1").onclick = function() {
    let r = genericRandomArr();
    document.getElementById("textAreaT1").value = deleteEllems(r);
};
