document.addEventListener("DOMContentLoaded", () => {
  ti1.src = `https://loremflickr.com/1920/1080/cat`;
  // ti1.src = `https://picsum.photos/id/${Math.floor(
  //   Math.random() * 1000
  // )}/800/600`;
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
  tb1.style.display = "block";
  tab1.style.backgroundColor = "rgb(255, 191, 191)";
  tab2.style.backgroundColor = "rgb(201, 201, 201)";
  tab3.style.backgroundColor = "rgb(201, 201, 201)";
  tb2.style.display = "none";
  tb3.style.display = "none";
  const cat = `https://loremflickr.com/1920/1080/cat`;
  ti1.src = cat;
});

tab2.addEventListener("click", () => {
  tb1.style.display = "none";
  tb2.style.display = "block";
  tab1.style.backgroundColor = "rgb(201, 201, 201)";
  tab2.style.backgroundColor = "rgb(255, 191, 191)";
  tab3.style.backgroundColor = "rgb(201, 201, 201)";
  tb3.style.display = "none";
  ti2.src = `https://loremflickr.com/1920/1080/dog`;
});
tab3.addEventListener("click", () => {
  tb1.style.display = "none";
  tb2.style.display = "none";
  tb3.style.display = "block";
  tab1.style.backgroundColor = "rgb(201, 201, 201)";
  tab2.style.backgroundColor = "rgb(201, 201, 201)";
  tab3.style.backgroundColor = "rgb(255, 191, 191)";
  ti3.src = `https://loremflickr.com/1920/1080/birds`;
});
