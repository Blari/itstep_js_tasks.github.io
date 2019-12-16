let btn = document.querySelector(".btn");
btn.addEventListener("click", cookSet);
let arr = ["Доброго утра", "Доброго дня", "Доброго вечера", "Доброй ночи"];
//Приветствие в зависимости от времени
function timeDay() {
  let p = document.querySelector(".greetings");
  let date = new Date();
  let day = "";
  date.getHours() >= 0 && date.getHours() < 6
    ? (day = arr[3])
    : date.getHours() >= 6 && date.getHours() < 12
    ? (day = arr[0])
    : date.getHours() >= 12 && date.getHours() < 18
    ? (day = arr[1])
    : date.getHours() >= 18 && date.getHours() < 24
    ? (day = arr[2])
    : (day = "");
  p.innerHTML = `${day}, пользователь! Представся и мы продолжим.`;
}

function cookSet() {
  let input = document.querySelectorAll("input");
  Cookies.set("name", input[0].value, { expires: 14 });
  Cookies.set("sername", input[1].value, { expires: 14 });
}

timeDay();
