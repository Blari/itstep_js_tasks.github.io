document.addEventListener("DOMContentLoaded", () => {
  // ti1.src = `https://picsum.photos/id/${Math.floor(
  //   Math.random() * 1000
  // )}/800/600`;
  // ti1.src = `https://loremflickr.com/1920/1080/cat`;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://loremflickr.com/1080/720/cat");
  xhr.send();
  xhr.onload = function() {
    if (xhr.status != 200) {
      // HTTP ошибка?
      // обработаем ошибку
      console.log("Ошибка: " + xhr.status);
      return;
    }
    // получим ответ из xhr.response
    ti1.src = `${xhr.responseURL}`;
  };
  xhr.onprogress = function(event) {
    pb1.setAttribute("style", `width: ${(event.loaded / event.total) * 100}%`);
  };
});

btn.addEventListener("click", () => {
  box.style.opacity = "1";
  box.style.visibility = "visible";
});

btn2.addEventListener("click", () => {
  box.style.opacity = "0";
  box.style.visibility = "hidden";
});

tab1.addEventListener("click", () => {
  pb1.setAttribute("style", `width: 0%`);
  tb1.style.display = "block";
  tab1.style.backgroundColor = "rgb(255, 191, 191)";
  tab2.style.backgroundColor = "rgb(201, 201, 201)";
  tab3.style.backgroundColor = "rgb(201, 201, 201)";
  tb2.style.display = "none";
  tb3.style.display = "none";

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://loremflickr.com/1080/720/cat");
  xhr.send();
  xhr.onload = function() {
    if (xhr.status != 200) {
      // HTTP ошибка?
      // обработаем ошибку
      console.log("Ошибка: " + xhr.status);
      return;
    }
    // получим ответ из xhr.response
    ti1.src = `${xhr.responseURL}`;
  };
  xhr.onprogress = function(event) {
    pb1.setAttribute("style", `width: ${(event.loaded / event.total) * 100}%`);
  };
});

tab2.addEventListener("click", () => {
  pb2.setAttribute("style", `width: 0%`);
  tb1.style.display = "none";
  tb2.style.display = "block";
  tab1.style.backgroundColor = "rgb(201, 201, 201)";
  tab2.style.backgroundColor = "rgb(255, 191, 191)";
  tab3.style.backgroundColor = "rgb(201, 201, 201)";
  tb3.style.display = "none";
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://loremflickr.com/1080/720/dog");
  xhr.send();
  xhr.onload = function() {
    if (xhr.status != 200) {
      // HTTP ошибка?
      // обработаем ошибку
      console.log("Ошибка: " + xhr.status);
      return;
    }
    // получим ответ из xhr.response
    ti2.src = `${xhr.responseURL}`;
  };
  xhr.onprogress = function(event) {
    pb2.setAttribute("style", `width: ${(event.loaded / event.total) * 100}%`);
  };
});
tab3.addEventListener("click", () => {
  pb3.setAttribute("style", `width: 0%`);
  tb1.style.display = "none";
  tb2.style.display = "none";
  tb3.style.display = "block";
  tab1.style.backgroundColor = "rgb(201, 201, 201)";
  tab2.style.backgroundColor = "rgb(201, 201, 201)";
  tab3.style.backgroundColor = "rgb(255, 191, 191)";
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://loremflickr.com/1080/720/bird");
  xhr.send();
  xhr.onload = function() {
    if (xhr.status != 200) {
      // HTTP ошибка?
      // обработаем ошибку
      console.log("Ошибка: " + xhr.status);
      return;
    }
    // получим ответ из xhr.response
    ti3.src = `${xhr.responseURL}`;
  };
  xhr.onprogress = function(event) {
    pb3.setAttribute("style", `width: ${(event.loaded / event.total) * 100}%`);
  };
});
