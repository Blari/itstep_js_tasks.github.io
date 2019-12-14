// function task1FunE(e) {
//   if (e.keyCode == 13) {
//     task1Fun();
//   }
// }
let seconds = 0;
let minutes = 0;
let hours = 0;
let start = document.querySelector(".start");
start.addEventListener("click", task1Fun);
function task1Fun() {
  let time = new Date().getTime();
  let buttons = document.querySelectorAll(".disable");
  console.log(time);
}
