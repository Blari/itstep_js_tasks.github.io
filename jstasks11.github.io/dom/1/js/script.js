window.onload = function (){

	document.getElementById("buttonRun").onclick = function(){
        let p = document.getElementsByTagName("p");
        for (let i =0 ; i<p.length; i++){
            p[i].onclick = runLi;
            p[i].innerHTML=i;
        }
    }

    let body = document.body;
	let all = document.getElementsByTagName("*");
	let div = body.children[1];
    let li = div.getElementsByTagName("li");
    let liNew = box.children[4].children;
    ----
    let boxClass = document.getElementsByClassName("box")[0];
    let liNew2 = boxClass.children[4].children;
    	console.log(li);
    	console.log(liNew);
    	console.log(all);
    	console.log(box.getElementsByTagName("*"));


    	console.log(body.childNodes);
    	console.log(body.children);
	function runLi() {
		console.log(1);
    }

}



