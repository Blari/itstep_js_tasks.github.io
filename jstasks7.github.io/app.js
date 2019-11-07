//Возростающие последовательности из массива

let mainArr = [1, 2, -5, 5, 5, 6, 6, 7, 0, 7, 7];

function arrSort(arr) {
    let el = [];
    let arr2 = [];
    let newArray = [];
    let n = 0;

    //Удаляем дубликаты
    for (let i = 0; i < arr.length; i++) {
        if (newArray.indexOf(arr[i]) == -1) {
            newArray.push(arr[i]);
        }
    }

    for (let i = 0; i < newArray.length - 1; ) {
        while (newArray[i] < newArray[i + 1]) {
            n++;
            i++;
        }

        el = newArray.splice(0, n + 1);
        arr2.push(el);

        i = 0;
        n = 0;
    }
    return arr2;
}

console.log(arrSort(mainArr));
