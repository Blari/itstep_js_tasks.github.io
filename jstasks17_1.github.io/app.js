let seconds = 0;
let minutes = 0;
let hours = 0;
let ms = 0;

let tic;
let run = false;

let doc = document.querySelector("body");
doc.addEventListener("keydown", spaceBtn);

let btnS = document.querySelector(".start");
let btnP = document.querySelector(".pause");

btnS.addEventListener("click", startFu);
btnP.addEventListener("click", pauseFu);

function spaceBtn(e) {
  if (e.keyCode === 32) {
    run === false ? startFu() : pauseFu();
  }
}

function startFu() {
  run = true;
  btnS.disabled = true;
  btnP.disabled = false;
  tic = setInterval(render, 10);
}

//Остановка секундомра
function pauseFu() {
  run = false;
  btnS.disabled = false;
  btnP.disabled = true;
  clearInterval(tic);
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
