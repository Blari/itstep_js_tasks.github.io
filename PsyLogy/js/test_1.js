let start = document.querySelector(".start");
start.addEventListener("click", startTest);

function startTest() {
  let row = document.querySelectorAll(".row");

  row[0].classList.add("fadeOut");
  setTimeout(() => {
    row[0].classList.add("d-none");
  }, 1000);

  setTimeout(() => {
    row[1].classList.add("d-flex");
  }, 1000);
  row[1].classList.add("fadeIn");
}
