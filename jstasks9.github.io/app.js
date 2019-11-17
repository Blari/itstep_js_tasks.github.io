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
  tab1.style.backgroundColor = "rgb(101, 101, 101)";
  tab2.style.backgroundColor = "rgb(201, 201, 201)";
  tab3.style.backgroundColor = "rgb(201, 201, 201)";
  tb2.style.display = "none";
  tb3.style.display = "none";
});

tab2.addEventListener("click", () => {
  tb1.style.display = "none";
  tb2.style.display = "block";
  tab1.style.backgroundColor = "rgb(201, 201, 201)";
  tab2.style.backgroundColor = "rgb(101, 101, 101)";
  tab3.style.backgroundColor = "rgb(201, 201, 201)";
  tb3.style.display = "none";
});
tab3.addEventListener("click", () => {
  tb1.style.display = "none";
  tb2.style.display = "none";
  tb3.style.display = "block";
  tab1.style.backgroundColor = "rgb(201, 201, 201)";
  tab2.style.backgroundColor = "rgb(201, 201, 201)";
  tab3.style.backgroundColor = "rgb(101, 101, 101)";
});
