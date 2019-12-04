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
  let formDiv = document.createElement("div");
  let input = document.createElement("input");
  input.classList.add("form-control-file");
  input.setAttribute("type", "file");
  input.setAttribute("id", "exampleFormControlFile1");
  formDiv.classList.add("form-group");
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
  form.append(formDiv);
  col.append(form);
  row.append(col);
  row.append(col1);
  row2.append(col2);
  container.append(row);
  container.append(row2);
  body.prepend(container);
}
// <form>
// <div class="form-group">
// <label for="exampleFormControlFile1">Example file input</label>
// <input type="file" class="form-control-file" id="exampleFormControlFile1">
// </div>
// </form>
function addBtn() {}

bootGrid();
