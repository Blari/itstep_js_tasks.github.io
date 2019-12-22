let row = document.getElementsByClassName("row");
let cont = document.querySelectorAll(".container-fluid")[0];
let mcol = document.getElementsByClassName("mcol");
cont.onwheel = functionRef;
cont.ontouchmove = functionRef;

//Скрываем лишние блоки
function hideRow(x) {
  for (let i = x; i < row.length; i++) {
    row[i].style.display = "none";
  }
}

function clean(x) {
  x < 0 ? (x = 2) : x;
  if (mcol[x].classList.contains("fadeOutDown"))
    mcol[x].classList.remove("fadeOutDown");
  if (mcol[x].classList.contains("fadeInDown"))
    mcol[x].classList.remove("fadeInDown");
  if (mcol[x].classList.contains("fadeInUp"))
    mcol[x].classList.remove("fadeInUp");
  if (mcol[x].classList.contains("fadeOutUp"))
    mcol[x].classList.remove("fadeOutUp");
}
function clean2(x) {
  x == 3 ? (x = 0) : x;
  if (mcol[x].classList.contains("fadeOutDown"))
    mcol[x].classList.remove("fadeOutDown");
  if (mcol[x].classList.contains("fadeInDown"))
    mcol[x].classList.remove("fadeInDown");
  if (mcol[x].classList.contains("fadeInUp"))
    mcol[x].classList.remove("fadeInUp");
  if (mcol[x].classList.contains("fadeOutUp"))
    mcol[x].classList.remove("fadeOutUp");
}
//Номер "включенного" блока
function findFlex() {
  let row = document.getElementsByClassName("row");
  let n = 0;
  for (let i = 0; i < row.length; i++) {
    row[i].style.display == "flex" ? (n = i) : null;
  }
  return n;
}

function functionRef(e) {
  let n = findFlex();

  if (event.deltaY > 0) {
    //Чистим предыдущий элемент

    //Вниз
    mcol[n].classList.add("fadeOutDown"); //Текущий элемент "пропадает вниз"
    n === 2 ? (n = -1) : n;
    mcol[n + 1].classList.add("fadeInDown"); //Следующий элемент появляется "сверху-вниз"

    setTimeout(() => {
      hideRow(0); //Прячем все элементы

      //Показываем "следующий" элемент
      row[n + 1].style.display = "flex";

      //Меняем цвет фона
      switch (n) {
        case -1:
          cont.style.background = "#C3D9FF";
          break;

        case 0:
          cont.style.background = "#CDEB8B";
          break;

        case 1:
          cont.style.background = "#FFFF88";
          break;
      }
      clean(n);
    }, 250);
  } else {
    n = findFlex();
    //Вверх
    mcol[n].classList.add("fadeOutUp");
    n === 0 ? (n = 3) : n;
    mcol[n - 1].classList.add("fadeInUp");
    setTimeout(() => {
      hideRow(0);
      // cleanDown();
      row[n - 1].style.display = "flex";
      switch (n) {
        case 1:
          cont.style.background = "#C3D9FF";
          break;

        case 2:
          cont.style.background = "#CDEB8B";
          break;

        case 3:
          cont.style.background = "#FFFF88";
          break;
      }
      clean2(n);
    }, 250);
  }
}

hideRow(1);
