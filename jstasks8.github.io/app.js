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
  return `Количество слов в строке ${str}: ${n}`;
}
console.log(numberOfString('Hello world!'));

function maxString(str) {
  let newStr = str.split(' ');
  let max = 0;
  let el = [];

  for (let i = 0; i < newStr.length; i++) {
      if (newStr[i].length > max) {
          max = newStr[i].length;
          el = newStr[i];
      }
  }
  return `Длинна: ${max}, строка: ${el}`;
}
console.log(maxString('Hello world muther facker!'));

function stringRevers(str) {
  let mainStr = str.split('').reverse()
  return `Оригинальная строка: ${str}\nПеревернули: ${mainStr.join('')}`;
}
console.log(stringRevers('Hello world mother facker!'));

function onRost(str) {
  let newStr = str.split(' ');
  let mainStr = [];
  let el = [];

  for (let i = 0; i < newStr.length - 1; i++) {
      if (newStr[i].length <= newStr[i + 1].length) {
          el = newStr[i + 1];
      }
      mainStr.push(el);
  }
  return `Длинна:: ${mainStr}`;
}
console.log(onRost('1234 123 12 1'));

document.getElementById("buttonT1").onclick = function() {
  let str = document.getElementById("inputT1").value;

  document.getElementById("textAreaT1").value = arrSort(str);
};

document.getElementById("buttonT1-0").onclick = function() {
  let str = randomSring();

  document.getElementById("inputT1").value = str;
};
