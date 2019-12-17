let btn = document.querySelectorAll(".btn");
btn[0].addEventListener("click", cookSet);
btn[1].addEventListener("click", cookGet);
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
  let date = new Date();
  let input = document.querySelectorAll("input");
  Cookies.set("name", input[0].value, { expires: 14 });
  Cookies.set("sername", input[1].value, { expires: 14 });
  Cookies.set("date", date.toLocaleDateString, { expires: 14 });
  Cookies.set("count", 0, { expires: 14 });
}

function cookGet() {
  console.log("Куки");
  console.log(Cookies.get());
}

function jumbotron() {
  let app = document.querySelector(".app");
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  let hr = document.createElement("hr");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let a = document.createElement("a");

  div.classList.add("jumbotron");
  h1.classList.add("display-4");

  h1.append(`Привет, ${Cookies.get("name")} ${Cookies.get("sername")}`);
  p.classList.add("lead");
  hr.classList.add("my-4");
  p.append(`Последний раз ты сюда заходил ${Cookies.get("date")}. `);
  p.append(`И это твой ${Cookies.get("count")} заход.`);
  Cookies.set("count", +Cookies.get("count") + 1);
  p2.classList.add("lead");
  p2.append(
    "Использются служебные классы для типографики и расстояния содержимого в контейнере большего размера."
  );
  a.classList.add("btn");
  a.classList.add("btn-primary");
  a.classList.add("btn-lg");
  a.href = "#";
  a.setAttribute("role", "button");
  a.addEventListener("click", cookClean);
  a.append("Выход");

  p3.append(a);
  div.append(h1);
  div.append(p);
  div.append(hr);
  div.append(p2);
  div.append(p3);
  app.append(div);
}

function cookClean() {
  Cookies.remove("name");
  Cookies.remove("surname");
}

timeDay();
jumbotron();