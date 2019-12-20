let cont = document.querySelectorAll(".container-fluid")[0];
cont.onwheel = functionRef;

function functionRef(e) {
  let row = document.querySelectorAll(".row");

  if (event.deltaY < 0) {
    row[0].style.display = "none";
    row[1].style.display = "flex";
  } else {
    row[1].style.display = "none";
    row[0].style.display = "flex";
  }
}
