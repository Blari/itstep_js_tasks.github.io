let btn1 = document.getElementById('buttonT1');
btn1.addEventListener('click', task1Fun);


function task1Fun(){
  
  let date = document.querySelector('#text1').value;
  let mainDate = new Date(date);
  let formtext = document.querySelector('#text1HelpText');
  let text = `Ну и с каких пор '${date}' соответствует формату xxxx-xx-xx?`;
  let mainText = 'Дата рождения должна быть в формате год-месяц-число (2017-01-26)';
  let re = /^\d{4}(-\d{2}){2}$/;
  
  if (!re.test(date)) {
    formtext.style.color = 'red';
    formtext.innerHTML = text;
    setTimeout(() => {
      formtext.style.color = '#6c757d';
      formtext.innerHTML = mainText;
    }, 3000);
    
  } else {
    let h5 = document.querySelector('.task1_1');
    let h5_2 = document.querySelector('.task1_2');
    let arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    formtext.innerHTML = 'Отлично... Давай посмотрим...';
    h5.innerHTML = `День вашего рождения: ${arr[mainDate.getDay() - 1]}`;
  
    let dateNow = new Date();
    let time = dateNow.getDay() - mainDate.getDay();
    console.log(mainDate.getDay());
  }

}