let img = document.getElementsByClassName("main-galery")[0].children[0]
  .children;
let bigImg = document.getElementsByClassName("img-big")[0];

let modal = document.getElementsByClassName("modal-row")[0];

bigImg.addEventListener("click", closeBigImg);

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", clickFoo);
}

function closeBigImg() {
  bigImg.src = "#";
  modal.style.visibility = "hidden";
  modal.style.opacity = "0";
  bigImg.style.opacity = "0";
}

function clickFoo() {
  bigImg.src = this.src;
  bigImg.style.opacity = "1";
  bigImg.style.visibility = "visible";
  modal.style.visibility = "visible";
  modal.style.opacity = "1";
}
