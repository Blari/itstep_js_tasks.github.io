// function task1FunE(e) {
//   if (e.keyCode == 13) {
//     task1Fun();
//   }
// }

let seconds = 0;
let minutes = 0;
let hours = 0;
let ms = 0;

let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
start.addEventListener("click", timer);
stop.addEventListener("click", stopFu);

let tic = setInterval(render, 10);

//Запуск таймера
function timer() {
  tic;
}
//Отрисовка в дом
function render() {
  let buttons = document.querySelectorAll(".disable");
  ms++;
  if (ms < 100) {
    ms < 10
      ? (buttons[3].innerHTML = "00" + ms)
      : ms < 100
      ? (buttons[3].innerHTML = ms + "0")
      : ms;
  } else {
    ms = 0;
    seconds++;
    if (seconds < 60) {
      if (seconds < 10) {
        buttons[2].innerHTML = "0" + seconds;
        buttons[3].innerHTML = ms;
      } else {
        buttons[2].innerHTML = seconds;
        buttons[3].innerHTML = ms;
      }
    } else {
      seconds = 0;
      minutes++;
      if (minutes < 10) {
        buttons[1].innerHTML = "0" + minutes;
        buttons[2].innerHTML = seconds;
        buttons[3].innerHTML = ms;
      } else {
        buttons[1].innerHTML = minutes;
        buttons[2].innerHTML = seconds;
        buttons[3].innerHTML = ms;
      }
    }
  }
}
//Остановка секундомра
function stopFu() {
  clearInterval(tic);
}
