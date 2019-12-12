let btn1 = document.getElementById("buttonT1");
btn1.addEventListener("click", task1Fun);

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
    formtext.innerHTML = "Отлично... Давай посмотрим...";
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

  let h5_4 = document.querySelector(".task1_4");

  setInterval(() => {
    let timeZero = new Date();
    timeZero.setHours(0);
    timeZero.setMinutes(0);
    timeZero.setSeconds(0);
    h5_4.innerHTML = `За сегодня вы прожили: ${(
      (dateNow - timeZero) /
      1000 /
      60
    ).toFixed(3)} минут`;
  }, 1000);
}
