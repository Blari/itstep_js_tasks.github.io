let td = document.getElementsByTagName("td");

for (let i = 0; i < td.length; i++) {
  td[i].innerHTML = Math.floor(Math.random() * 100);
  td[i].addEventListener("click", tdFoo);
}

function tdFoo() {
  if (this.classList != "active") {
    this.classList.add("active");
    let el = +document.getElementsByTagName("p")[0].innerHTML;
    el += +this.innerHTML;
    document.getElementsByTagName("p")[0].innerHTML = el;
  } else {
    this.classList.remove("active");
    let el = +document.getElementsByTagName("p")[0].innerHTML;
    el -= +this.innerHTML;
    document.getElementsByTagName("p")[0].innerHTML = el;
  }
}
