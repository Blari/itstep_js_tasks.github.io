document.getElementById("buttonT1").onclick = function() {
  let str = document.getElementById("inputT1").value;

  document.getElementById("textAreaT1").value = arrSort(str);
};

document.getElementById("buttonT1-0").onclick = function() {
  let str = randomSring();

  document.getElementById("inputT1").value = str;
};
