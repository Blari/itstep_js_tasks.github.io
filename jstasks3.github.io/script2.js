function diofant(numb, start, end){
    let sum = 'Не смог найти числа. Попробуй расширить диапазон.';
    var t1 = performance.now();
    var x = 0, y = 0, z = 0;

    for (var i = start; i <= end; i++){
        x = i*i*i;
        for(var j = start; j <= end; j++){
            y = j*j*j;
            for(var k = start; k <= end; k++){
                z = k*k*k;
                if(x+y+z == numb){
                    sum = `Кажется нашел, проверяй:\nx: ${i}\ny: ${j}\nk: ${k}`;
                    break;
                }
            }
        }
        
    }
    var t2 = performance.now();
    var t = `Время выполнения: ${ (t2-t1).toFixed(3) } миллисекунд. Это ${ ((t2-t1)/1000).toFixed(3) } секунд. Ну или ${ (((t2-t1)/1000)/60).toFixed(1) } минут(ы) :)`;
    
    return {
        result: sum,
        time: t,
    };
}


document.getElementById("task1Diofant").onclick = function(){

    var x = parseInt(document.getElementById("inputTask1").value);
    var start = parseInt(document.getElementById("startNumber").value);
    var end = parseInt(document.getElementById("endNumber").value);

    document.getElementById("task1TextArea").value = diofant(x, start, end).result;
    document.getElementById("task1Time").innerHTML = diofant(x, start, end).time;

}