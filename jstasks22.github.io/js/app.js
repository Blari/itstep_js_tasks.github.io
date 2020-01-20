let resp = [];

let xhr = new XMLHttpRequest();

let apicall =
  "http://api.openweathermap.org/data/2.5/forecast?id=625144&APPID=c7fb95c9d5915c09f09d79dec981acac";

xhr.open("GET", apicall);
xhr.responseType = "json";
xhr.send();
xhr.onload = function () {
  if (xhr.status != 200) {
    console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
  } else {
    resp = xhr.response.list;
    render(resp);
  }
};

function render(resp) {
  console.log(resp);
  let app = document.querySelector(".app");
  let ln = resp.length;
  for (let i = 0; i < ln; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.style.width = "18rem";

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = "img/weather.png";

    let bodyDiv = document.createElement("div");
    bodyDiv.classList.add("card-body");

    let h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.innerHTML = `${(resp[i].main.temp - 273.15).toFixed(1)} °`;

    let p = document.createElement("p");
    p.innerHTML = `Погода`;

    let ul = document.createElement("ul");
    ul.classList.add("list-group");
    ul.classList.add("list-group-flush");

    for (let j = 0; j < 5; j++) {
      let li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerHTML = `${resp[j].dt_txt}: ${(resp[j].main.temp - 273.15).toFixed(
        1
      )} °`;
      ul.appendChild(li);
    }

    bodyDiv.appendChild(h5);
    bodyDiv.appendChild(p);
    cardDiv.appendChild(img);
    cardDiv.appendChild(bodyDiv);
    cardDiv.appendChild(ul);

    let col = document.createElement("div");
    col.classList.add("col-md-3");
    col.appendChild(cardDiv);
    app.appendChild(col);
  }
}
