let start = document.querySelector(".start");
start.addEventListener("click", startTest);

function startTest() {
  let row = document.querySelectorAll(".row");
  row[0].classList.add("d-none");

  row[1].classList.add("d-flex");

  row[1].classList.add("fadeIn");
}
