let btn1 = document.getElementById("buttonT1");
let input = document.querySelector(".form-control");
btn1.addEventListener("click", task1Fun);
input.addEventListener("keypress", task1FunE);

function task1FunE(e) {
  if (e.keyCode == 13) {
    task1Fun();
  }
}

function task1Fun() {
  let date = document.querySelector("#text1").value;
  let dateNow = Date.now();
  let mainDate = new Date(date);
  let formtext = document.querySelector("#text1HelpText");
  let text = `Ну и с каких пор '${date}' соответствует формату xxxx-xx-xx?`;
  let mainText =
    "Дата рождения должна быть в формате год-месяц-число (2017-01-26)";
  let re = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;

  if (!re.test(date)) {
    formtext.style.color = "red";
    formtext.innerHTML = text;
    setTimeout(() => {
      formtext.style.color = "#6c757d";
      formtext.innerHTML = mainText;
    }, 3000);
  } else {
    let h5 = document.querySelector(".task1_1");
    let h5_2 = document.querySelector(".task1_2");
    let h5_3 = document.querySelector(".task1_3");
    let arr = [
      "воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота"
    ];
    formtext.style.color = "green";
    formtext.innerHTML = "Отлично... Давай посмотрим...";
    setTimeout(() => {
      formtext.style.color = "#6c757d";
      formtext.innerHTML = "Отлично... Давай посмотрим...";
    }, 3000);
    h5.innerHTML = `День вашего рождения: ${arr[mainDate.getDay()]}`;

    let time = dateNow - mainDate.getTime();
    h5_2.innerHTML = `Cо дня рождения прошло: ${parseInt(
      time / 1000 / 60 / 60 / 24
    )} дней`;

    let time2 = new Date(); //Дата ближайшего дня рождения
    let time3 = new Date(); //Текущая дата

    time2.setMonth(mainDate.getMonth());
    time2.setDate(mainDate.getDate());

    if (time3 < time2) {
      h5_3.innerHTML = `До вашего дня рождения осталось: ${(time2 - time3) /
        1000 /
        60 /
        60 /
        24} дней`;
    } else {
      time2.setFullYear(time3.getFullYear() + 1);
      h5_3.innerHTML = `До вашего дня рождения осталось: ${(time2 - time3) /
        1000 /
        60 /
        60 /
        24} дней`;
    }
  }
  secondOfLife();
  setInterval(secondOfLife, 1000);
}

function secondOfLife() {
  let h5_4 = document.querySelector(".task1_4");
  let dateNow = new Date();
  let timeZero = new Date();
  timeZero.setHours(0);
  timeZero.setMinutes(0);
  timeZero.setSeconds(0);
  h5_4.innerHTML = `За сегодня вы прожили: ${Math.round(
    (dateNow - timeZero) / 1000 / 60
  )} минут. Это ${Math.floor(dateNow - timeZero) / 1000} секунд`;
}

function newYearTime() {
  let btn = document.getElementsByClassName("disable");
  let pb = document.querySelector(".progress-bar");

  let date = new Date();
  let start = new Date("January 01, 2020 00:00:00");
  let nyDate = new Date("January 01, 2021 00:00:00");
  let distance = nyDate.getTime() - date.getTime();
  let year = nyDate.getTime() - start.getTime();

  pb.setAttribute("aria-valuemax", nyDate.getTime());
  pb.setAttribute("aria-valuemin", start.getTime());
  pb.setAttribute("aria-valuenow", distance);

  let prc = (((year - distance) * 100) / year).toFixed(5);
  pb.setAttribute("style", `width: ${prc}%;`);
  pb.innerHTML = `${prc}%`;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = distance % (1000 * 60 * 60 * 24);
  let mins = (distance % (1000 * 60 * 60)) / (1000 * 60);
  let sec = (distance % (1000 * 60)) / 1000;

  btn[0].innerHTML = `${days} дней`;
  btn[1].innerHTML = `${Math.floor(hours / (1000 * 60 * 60))} часов`;
  btn[2].innerHTML = `${Math.floor(mins)} минут`;
  btn[3].innerHTML = `${Math.floor(sec)} секунд`;

  setInterval(() => {
    let date = new Date();
    let start = new Date("January 01, 2020 00:00:00");
    let nyDate = new Date("January 01, 2021 00:00:00");
    let distance = nyDate - date;
    let year = nyDate.getTime() - start.getTime();

    pb.setAttribute("aria-valuemax", nyDate.getTime());
    pb.setAttribute("aria-valuemin", start.getTime());
    pb.setAttribute("aria-valuenow", distance);

    let prc = (((year - distance) * 100) / year).toFixed(5);
    pb.setAttribute("style", `width: ${prc}%;`);
    pb.innerHTML = `${prc}%`;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = distance % (1000 * 60 * 60 * 24);
    let mins = (distance % (1000 * 60 * 60)) / (1000 * 60);
    let sec = (distance % (1000 * 60)) / 1000;

    btn[0].innerHTML = `${days} дней`;
    btn[1].innerHTML = `${Math.floor(hours / (1000 * 60 * 60))} часов`;
    btn[2].innerHTML = `${Math.floor(mins)} минут`;
    btn[3].innerHTML = `${Math.floor(sec)} секунд`;
  }, 1000);
}

newYearTime();
