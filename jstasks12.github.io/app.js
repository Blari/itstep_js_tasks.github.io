const box = document.getElementsByClassName("box")[0];
const table = document.createElement("table");
let s = 0;
table.classList.add("table");
table.classList.add("table-bordered");

// Создание таблицы
for (let i = 0; i < 3; i++) {
  const tr = document.createElement("tr");
  table.append(tr);
  for (let j = 0; j < 3; j++) {
    const td = document.createElement("td");
    td.innerHTML = Math.floor(Math.random() * 10);
    tr.append(td);
  }
}

//Подсчитываем сумму в стрках

let tdSum = 0;
for (let i = 0; i < table.children.length; i++) {
  let td = document.createElement("td");
  for (let j = 0; j < table.children.length; j++) {
    tdSum += +table.children[i].children[j].innerHTML;
  }
  td.innerHTML = tdSum;
  td.classList.add("summ");
  table.children[i].append(td);
  tdSum = 0;
}

//Подсчитываем сумму в столбцах
let tdSumCol = 0;
let tr = document.createElement("tr");

for (let i = 0; i < table.children.length; i++) {
  let td = document.createElement("td");
  for (let j = 0; j < table.children.length; j++) {
    tdSumCol += +table.children[j].children[i].innerHTML;
  }
  td.innerHTML = tdSumCol;
  td.classList.add("summ");
  tr.append(td);
  tdSumCol = 0;
}
tr.insertAdjacentHTML("beforeend", `<td class="summ">-</td>`);
table.append(tr);

//Находим кнопку добавления колонки
const addCol = document.getElementsByClassName("add-col")[0];
addCol.addEventListener("click", addColFun);

//Находим кнопку добавления строк
const addRow = document.getElementsByClassName("add-row")[0];
addRow.addEventListener("click", addRowFun);

//Добавление колонок

function addColFun() {
  //Удаляем столбец с суммой
  let table = document.getElementsByTagName("table")[0];
  for (let i = 0; i < table.children.length; i++) {
    table.children[i].lastChild.remove();
  }

  //Добавляем новый столбец
  for (let i = 0; i < table.children.length; i++) {
    let td = document.createElement("td");
    td.innerHTML = Math.floor(Math.random() * 10);
    table.children[i].append(td);
  }

  //Подсчитываем сумму и добавляем в конец
  let tdSum = 0;
  for (let i = 0; i < table.children.length; i++) {
    let td = document.createElement("td");

    for (let j = 0; j < table.children[i].children.length; j++) {
      tdSum += +table.children[i].children[j].innerHTML;
    }
    td.innerHTML = tdSum;
    td.classList.add("summ");
    table.children[i].append(td);
    tdSum = 0;
  }
}

//Добавление строк

function addRowFun() {
  //Удаляем последнюю строку с расчетами
  //let table = document.getElementsByTagName("table")[0];
  table.lastChild.remove();

  //Добавляем новую строку

  let tr = document.createElement("tr");
  for (let i = 0; i < table.children[0].children.length - 1; i++) {
    let td = document.createElement("td");
    let x = Math.floor(Math.random() * 10);
    td.innerHTML = x;
    s += x;
    tr.append(td);
  }
  tr.insertAdjacentHTML("beforeend", `<td class="summ">${s}</td>`);
  table.append(tr);

  //Добавляем строку с расчетами суммы
  let tdSumCol = 0;
  //var table = document.getElementsByTagName("table")[0];
  let tr2 = document.createElement("tr");
  for (let i = 0; i < table.children.length - 1; i++) {
    let td2 = document.createElement("td");

    for (let j = 0; j < table.children[0].children.length; j++) {
      tdSumCol += +table.children[j].children[i].innerHTML;
    }
    td2.innerHTML = tdSumCol;
    td2.classList.add("summ");
    tr2.append(td2);
    console.log(tr2);
    console.log(td2);
    tdSumCol = 0;
  }

  tr2.insertAdjacentHTML("beforeend", `<td class="summ">-</td>`);
  table.append(tr2);
}

box.append(table);
