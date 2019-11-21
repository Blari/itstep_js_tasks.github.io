window.onload = function (){
    let img = document.getElementsByClassName("gallery")[0].getElementsByTagName("img");
    let mainPhoto = big.children[0];
        mainPhoto.src=img[0].getAttribute("data-src");

    for (let i=0; i<img.length; i++) {
        img[i].addEventListener("click", runGallery);
    }
    
    function runGallery() {
        let url =  this.getAttribute("data-src");
            mainPhoto.setAttribute("src", url);

        // big.children[0].src = this.src
        //big.children[0].setAttribute("src", this.getAttribute("src"))
    }
}



