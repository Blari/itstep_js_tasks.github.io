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

box.append(table);
