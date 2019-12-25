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
let sendBtn = document.querySelector(".sendBtn");
sendBtn.addEventListener("click", regExpCheck);
function regExpCheck() {
  let name = /^[А-Яа-яa-zA-Z_]{2,16}$/;
  let login = /[А-Яа-яa-zA-Z0-9_]/g;

  nameInput = document.querySelector("#name");
  if (!name.test(nameInput.value)) {
    nameInput.classList.add(`animated`);
    nameInput.classList.add(`shake`);
    $('[data-toggle-name="popover"]').popover("show");
    setTimeout(() => {
      nameInput.classList.remove(`animated`);
      nameInput.classList.remove(`shake`);
      $('[data-toggle-name="popover"]').popover("hide");
    }, 2000);
  }

  loginInput = document.querySelector("#login");
  if (!login.test(loginInput.value)) {
    loginInput.classList.add(`animated`);
    loginInput.classList.add(`shake`);
    $('[data-toggle-login="popover"]').popover("show");
    setTimeout(() => {
      loginInput.classList.remove(`animated`);
      loginInput.classList.remove(`shake`);
      $('[data-toggle-login="popover"]').popover("hide");
    }, 2000);
  }
}
