let mainIndex;
let keyArr = [];
//TODO загрузка данных. при удалении первого элемента

localStorage.length === 0 ? (mainIndex = 1) : getDataFromStorage();

let clearConfirm = document.querySelector(".clearConfirm");
clearConfirm.addEventListener("click", clearData);

//Найти и удалить строку таблицы и данные из LS
document.addEventListener("click", delBtn);
function delBtn(e) {
  let lsData;
  let elNom;
  let el;
  let removeRowConfirm = document.querySelector(".removeRowConfirm");

  if (e.target.classList.contains("del")) {
    el = e.target.closest("tr");
    elNom = e.target.closest("tr").getElementsByTagName("th")[0].innerHTML;
    $(".delRow").modal("show");
    removeRowConfirm.onclick = function() {
      lscache.remove(elNom);
      el.remove();
      $(".delRow").modal("hide");
      toastShow("The line was removed.");
    };
  } else if (e.target.classList.contains("edit")) {
    document.querySelector(".sendBtn").setAttribute("disabled", "");
    document.querySelector(".updateDate").removeAttribute("disabled");
    el = e.target.closest("tr");
    elNom = e.target.closest("tr").getElementsByTagName("th")[0].innerHTML;
    lsData = lscache.get(elNom);
    document.getElementById("name").value = lsData.name;
    document.getElementById("login").value = lsData.login;
    document.getElementById("password").value = lsData.password;
    document.getElementById("email").value = lsData.email;

    let mainAdr = lsData.address.replace(/\s/g, "");
    adr = mainAdr.split(",");

    document.getElementById("zip").value = adr[0];
    document.getElementById("city").value = adr[1];
    document.getElementById("street").value = adr[2];
    document.getElementById("house").value = adr[3];

    document.getElementById("number").value = lsData.number;
    document.getElementById("salary").value = lsData.salary;
    if (lsData.status === "Active") {
      document.getElementById("active").checked = true;
    } else {
      document.getElementById("inactive").checked = true;
    }

    $("#ModalAdd").modal("show");

    let updBtn = document.querySelector(".updateDate");

    updBtn.onclick = function() {
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
      console.log(sum);
      sum > 10 ? (sum = 10) : sum < 10 ? (sum = 0) : null;
      console.log(sum);
      if (sum === 10) {
        let objData = {};
        let form = document.forms[0].elements;
        let address = `${form.zip.value}, ${form.city.value}, ${form.street.value}, ${form.house.value}`;
        let status;
        form.active.checked ? (status = "Active") : (status = "Inactive");
        let date = new Date();
        let dateUpd = `${date.getFullYear()}-${date.getMonth() +
          1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
        let mainDate = lscache.get(+elNom);

        let delBtn = `<button type="button" class="btn btn-warning del">del</button>`;
        let editBtn = `<button type="button" class="btn btn-primary edit">edit</button>`;

        objData = {
          index: +elNom,
          name: form.name.value,
          login: form.login.value,
          password: form.password.value,
          email: form.email.value,
          address: address,
          number: form.number.value,
          salary: form.salary.value,
          dateCreate: mainDate.dateCreate,
          dateUpd: dateUpd,
          status: status,
          del: delBtn,
          edit: editBtn
        };

        lscache.set(elNom, objData);

        let trData = `<th scope="row">${+objData.index}</th>
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
  <td>${objData.dateUpd}</td>
  <td>${objData.status}</td>
  <td><button type="button" class="btn btn-primary edit">edit</button></td>
  <td><button type="button" class="btn btn-warning del">del</button></td>`;

        let tr = document.createElement("tr");
        tr.innerHTML = trData;
        let trDoc = document.getElementsByTagName("tr");
        trDoc[elNom].insertAdjacentHTML("afterEnd", trData);
        trDoc[elNom].remove();
        $("#ModalAdd").modal("hide");
        toastShow("Your data has been updated.");
      }
    };
  }
}

let clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", () => {
  $(".clearAllData").modal("show");
});

//Чистим все данные
function clearData() {
  let tr = document.querySelectorAll("tr");

  for (let i = 1; i < tr.length; i++) {
    tr[i].remove();
  }

  lscache.flush();
  $(".clearAllData").modal("hide");
  toastShow("All data has been cleared.");
}
//Запуск модальки
let btn = document.querySelector(".modalAdd");
btn.addEventListener("click", () => {
  document.querySelector(".sendBtn").removeAttribute("disabled");
  document.querySelector(".updateDate").setAttribute("disabled", "");
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
  let address = `${form.zip.value}, ${form.city.value}, ${form.street.value}, ${form.house.value}`;
  let status;
  form.active.checked ? (status = "Active") : (status = "Inactive");
  let date = new Date();
  let mainDate = `${date.getFullYear()}-${date.getMonth() +
    1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;

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
    dateCreate: mainDate,
    dateUpd: mainDate,
    status: status,
    del: delBtn,
    edit: editBtn
  };

  lscache.set(mainIndex, objData);

  valueStorage();

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
  <td><button type="button" class="btn btn-primary edit">edit</button></td>
  <td><button type="button" class="btn btn-warning del">del</button></td>`;

  let tr = document.createElement("tr");
  tr.innerHTML = trData;
  tbody.append(tr);
  $("#ModalAdd").modal("hide");
  toastShow("Your data has been successfully added.");

  sum = 0;
}

//Забираем данные из LocalStorage при загрузке страницы
function getDataFromStorage() {
  mainIndex = lscache.get(localStorage.length - 1).index + 1;
  for (let i = 1; i <= localStorage.length - 1; i++) {
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
  <td>${lscache.get(i).dateUpd}</td>
  <td>${lscache.get(i).status}</td>
  <td>${lscache.get(i).edit}</td>
  <td>${lscache.get(i).del}</td>`;

    let tr = document.createElement("tr");
    tr.innerHTML = trData;
    tbody.append(tr);
  }
}

function toastShow(msg = "") {
  let toasBody = document.querySelector(".toast-body");
  toasBody.innerHTML = msg;
  $(".toast").toast("show");
}

//Сохраняем ключи значений в LS
function valueStorage() {
  if (lscache.get(0) != null) {
    keyArr = [];
    keyArr = lscache.get(0);
    keyArr.push(mainIndex);
  } else {
    keyArr.push(mainIndex);
  }
  lscache.set(0, keyArr);
}
