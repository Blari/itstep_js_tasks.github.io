//Формируем bootstrap сетку
function bootGrid(e) {
  let body = document.querySelector("body");
  let container = document.createElement("div");
  let row = document.createElement("div");
  let row2 = document.createElement("div");
  let col = document.createElement("div");
  let col1 = document.createElement("div");
  let col2 = document.createElement("div");

  let form = document.createElement("form");
  let mainDiv = document.createElement("div");
  let formDiv = document.createElement("div");
  let formDiv1 = document.createElement("div");
  let input = document.createElement("input");
  let label = document.createElement("label");
  let btn = document.createElement("button");
  let formDiv2 = document.createElement("div");
  let btnDel = document.createElement("button");

  let ul = document.createElement("ul");
  ul.classList.add("list-group");

  btnDel.classList.add("btn");
  btnDel.classList.add("btn-warning");
  btnDel.setAttribute("type", "button");
  mainDiv.classList.add("input-group");
  formDiv.classList.add("custom-file");
  formDiv2.classList.add("input-group-prepend");
  input.classList.add("custom-file-input");
  input.setAttribute("id", "inputGroupFile04");
  input.setAttribute("type", "file");
  input.setAttribute("aria-describedby", "inputGroupFileAddon04");

  input.addEventListener("change", fileLoad);

  label.classList.add("custom-file-label");
  label.setAttribute("for", "inputGroupFile04");
  label.append("Choose file");
  btnDel.append("del");
  btnDel.addEventListener("click", delFoo);

  formDiv1.classList.add("input-group-append");
  btn.classList.add("btn");
  btn.classList.add("btn-success");
  btn.setAttribute("type", "button");
  btn.setAttribute("id", "inputGroupFileAddon04");
  btn.append("add");
  btn.addEventListener("click", addBtn);

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

  col1.append(ul);
  formDiv2.append(btnDel);
  formDiv.append(input);
  formDiv.append(label);
  formDiv1.append(btn);
  mainDiv.append(formDiv2);
  mainDiv.append(formDiv);
  mainDiv.append(formDiv1);
  form.append(mainDiv);

  col.append(form);
  row.append(col);
  row.append(col1);
  row2.append(col2);
  container.append(row);
  container.append(row2);
  body.prepend(container);
  listDraw();
  addLi();
  runModal();
}
//Добавляем инпут и кнопки
function addBtn() {
  let form = document.querySelector("form");
  let mainDiv = document.createElement("div");
  let formDiv = document.createElement("div");
  let formDiv1 = document.createElement("div");
  let input = document.createElement("input");
  let label = document.createElement("label");
  let btn = document.createElement("button");
  let formDiv2 = document.createElement("div");
  let btnDel = document.createElement("button");

  formDiv2.classList.add("input-group-prepend");
  mainDiv.classList.add("input-group");
  formDiv.classList.add("custom-file");
  input.classList.add("custom-file-input");
  input.setAttribute("type", "file");
  input.setAttribute("id", "inputGroupFile04");
  input.setAttribute("aria-describedby", "inputGroupFileAddon04");

  input.addEventListener("change", fileLoad);

  label.classList.add("custom-file-label");
  label.setAttribute("for", "inputGroupFile04");
  label.append("Choose file");

  btnDel.classList.add("btn");
  btnDel.addEventListener("click", delFoo);
  btnDel.classList.add("btn-warning");
  formDiv1.classList.add("input-group-append");
  btn.classList.add("btn");
  btn.classList.add("btn-success");
  btn.setAttribute("type", "button");
  btn.setAttribute("id", "inputGroupFileAddon04");
  btn.append("add");
  btnDel.append("del");
  btn.addEventListener("click", addBtn);
  formDiv2.append(btnDel);
  formDiv.append(input);
  formDiv.append(label);
  formDiv1.append(btn);
  mainDiv.append(formDiv2);
  mainDiv.append(formDiv);
  mainDiv.append(formDiv1);
  form.append(mainDiv);
  addLi();
}
//Забираем имя файла. Добавляем имя файла в список
function fileLoad() {
  this.classList.add("one");
  let li = document.getElementsByTagName("li");
  let input = document.getElementsByTagName("input");
  let modalBody = document.getElementsByClassName("modal-body")[0];

  let fileName = this.files[0].name;

  for (let i = 0; i < input.length; i++) {
    if (input[i].classList.contains("one")) {
      this.nextSibling.innerHTML = fileName;
      li[i].innerHTML = fileName;
      input[i].className = "custom-file-input";
      input[i].setAttribute("data-toggle", "modal");
      input[i].setAttribute("data-target", "#exampleModal");
      break;
    }
  }

  //Открываем модаль
  $("#exampleModal").modal();
  modalBody.innerHTML = `<p>Вы загрузили файл: ${fileName}</p>`;

  //Закрываем модаль
  setTimeout(function() {
    $("#exampleModal").modal("hide");
  }, 2500);
}
//Удаление кнопки
function delFoo(e) {
  let btn = document.getElementsByClassName("btn-warning");
  let li = document.querySelectorAll("li");
  this.classList.add("litarg");

  for (let i = 0; i < btn.length; i++) {
    if (btn[i].classList.contains("litarg")) {
      li[i].remove();
      this.parentNode.parentNode.remove();
      break;
    }
  }
  e.preventDefault();
}
//Добавление пунктов в список
function addLi() {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.classList.add("list-group-item");
  li.append("Choose file");
  ul.append(li);
}
//Отрисовка списка
function listDraw() {
  let col = document.querySelectorAll(".col-md-6")[1];
  let ul = document.querySelector("ul");
  col.append(ul);
}
//Отрисовка модального окна
function runModal(fileName = "none") {
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

  span.setAttribute("aria-hidden", "true");
  span.insertAdjacentHTML("beforeend", "&times;");

  modalBody.classList.add("modal-body");
  modalBody.insertAdjacentHTML(
    "beforeend",
    `<p>Вы загрузили файл: ${fileName}</p>`
  );

  modalFooter.classList.add("modal-footer");

  btnFooter.classList.add("btn");
  btnFooter.classList.add("btn-secondary");
  btnFooter.setAttribute("type", "button");
  btnFooter.setAttribute("data-dismiss", "modal");
  btnFooter.append("Закрыть окно");

  modalHeader.append(modalTitle);

  modalContent.append(modalHeader);
  modalContent.append(modalBody);
  modalContent.append(modalFooter);

  modalDialog.append(modalContent);

  modal.append(modalDialog);
  body.append(modal);
}

bootGrid();
