let gameInfo = document.getElementById("game-info");
let coin = document.getElementById("coin");
let coinHeads = document.getElementById("heads");
let coinTails = document.getElementById("tails");
let heads = 0;
let tails = 0;

coin.addEventListener("click", () => {
    gameInfo.style.color = "transparent";
    coin.style.animation = "none";
    coinHeads.style.zIndex = 1000;
    coinTails.style.zIndex = 0;

    let randomNum = Math.round(Math.random());
    console.log(randomNum);

    if(randomNum == 1) {
        setTimeout(() => {
            coin.style.animation = "spin-heads 1s forwards";
        }, 100);
    
        heads++;
    } 

    if (randomNum == 0) {
        setTimeout(() => {
            coin.style.animation = "spin-tails 1s forwards";
            coinTails.style.zIndex = 2000;
            cointHeads.style.display = "none";
        }, 100);
    
        tails++;
    }

    setTimeout(updateResults, 1000);
});

function updateResults() {
    let headsCounter = document.getElementById("heads-counter");
    let tailsCounter = document.getElementById("tails-counter");

    headsCounter.textContent = `Cara: ${heads}`;
    tailsCounter.textContent = `Cruz: ${tails}`;
}


// coin.addEventListener("click", () => {
//     gameInfo.style.color = "transparent";

//     let randomNum = Math.round(Math.random());

//     if(randomNum == 1) {
//         setTimeout(() => {
//             coin.style.animation = "spin-heads 3s forwards";
//         }, 100);
    
//         heads++;
//     } 

//     if (randomNum == 0) {
//         setTimeout(() => {
//             coin.style.animation = "spin-tails 3s forwards";
//         }, 100);
    
//         tails++;
//     }

//     setTimeout(updateResults, 3000);
// });


// coin.addEventListener("click", () => {
//     gameInfo.style.color = "transparent";

//     let randomNum = Math.round(Math.random());

//     if(randomNum) {
//         setTimeout(() => {
//             coin.style.animation = "spin-heads 3s forwards";
//         }, 100);
    
//         heads++;
//     } 

//     else {
//         setTimeout(() => {
//             coin.style.animation = "spin-tails 3s forwards";
//         }, 100);
    
//         tails++;
//     }

//     setTimeout(updateResults, 3000);
// });