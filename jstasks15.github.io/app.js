//Случайное число
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

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

  mainDiv.classList.add("input-group");
  formDiv.classList.add("custom-file");
  input.classList.add("custom-file-input");
  input.setAttribute("type", "file");
  input.setAttribute("id", "inputGroupFile04");
  input.setAttribute("aria-describedby", "inputGroupFileAddon04");
  label.classList.add("custom-file-label");
  label.setAttribute("for", "inputGroupFile04");
  label.append("Choose file");

  formDiv1.classList.add("input-group-append");
  btn.classList.add("btn");
  btn.classList.add("btn-success");
  btn.setAttribute("type", "button");
  btn.setAttribute("id", "inputGroupFileAddon04");
  btn.append("+");

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

  formDiv.append(input);
  formDiv.append(label);
  formDiv1.append(btn);
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
}

/* <div class="input-group">

  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04">
    <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
  </div>

  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Кнопка</button>
  </div>

</div> */

function addBtn() {
  let input = document.createElement("input");

  input.classList.add("form-control-file");
  input.setAttribute("type", "file");
  input.setAttribute("id", "exampleFormControlFile1");
}

bootGrid();
