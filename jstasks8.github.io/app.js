//1. Подсчитать количество слов в троке. На вывод исходную строку и количество слов
//2. В строке найти самое длинное слово.
//3. Перевернуть строку
//4. В строке расставить все слова по возростанию.
//5. Из строки удалить указанную последовательность символов.
//6. В строке подсчитать количество глассных и согласных.
//7. Пользователь вносит строку, из строки забрать все числа.

function numberOfString(str) {
  let n = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") n++;
  }
  return `Количество слов в строке "${str}": ${n}\n\n`;
}

function maxString(str) {
  let newStr = str.split(" ");
  let max = 0;
  let el = [];

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length > max) {
      max = newStr[i].length;
      el = newStr[i];
    }
  }
  return `Самое длинное слово: "${el}", его длинна: ${max} символов\n\n`;
}

function stringRevers(str) {
  let mainStr = str.split("").reverse();

  return `Перевернутая строка: ${mainStr.join("")}\n\n`;
}

function onRost(str) {
  let newStr = str.split(" ");
  let mainStr = [];
  let el = [];
  let minLet = newStr[0].length;

  while (newStr.length > 0) {
    for (let i = 0; i < newStr.length - 1; i++) {
      if (minLet > newStr[i + 1].length) {
        minLet = newStr[i + 1].length;
        el = newStr[i + 1];
        console.log(el);
      }
      mainStr.push(el);
    }
    minLet = newStr[0].length;
    //Вырезаем элемент массива

    let p = newStr.indexOf(el);

    for (; p > 0; ) {
      newStr.splice(p, 1);
      p = newStr.indexOf(el);
    }
    console.log(newStr);
  }
  return `Слова по возростанию длинны: ${mainStr.join(" ")}`;
}

document.getElementById("buttonT1").onclick = function() {
  let str = document.getElementById("inputT1").value;

  document.getElementById("textAreaT1").value = numberOfString(str);

  document.getElementById("textAreaT1").value += maxString(str);

  document.getElementById("textAreaT1").value += stringRevers(str);

  document.getElementById("textAreaT1").value += onRost(str);
};
