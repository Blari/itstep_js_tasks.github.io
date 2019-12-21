let row = document.getElementsByClassName("row");
let cont = document.querySelectorAll(".container-fluid")[0];
cont.onwheel = functionRef;
//Скрываем лишние блоки
function hideRow(x) {
  for (let i = x; i < row.length; i++) {
    row[i].style.display = "none";
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
    n === 2 ? (n = -1) : n;

    hideRow(0);

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
  } else {
    n === 0 ? (n = 3) : n;

    hideRow(0);

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
  }
}

hideRow(1);
