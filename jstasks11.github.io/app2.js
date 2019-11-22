let img = document.getElementsByClassName("main-galery")[0].children[0]
  .children;
let bigImg = document.getElementsByClassName("img-big")[0];

bigImg.addEventListener("click", closeBigImg);

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", clickFoo);
}

function closeBigImg() {
  bigImg.src = "#";
}

function clickFoo() {
  bigImg.src = this.src;
}
