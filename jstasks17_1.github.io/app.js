let seconds = 0;
let minutes = 0;
let hours = 0;
let ms = 0;

let tic;
let run = false;

let doc = document.querySelector("body");
doc.addEventListener("keydown", spaceBtn);

let btnS = document.querySelector(".start");
let btnL = document.querySelector(".pause");
let btnR = document.querySelector(".reset");

btnS.addEventListener("click", startFu);
btnL.addEventListener("click", function() {
  alertFu(timeData());
});
btnR.addEventListener("click", resetFu);
//Нажание пробела
function spaceBtn(e) {
  e.keyCode === 32
    ? startFu()
    : e.keyCode === 82
    ? resetFu()
    : e.keyCode === 76
    ? alertFu(timeData())
    : null;
}

//Получаем значени секундомера
function timeData() {
  let time = "";
  let btn = document.querySelectorAll(".disable");
  for (let i = 0; i < btn.length; i++) {
    if (i == 3) {
      time += btn[i].innerText;
    } else {
      time = btn[i].innerText + ":";
    }
  }
  return time;
}
//Запуск секундомера
function startFu() {
  if (run == false) {
    run = true;
    btnL.disabled = false;
    btnR.disabled = false;
    tic = setInterval(render, 10);
  } else if (run == true) {
    run = false;
    clearInterval(tic);
  }
}

// //Обработка ресета
function resetFu() {
  let buttons = document.querySelectorAll(".disable");
  clearInterval(tic);
  run = false;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = "00";
  }
  btnS.disabled = false;
  btnL.disabled = true;
  btnR.disabled = true;
}
function alertFu(time = "00:00") {
  let col = document.querySelector(".alerts");

  let mainDiv = document.createElement("div");
  let btn = document.createElement("button");
  let span = document.createElement("span");

  mainDiv.classList.add("alert");
  mainDiv.classList.add("alert-success");
  mainDiv.classList.add("alert-dismissible");
  mainDiv.classList.add("fade");
  mainDiv.classList.add("show");
  mainDiv.setAttribute("role", "alert");
  btn.classList.add("close");
  btn.setAttribute("type", "button");
  btn.setAttribute("data-dismiss", "alert");
  btn.setAttribute("aria-label", "Close");
  span.setAttribute("aria-hidden", "true");

  span.innerHTML = "&times";
  btn.append(span);
  mainDiv.append(time);
  mainDiv.append(btn);
  col.append(mainDiv);
}
//Отрисовка в дом
function render() {
  let buttons = document.querySelectorAll(".disable");
  ms++;
  if (ms < 100) {
    ms < 10
      ? (buttons[3].innerHTML = "0" + ms)
      : ms >= 10 && ms < 100
      ? (buttons[3].innerHTML = ms)
      : ms;
  } else {
    ms = 0;
    seconds++;
    if (seconds < 60) {
      seconds < 10
        ? (buttons[2].innerHTML = "0" + seconds)
        : seconds >= 10
        ? (buttons[2].innerHTML = seconds)
        : seconds;
    } else {
      seconds = 0;
      minutes++;
      if (minutes < 60) {
        minutes < 10
          ? (buttons[1].innerHTML = "0" + minutes)
          : (buttons[1].innerHTML = minutes);
      } else {
        minutes = 0;
        hours++;
        if (hours < 24) {
          hours < 10
            ? (buttons[0].innerHTML = "0" + hours)
            : (buttons[0].innerHTML = hours);
        }
      }
    }
  }
}
