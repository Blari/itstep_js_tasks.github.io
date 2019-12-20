let cont = document.querySelectorAll(".container-fluid")[0];
cont.onwheel = functionRef;

function findFlex() {
  let row = document.getElementsByClassName("row");
  let n = 0;
  for (let i = 0; i < row.length; i++) {
    row[i].style.display == "flex" ? (n = i) : null;
  }
  return n;
}

function functionRef(e) {
  let row = document.querySelectorAll(".row");
  let n = findFlex();
  if (event.deltaY > 0) {
    n == row.length - 1 ? (n = 0) : n - 1;

    for (let i = 0; i < row.length; i++) {
      row[i].style.display = "none";
    }
    row[n + 1].style.display = "flex";
    cont.style.background = "#F9F7ED";
  }
}
