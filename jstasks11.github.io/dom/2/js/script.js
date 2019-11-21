
let td = document.getElementsByClassName("table")[0].getElementsByTagName("td");
let allSum = 0;
sum.innerHTML = `Сумма = ${allSum}`;
for (let i = 0; i < td.length; i++) {
    td[i].innerHTML = Math.floor(Math.random() * 100);
    td[i].addEventListener("click", runTd);
    td[i].addEventListener("contextmenu", runTd2);


    function runTd() {
        if (this.className != "active") {
            this.classList.remove("notactive");
            this.classList.toggle("active");
            let val = +this.innerHTML;
            allSum += val;
        }
        sum.innerHTML = `Сумма = ${allSum}`;
    }
}

function runTd2() {
    if (this.className == "active") {
        this.classList.remove("active");
        this.classList.toggle('notactive');
        let val = +this.innerHTML;
        allSum -= val;
    }
    sum.innerHTML = `Сумма = ${allSum}`;

}



