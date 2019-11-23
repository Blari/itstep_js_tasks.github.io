let img = document.getElementsByClassName("main-galery")[0].children[0]
  .children;
let bigImg = document.getElementsByClassName("img-big")[0];

let info = bigImg.children[0].children[0];

let modal = document.getElementsByClassName("modal-row")[0];
console.log(info);
bigImg.addEventListener("click", closeBigImg);

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", clickFoo);
}

function closeBigImg() {
  bigImg.style.backgroundImage = `none`;
  bigImg.style.visibility = "hidden";
  modal.style.visibility = "hidden";
  modal.style.opacity = "0";
  bigImg.style.opacity = "0";
}

function clickFoo() {
  bigImg.style.backgroundImage = `url(${this.src})`;
  bigImg.style.backgroundSize = `contain`;
  bigImg.style.opacity = "1";
  bigImg.style.visibility = "visible";
  info.innerHTML = this.getAttribute("data-info");

  modal.style.visibility = "visible";
  modal.style.opacity = "1";
}
