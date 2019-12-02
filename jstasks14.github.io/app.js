//Случайное число
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
//Случайная строка
function randomString() {
  let x =
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15);
  return x;
}
//Формируем bootstrap сетку
function bootGrid(e) {
  let body = document.querySelector("body");
  body.addEventListener("click", ddHide);
  let container = document.createElement("div");
  let row = document.createElement("div");
  let row2 = document.createElement("div");
  let col = document.createElement("div");
  let col1 = document.createElement("div");
  let col2 = document.createElement("div");
  col.classList.add("col-md-6");
  col.classList.add("d-flex");
  col.classList.add("justify-content-center");
  col1.classList.add("col-md-6");
  col1.classList.add("d-flex");
  col1.classList.add("justify-content-center");
  col2.classList.add("col-md-12");
  col2.classList.add("box");
  row.classList.add("row");
  row2.classList.add("row");
  container.classList.add("container");

  row.append(col);
  row.append(col1);
  row2.append(col2);
  container.append(row);
  container.append(row2);
  body.prepend(container);
}

bootGrid();

