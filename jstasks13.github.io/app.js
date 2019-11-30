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
//Прячем меню по клику на body
function ddHide(e) {
  let dd = document.getElementsByClassName("contextMenu")[0];
  dd.style.visibility = "hidden";
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
  let dd = document.querySelector(".contextMenu");
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  dd.style.visibility = "hidden";
  li.append(randomString());
  li.addEventListener("click", liClick);
  li.addEventListener("keydown", liCtrl);
  li.addEventListener("contextmenu", licontextMenu);
  li.classList.add("list-group-item");
  li.setAttribute("draggable", "true");
  ul.append(li);
}
//Клик по элементу списка
function liClick(e) {
  let dd = document.querySelector(".contextMenu");

  e.contextMenu ? licontextMenu(e) : e.ctrlKey ? liCtrl(e) : liActiveClear(e);
  this.classList.add("active");
  dd.style.visibility = "hidden";
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

  if (this.classList.contains("active")) {
    let dd = document.querySelector(".contextMenu");
    dd.style.visibility = `visible`;
    dd.style.top = `${e.pageY}px`;
    dd.style.left = `${e.pageX}px`;
  } else {
    liActiveClear(e);
    this.classList.add("active");
    let dd = document.querySelector(".contextMenu");
    dd.style.visibility = `visible`;
    dd.style.top = `${e.pageY}px`;
    dd.style.left = `${e.pageX}px`;
  }

  let act = document.getElementsByClassName("active").length;
  let btn = document.getElementsByClassName("dropdown-item")[1];
  console.log(act);
  act != 1 ? btn.classList.add("disabled") : btn.classList.remove("disabled");
}
//Выпадающий список
function dropDownMenu() {
  let body = document.querySelector("body");
  let divBtn = document.createElement("div");
  let dropDownMenu = document.createElement("div");
  let dropDownItem = document.createElement("a");
  let dropDownItem2 = document.createElement("a");

  divBtn.classList.add("dropdown");
  divBtn.classList.add("show");
  divBtn.classList.add("contextMenu");
  dropDownMenu.classList.add("dropdown-menu");
  dropDownMenu.classList.add("show");
  dropDownMenu.setAttribute("aria-labelledby", "dropdownMenuButton");
  dropDownItem.classList.add("dropdown-item");
  dropDownItem2.classList.add("dropdown-item");
  dropDownItem.setAttribute("href", "#");

  dropDownItem2.setAttribute("href", "#");
  dropDownItem2.setAttribute("data-toggle", "modal");
  dropDownItem2.setAttribute("data-target", "#exampleModal");
  dropDownItem.setAttribute("href", "#");
  dropDownItem.setAttribute("data-toggle", "modal");
  dropDownItem.setAttribute("data-target", "#exampleModal");
  dropDownItem.append("Remove");
  dropDownItem2.append("Update");

  dropDownItem.addEventListener(
    "click",
    function() {
      runModal("Удаление данных");
    },
    false
  );
  dropDownItem2.addEventListener(
    "click",
    function() {
      runModal2("Обновление данных");
    },
    false
  );

  dropDownMenu.append(dropDownItem);
  dropDownMenu.append(dropDownItem2);
  divBtn.append(dropDownMenu);

  body.append(divBtn);
}
//Запуск модального окна
function runModal(title) {
  let active = document.querySelector(".active").innerHTML;
  let body = document.querySelector("body");
  let modal = document.createElement("div");
  let modalDialog = document.createElement("div");
  let modalContent = document.createElement("div");
  let modalHeader = document.createElement("div");
  let modalTitle = document.createElement("h5");
  let btn = document.createElement("button");
  let span = document.createElement("span");
  let modalBody = document.createElement("div");
  let modalFooter = document.createElement("div");
  let btnFooter = document.createElement("button");
  let btnFooter2 = document.createElement("button");

  modal.classList.add("modal");
  modal.classList.add("fade");
  modal.setAttribute("id", "exampleModal");
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-labelledby", "exampleModalLabel");
  modal.setAttribute("aria-hidden", "true");

  modalDialog.classList.add("modal-dialog");
  modalDialog.classList.add("modal-dialog-centered");
  modalDialog.setAttribute("role", "document");

  modalContent.classList.add("modal-content");

  modalHeader.classList.add("modal-header");

  modalTitle.classList.add("modal-title");
  modalTitle.append(title);

  btn.setAttribute("type", "button");
  btn.classList.add("close");
  btn.setAttribute("data-dismiss", "modal");
  btn.setAttribute("aria-label", "Close");

  span.setAttribute("aria-hidden", "true");
  span.insertAdjacentHTML("beforeend", "&times;");

  modalBody.classList.add("modal-body");
  modalBody.insertAdjacentHTML(
    "beforeend",
    `<p>Хотите удалить ${sumActive()} строк?</p>`
  );

  modalFooter.classList.add("modal-footer");

  btnFooter.classList.add("btn");
  btnFooter.classList.add("btn-secondary");
  btnFooter.setAttribute("type", "button");
  btnFooter.setAttribute("data-dismiss", "modal");
  btnFooter.addEventListener("click", removeModal);
  btnFooter.append("Закрыть окно");

  btnFooter2.classList.add("btn");
  btnFooter2.classList.add("btn-primary");
  btnFooter2.setAttribute("type", "button");
  btnFooter2.addEventListener("click", delActive);
  btnFooter2.append("Применить");

  modalFooter.append(btnFooter);
  modalFooter.append(btnFooter2);

  modalHeader.append(modalTitle);
  btn.append(span);
  modalHeader.append(btn);

  modalContent.append(modalHeader);
  modalContent.append(modalBody);
  modalContent.append(modalFooter);

  modalDialog.append(modalContent);

  modal.append(modalDialog);
  body.append(modal);
}
//Запуск модального окна для обновления данных
function runModal2(title) {
  let active = document.querySelector(".active").innerHTML;
  let body = document.querySelector("body");
  let modal = document.createElement("div");
  let modalDialog = document.createElement("div");
  let modalContent = document.createElement("div");
  let modalHeader = document.createElement("div");
  let modalTitle = document.createElement("h5");
  let btn = document.createElement("button");
  let span = document.createElement("span");
  let modalBody = document.createElement("div");
  let modalFooter = document.createElement("div");
  let btnFooter = document.createElement("button");
  let btnFooter2 = document.createElement("button");
  let input = document.createElement("input");

  modal.classList.add("modal");
  modal.classList.add("fade");
  modal.setAttribute("id", "exampleModal");
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-labelledby", "exampleModalLabel");
  modal.setAttribute("aria-hidden", "true");
  input.setAttribute("type", "text");
  input.classList.add("form-control");

  modalDialog.classList.add("modal-dialog");
  modalDialog.classList.add("modal-dialog-centered");
  modalDialog.setAttribute("role", "document");

  modalContent.classList.add("modal-content");

  modalHeader.classList.add("modal-header");

  modalTitle.classList.add("modal-title");
  modalTitle.append(title);

  btn.setAttribute("type", "button");
  btn.classList.add("close");
  btn.setAttribute("data-dismiss", "modal");
  btn.setAttribute("aria-label", "Close");

  span.setAttribute("aria-hidden", "true");
  span.insertAdjacentHTML("beforeend", "&times;");

  modalBody.classList.add("modal-body");
  modalBody.insertAdjacentHTML(`beforeend`, `<p>Начальные данные: ${active}`);
  modalBody.insertAdjacentElement("beforeend", input);

  modalFooter.classList.add("modal-footer");

  btnFooter.classList.add("btn");
  btnFooter.classList.add("btn-secondary");
  btnFooter.setAttribute("type", "button");
  btnFooter.setAttribute("data-dismiss", "modal");
  btnFooter.addEventListener("click", removeModal);
  btnFooter.append("Закрыть окно");

  btnFooter2.classList.add("btn");
  btnFooter2.classList.add("btn-primary");
  btnFooter2.setAttribute("type", "button");
  btnFooter2.addEventListener(
    "click",
    function() {
      updActive();
    },
    false
  );
  btnFooter2.append("Применить");

  modalFooter.append(btnFooter);
  modalFooter.append(btnFooter2);

  modalHeader.append(modalTitle);
  btn.append(span);
  modalHeader.append(btn);

  modalContent.append(modalHeader);
  modalContent.append(modalBody);
  modalContent.append(modalFooter);

  modalDialog.append(modalContent);

  modal.append(modalDialog);
  body.append(modal);
}
//Удаляем модальное окно
function removeModal() {
  document.querySelector(".modal").remove();
}
//Подсчет активных элементов
function sumActive() {
  let li = document.getElementsByClassName("active");
  return li.length;
}
//Удаление активных элементов
function delActive() {
  let li = document.querySelectorAll(".active");
  for (let i = 0; i < li.length; i++) {
    li[i].remove("active");
  }
  let modal = document.querySelector(".modal");
  let modalBg = document.querySelector(".modal-backdrop");
  modal.remove("show");
  modalBg.remove("show");
  modal.style.display = "none";
  //removeModal();
}
//Оновление данных
function updActive() {
  let input = document.getElementsByTagName("input")[0].value;
  let act = document.querySelector(".active");
  act.innerHTML = input;
  let modal = document.querySelector(".modal");
  let modalBg = document.querySelector(".modal-backdrop");
  modal.remove("show");
  modalBg.remove("show");
  modal.style.display = "none";
  //removeModal();
}

bootGrid();
addBtn2();
addBtn();
dropDownMenu();
