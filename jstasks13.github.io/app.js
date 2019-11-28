//Случайное число
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
//Формируем bootstrap сетку
function bootGrid() {
  let body = document.querySelector("body");
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
  body.append(container);
}
//Первая кнопка
function addBtn() {
  let col = document.querySelectorAll(".col-md-6")[0];
  let button = document.createElement("button");
  button.classList.add("btn");
  button.classList.add("btn-primary");
  button.classList.add("add-ul");
  button.addEventListener("click", addUl);
  button.append("Добавить список");
  col.append(button);
}
//Вторая кнопка
function addBtn2() {
  let col = document.querySelectorAll(".col-md-6")[1];
  let button = document.createElement("button");
  button.addEventListener("click", addLi);
  button.classList.add("btn");
  button.classList.add("btn-primary");
  button.append("Добавить элемент списка");
  col.append(button);
}
//Добавление списка
function addUl() {
  let box = document.querySelector(".box");
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  let btn = document.querySelector(".add-ul");
  let col = document.querySelectorAll(".col-md-6");
  ul.classList.add("list-group");
  li.classList.add("list-group-item");
  li.addEventListener("click", liClick);
  li.append(randomInteger(0, 100));
  ul.append(li);

  box.append(ul);

  btn.remove();
  col[0].remove();
  col[1].classList.remove("col-md-6");
  col[1].classList.add("col-md-12");
}
//Добавленеи элементов списка
function addLi() {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.append(randomInteger(1, 100));
  li.addEventListener("click", liClick);
  li.classList.add("list-group-item");
  ul.append(li);
}
//клик по элементу списка
function liClick() {
  this.classList.add("active");
}

bootGrid();
addBtn();
addBtn2();
