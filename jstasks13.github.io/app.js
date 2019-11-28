//Случайное число
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
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

addBtn();
addBtn2();
