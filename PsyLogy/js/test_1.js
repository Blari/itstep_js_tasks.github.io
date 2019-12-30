let start = document.querySelector(".start");
start.addEventListener("click", startTest);
let row = document.querySelectorAll(".row");
row[1].classList.add("d-none");

function startTest() {
  setTimeout(() => {
    row[0].classList.add("d-none");
  }, 1500);
  row[0].classList.add("fadeOutUp");

  row[1].classList.remove("d-none");
  row[1].classList.add("d-flex");
  row[1].classList.add("fadeIn");
}
