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
  console.log(n);
  if (event.deltaY < 0) {
    row[0].style.display = "none";
    row[1].style.display = "flex";
    cont.style.background = "#F9F7ED";
  } else {
    row[1].style.display = "none";
    row[0].style.display = "flex";

    cont.style.background = "#cdeb8b";
  }
}
