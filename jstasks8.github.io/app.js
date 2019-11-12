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
  let maxLet = 0;

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length > maxLet) maxLet = newStr[i].length;
  }

  for (let i = 1; i <= maxLet; i++) {
    for (let j = 0; j < newStr.length; j++) {
      if (newStr[j].length === i) {
        mainStr.push(newStr[j]);
      }
    }
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
