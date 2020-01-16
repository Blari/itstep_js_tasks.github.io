let xhr = new XMLHttpRequest();

let apicall =
  "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=c7fb95c9d5915c09f09d79dec981acac";

xhr.open("GET", apicall);
xhr.responseType = "json";
xhr.send();
xhr.onload = () => {
  console.log(xhr.response);
};
