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
  body.prepend(container);
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
  button.setAttribute("disabled", "");
  button.append("Добавить элемент списка");
  col.append(button);
}
//Добавление списка
function addUl() {
  let btn2 = document.querySelectorAll("button")[1];
  let box = document.querySelector(".box");
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  let btn = document.querySelector(".add-ul");
  let col = document.querySelectorAll(".col-md-6");
  ul.classList.add("list-group");
  li.classList.add("list-group-item");
  li.addEventListener("click", liClick);
  li.addEventListener("contextmenu", licontextMenu);
  li.append(randomString());
  ul.append(li);
  btn2.removeAttribute("disabled");

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
  li.append(randomString());
  li.addEventListener("click", liClick);
  li.addEventListener("keydown", liCtrl);
  li.addEventListener("contextmenu", licontextMenu);
  li.classList.add("list-group-item");
  ul.append(li);
}
//Клик по элементу списка
function liClick(e) {
  let dd = document.querySelector(".contextMenu");
  e.contextMenu ? licontextMenu(e) : e.ctrlKey ? liCtrl(e) : liActiveClear(e);
  this.classList.add("active");
  dd.style.visibility = "hidden";
  dd.style.opacity = 0;
}
//Нажатие клавиш CTRL
function liCtrl(e) {
  e.target.classList.add("active");
}
//Очистка Activity
function liActiveClear(e) {
  let li = document.querySelectorAll("li");
  for (let i = 0; i < li.length; i++) {
    li[i].classList.remove("active");
  }
}
//Обработчик нажатия правой кнопки мышки
function licontextMenu(e) {
  e.preventDefault();
  let dd = document.querySelector(".contextMenu");
  //dd.setAttribute("visibility", "visible;");
  dd.style.visibility = `visible`;
  dd.style.top = `${e.pageY}px`;
  dd.style.left = `${e.pageX}px`;
}
//Выподающий список
function dropDownMenu() {
  let body = document.querySelector("body");
  let divBtn = document.createElement("div");
  //let btn = document.createElement("button");
  let dropDownMenu = document.createElement("div");
  let dropDownItem = document.createElement("a");

  divBtn.classList.add("dropdown");
  divBtn.classList.add("show");
  divBtn.classList.add("contextMenu");
  // btn.classList.add("btn");
  // btn.classList.add("btn-secondary");
  // btn.classList.add("dropdown-toggle");
  // btn.setAttribute("data-toggle", "dropdown");
  // btn.setAttribute("aria-expanded", "true");
  // btn.setAttribute("id", "dropdownMenuButton");
  dropDownMenu.classList.add("dropdown-menu");
  dropDownMenu.classList.add("show");
  dropDownMenu.setAttribute("aria-labelledby", "dropdownMenuButton");
  dropDownItem.classList.add("dropdown-item");
  dropDownItem.setAttribute("href", "#");
  dropDownItem.append("Remove");

  dropDownMenu.append(dropDownItem);
  divBtn.append(dropDownMenu);
  // divBtn.prepend(btn);
  body.append(divBtn);
}

bootGrid();
addBtn2();
addBtn();
dropDownMenu();
