let resp = [];

let xhr = new XMLHttpRequest();

let apicall =
  "http://api.openweathermap.org/data/2.5/forecast?id=625144&APPID=c7fb95c9d5915c09f09d79dec981acac";

xhr.open("GET", apicall);
xhr.responseType = "json";
xhr.send();
xhr.onload = function(cb) {
  resp = xhr.response.list;
  console.log(resp);
  cb;
};

function render() {
  let app = document.querySelector(".app");
  for (let i = 0; i < resp.length; i++) {
    let p = document.createElement("p");
    p.innerHTML = (resp[i].main.temp - 273, 15);
    app.appendChild(p);
  }
}
