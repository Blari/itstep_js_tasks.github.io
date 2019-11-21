let x = document.getElementsByTagName("*");
let allTags = [...x];
const counts = {};

for (let i = 0; i < allTags.length; i++) {
  let num = allTags[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts);

let max = 0;
let TagName = "";
for (let key in counts) {
  if (counts[key] > max) {
    max = counts[key];
    tagName = key;
  }
}

let abs = (max / allTags.length) * 100;

t1.innerText = tagName;
let pb1 = document.getElementById("pb1");
pb1.setAttribute("style", `width: ${Math.floor(abs)}%`);
pb1.innerText = `${Math.floor(abs)}% (${max} из ${allTags.length})`;

let max2 = 0;
let TagName2 = "";
for (let key in counts) {
  if ((counts[key] > max2) & (counts[key] < max)) {
    max2 = counts[key];
    tagName2 = key;
  }
}

let abs2 = (max2 / allTags.length) * 100;
t2.innerText = tagName2;
let pb2 = document.getElementById("pb2");
pb2.setAttribute("style", `width: ${Math.floor(abs2)}%`);
pb2.innerText = `${Math.floor(abs2)}% (${max2} из ${allTags.length})`;

let max3 = 0;
let TagName3 = "";
for (let key in counts) {
  if ((counts[key] > max3) & (counts[key] < max2)) {
    max3 = counts[key];
    tagName3 = key;
  }
}

let abs3 = (max3 / allTags.length) * 100;
t3.innerText = tagName3;
let pb3 = document.getElementById("pb3");
pb3.setAttribute("style", `width: ${Math.floor(abs3)}%`);
pb3.innerText = `${Math.floor(abs3)}% (${max3} из ${allTags.length})`;

let max4 = 0;
let TagName4 = "";
for (let key in counts) {
  if ((counts[key] > max4) & (counts[key] < max3)) {
    max4 = counts[key];
    tagName4 = key;
  }
}

let abs4 = (max4 / allTags.length) * 100;
t4.innerText = tagName4;
let pb4 = document.getElementById("pb4");
pb4.setAttribute("style", `width: ${Math.floor(abs3)}%`);
pb4.innerText = `${Math.floor(abs4)}% (${max4} из ${allTags.length})`;

let max5 = 0;
let TagName5 = "";
for (let key in counts) {
  if ((counts[key] > max5) & (counts[key] < max4)) {
    max5 = counts[key];
    tagName5 = key;
  }
}

let abs5 = (max5 / allTags.length) * 100;
t5.innerText = tagName5;
let pb5 = document.getElementById("pb5");
pb5.setAttribute("style", `width: ${Math.floor(abs5)}%`);
pb5.innerText = `${Math.floor(abs5)}% (${max5} из ${allTags.length})`;

//pie
var ctxP = document.getElementById("pieChart").getContext("2d");
var myPieChart = new Chart(ctxP, {
  type: "pie",
  data: {
    labels: [tagName1, tagName2, tagName3, tagName4, tagName5],
    datasets: [
      {
        data: [
          Math.floor(abs1),
          Math.floor(abs2),
          Math.floor(abs3),
          Math.floor(abs4),
          Math.floor(abs5)
        ],
        backgroundColor: [
          "#F7464A",
          "#46BFBD",
          "#FDB45C",
          "#949FB1",
          "#4D5360"
        ],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774"
        ]
      }
    ]
  },
  options: {
    responsive: true
  }
});
