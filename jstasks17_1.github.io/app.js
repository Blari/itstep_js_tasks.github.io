let doc = document.querySelector("body");
doc.addEventListener("keydown", task1FunE);

function task1FunE(e) {
  if (e.keyCode == 32) {
    console.log(222);
  }
}

let seconds = 0;
let minutes = 0;
let hours = 0;
let ms = 0;

let tic;

let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
start.addEventListener("click", startFu);
stop.addEventListener("click", stopFu);

function startFu() {
  tic = setInterval(render, 10);
}
//Отрисовка в дом
function render() {
  let buttons = document.querySelectorAll(".disable");
  ms++;

  if (ms < 100) {
    ms < 10
      ? (buttons[3].innerHTML = "00" + ms)
      : ms >= 10 && ms < 100
      ? (buttons[3].innerHTML = ms + "0")
      : ms;
  } else {
    ms = 0;
    seconds++;
    if (seconds < 60) {
      if (seconds < 10) {
        buttons[2].innerHTML = "0" + seconds;
        buttons[3].innerHTML = ms + "00";
      } else if (seconds >= 10 && seconds < 60) {
        buttons[2].innerHTML = seconds;
        buttons[3].innerHTML = ms;
      }
    } else {
      seconds = 0;
      minutes++;
      if (minutes >= 0 && minutes < 10) {
        buttons[1].innerHTML = "0" + minutes;
        buttons[2].innerHTML = "0" + seconds;
        buttons[3].innerHTML = ms + "00";
      } else {
        buttons[1].innerHTML = "0" + minutes;
        buttons[2].innerHTML = "0" + seconds;
        buttons[3].innerHTML = ms + "00";
      }
    }
  }
}
//Остановка секундомра
function stopFu() {
  clearInterval(tic);
}
