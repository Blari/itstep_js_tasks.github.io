let mainIndex;
lscache.get(1) === null ? (mainIndex = 1) : getDataFromStorage();

//Запуск модальки
let btn = document.querySelector(".modalAdd");
btn.addEventListener("click", () => {
  $("#ModalAdd").modal("show");
});
//collapse
let colapse = document.querySelector(".collapse-triger");
colapse.addEventListener("click", () => {
  $("#collapse").collapse("toggle");
  let angel = document.querySelector(".fa-angle-up");

  let deg = angel.style.transform;
  deg === `rotate(180deg)` || deg === ""
    ? (angel.style.transform = `rotate(0deg)`)
    : (angel.style.transform = `rotate(180deg)`);
});

//Клик по модальке
let modal = document.querySelector(".modal");
modal.onclick = function(event) {
  let target = event.target;
  if (target.tagName != "I") return;
  pop(target);
};

//Всплывающие подсказки
function pop(target) {
  target.classList.contains("name")
    ? $('[data-toggle-name="popover"]').popover("show")
    : target.classList.contains("login")
    ? $('[data-toggle-login="popover"]').popover("show")
    : target.classList.contains("password")
    ? $('[data-toggle-password="popover"]').popover("show")
    : target.classList.contains("email")
    ? $('[data-toggle-email="popover"]').popover("show")
    : target.classList.contains("salary")
    ? $('[data-toggle-salary="popover"]').popover("show")
    : target.classList.contains("zip")
    ? $('[data-toggle-zip="popover"]').popover("show")
    : target.classList.contains("city")
    ? $('[data-toggle-city="popover"]').popover("show")
    : target.classList.contains("street")
    ? $('[data-toggle-street="popover"]').popover("show")
    : target.classList.contains("house")
    ? $('[data-toggle-house="popover"]').popover("show")
    : target.classList.contains("number")
    ? $('[data-toggle-number="popover"]').popover("show")
    : null;
}

//regExp check
let sum = 0;
function testReg(nameInput, name, dataName) {
  nameInput = document.querySelector(nameInput);
  if (!name.test(nameInput.value)) {
    nameInput.classList.add(`animated`);
    nameInput.classList.add(`shake`);
    $(`[data-toggle-${dataName}="popover"]`).popover("show");
    setTimeout(() => {
      nameInput.classList.remove(`animated`);
      nameInput.classList.remove(`shake`);
      $(`[data-toggle-${dataName}="popover"]`).popover("hide");
    }, 2000);
  } else sum++;
}

let sendBtn = document.querySelector(".sendBtn");
sendBtn.addEventListener("click", regExpCheck);
function regExpCheck() {
  let name = /^[А-Яа-яa-zA-Z_]{2,16}$/;
  let login = /[А-Яа-яa-zA-Z0-9_]/g;
  let password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  let email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  let salary = /\d{1,6}/;
  let zip = /^\d{1,8}/;
  let city = /^[А-Яа-яa-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
  //let street = /^\d+\s[A-z]+\s[A-z]+/;
  let house = /\d{1,6}/;
  let number = /([+(\d]{1})(([\d+() -.]){5,16})([+(\d]{1})/gm;

  testReg(`#name`, name, `name`);
  testReg(`#login`, login, `login`);
  testReg(`#password`, password, `password`);
  testReg(`#email`, email, `email`);
  testReg(`#salary`, salary, `salary`);
  testReg(`#zip`, zip, `zip`);
  testReg(`#city`, city, `city`);
  testReg(`#street`, city, `street`);
  testReg(`#house`, house, `house`);
  testReg(`#number`, number, `number`);

  sum > 10 ? (sum = 10) : sum < 10 ? (sum = 0) : null;
  sum === 10 ? getData() : null;
}
//Собираем данные из модальки
function getData() {
  let objData = {};
  let form = document.forms[0].elements;
  let address = `${form.city.value}, ${form.street.value}, ${form.house.value}`;
  let status;
  form.active.checked ? (status = "Active") : (status = "Inactive");
  let date = new Date();
  
  let delBtn = `<button type="button" class="btn btn-warning del">del</button>`;
  let editBtn = `<button type="button" class="btn btn-primary edit">edit</button>`;

  objData = {
    index: mainIndex,
    name: form.name.value,
    login: form.login.value,
    password: form.password.value,
    email: form.email.value,
    address: address,
    number: form.number.value,
    salary: form.salary.value,
    dateCreate: date,
    dateUpd: date,
    status: status,
    del: delBtn,
    edit: editBtn
  };

  lscache.set(mainIndex, objData);
  mainIndex++;
  let tbody = document.querySelector("tbody");
  let trData = `<th scope="row">${objData.index}</th>
  <td>${objData.name}</td>
  <td>${objData.login}</td>
  <td>${objData.password}</td>
  <td>${objData.email}</td>
  <td>
  ${objData.address}
  </td>
  <td>${objData.number}</td>
  <td>${objData.salary}</td>
  <td>${objData.dateCreate}</td>
  <td>${objData.dateCreate}</td>
  <td>${objData.status}</td>
  <td><button type="button" class="btn btn-primary">edit</button></td>
  <td><button type="button" class="btn btn-warning">del</button></td>`;

  let tr = document.createElement("tr");
  tr.innerHTML = trData;
  tbody.append(tr);
  $("#ModalAdd").modal("hide");
}

//Забираем данные из LocalStorage
function getDataFromStorage() {
  mainIndex = lscache.get(localStorage.length).index + 1;
  for (let i = 1; i <= localStorage.length; i++) {
    let tbody = document.querySelector("tbody");
    let trData = `<th scope="row">${lscache.get(i).index}</th>
  <td>${lscache.get(i).name}</td>
  <td>${lscache.get(i).login}</td>
  <td>${lscache.get(i).password}</td>
  <td>${lscache.get(i).email}</td>
  <td>
  ${lscache.get(i).address}
  </td>
  <td>${lscache.get(i).number}</td>
  <td>${lscache.get(i).salary}</td>
  <td>${lscache.get(i).dateCreate}</td>
  <td>${lscache.get(i).dateCreate}</td>
  <td>${lscache.get(i).status}</td>
  <td>${lscache.get(i).edit}</td>
  <td>${lscache.get(i).del}</td>`;

    let tr = document.createElement("tr");
    tr.innerHTML = trData;
    tbody.append(tr);
  }
}
