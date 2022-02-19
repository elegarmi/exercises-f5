let img = document.getElementById("coin-img");

img.addEventListener("click", () => {
    let randomNum = Math.floor(Math.random() * 2);
    
    if(randomNum == 1) {
        img.src="assets/coin-1.png"
    }   
    if (randomNum == 0) {
        img.src="assets/coin-0.png"
    }
});