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

document.getElementById("buttonT1").onclick = function() {
    let r = genericRandomArr();
    document.getElementById("textAreaT1").value = deleteEllems(r);
};
