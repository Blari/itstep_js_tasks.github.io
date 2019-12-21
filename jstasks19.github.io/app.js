let row = document.getElementsByClassName("row");
let cont = document.querySelectorAll(".container-fluid")[0];
let mcol = document.getElementsByClassName("mcol");
cont.onwheel = functionRef;

//Скрываем лишние блоки
function hideRow(x) {
  for (let i = x; i < row.length; i++) {
    row[i].style.display = "none";
  }
}

function cleanUp() {
  for (let i = 0; i < row.length; i++) {
    if (mcol[i].classList.contains("fadeInUp"))
      mcol[i].classList.remove("fadeInUp");
    if (mcol[i].classList.contains("fadeInDown"))
      mcol[i].classList.remove("fadeInDown");
  }
}

function cleanDown() {
  for (let i = 0; i < row.length; i++) {
    if (mcol[i].classList.contains("fadeOutDown"))
      mcol[i].classList.remove("fadeOutDown");
    if (mcol[i].classList.contains("fadeInDown"))
      mcol[i].classList.remove("fadeInDown");
  }
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
    console.log(event.deltaY);
    //Вниз
    mcol[n].classList.add("fadeOutDown"); //Текущий элемент пропадает вниз

    n === 2 ? (n = -1) : n;
    mcol[n + 1].classList.add("fadeInDown"); //Следующий элемент появляется сверху-вниз

    setTimeout(() => {
      hideRow(0);
      // cleanDown();
      row[n + 1].style.display = "flex";

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
    }, 250);
    mcol[n + 1].classList.remove("fadeOutDown");
  } else {
    console.log(event.deltaY);
    //Вверх
    mcol[n].classList.add("fadeOutUp");
    n === 0 ? (n = 3) : n;
    mcol[n - 1].classList.add("fadeInUp");
    setTimeout(() => {
      hideRow(0);
      cleanDown();
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
    }, 250);
    mcol[n - 1].classList.remove("fadeOutUp");
  }
}

hideRow(1);
