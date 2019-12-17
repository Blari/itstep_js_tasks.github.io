let btn = document.querySelectorAll(".btn");
btn[0].addEventListener("click", cookSet);
btn[0].addEventListener("click", jumbotron);

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
function dateStr() {
  let date = new Date();
  return `${date.getFullYear()} года ${date.getMonth() +
    1} месяца в ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
function cookSet() {
  let input = document.querySelectorAll("input");
  let vis = Cookies.get("count");

  vis === undefined
    ? Cookies.set("count", 0, { expires: 14 })
    : Cookies.set("count", +Cookies.get("count") + 1);

  Cookies.set("name", input[0].value, { expires: 14 });
  Cookies.set("sername", input[1].value, { expires: 14 });
  Cookies.set("date", dateStr(), { expires: 14 });
}
function cookSet2() {
  let vis = Cookies.get("count");

  vis === undefined
    ? Cookies.set("count", 0, { expires: 14 })
    : Cookies.set("count", +Cookies.get("count") + 1);

  Cookies.set("date", dateStr(), { expires: 14 });
}
function jumbotron() {
  cookSet2();
  let form = document.querySelector("form");
  form.remove();
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
  //Приветствие
  h1.append(`Привет, ${Cookies.get("name")} ${Cookies.get("sername")}`);
  p.classList.add("lead");
  hr.classList.add("my-4");

  p.append(`Последний раз ты сюда заходил ${Cookies.get("date")}. `);

  p.append(`И это твой ${Cookies.get("count")} заход.`);

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

  div.append(p3);
  app.append(div);
}
function cookClean() {
  Cookies.remove("name");
  Cookies.remove("sername");
  Cookies.remove("count");
  Cookies.remove("date");
  document.location.reload(true);
}

function auth() {
  Cookies.get("name") && Cookies.get("sername") ? jumbotron() : timeDay();
}
auth();
