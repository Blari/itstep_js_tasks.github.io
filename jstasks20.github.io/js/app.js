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
    : null;
}
