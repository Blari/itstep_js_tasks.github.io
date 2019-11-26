const box = document.getElementsByClassName("box")[0];
const table = document.createElement("table");
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
//Находим кнопку добавления колонки
const addCol = document.getElementsByClassName("add-col")[0];
addCol.addEventListener("click", addColFun);

//Находим кнопку добавления строк
const addRow = document.getElementsByClassName("add-row")[0];
addRow.addEventListener("click", addRowFun);

//Добавление колонок
function addColFun() {
  for (let i = 0; i < table.children.length; i++) {
    let td = document.createElement("td");
    td.innerHTML = Math.floor(Math.random() * 10);
    table.children[i].append(td);
  }
}

function addRowFun() {
  let tr = document.createElement("tr");
  for (let i = 0; i < table.children[0].children.length; i++) {
    let td = document.createElement("td");
    td.innerHTML = Math.floor(Math.random() * 10);
    tr.append(td);
    table.append(tr);
  }
}

box.append(table);
