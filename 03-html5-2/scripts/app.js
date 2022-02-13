import {changeColor} from "./colored-squares.js";
import {hideWords, showWords} from "./colored-words.js";

function selectCells() {
    let cells = document.getElementsByClassName("cells");
    let arrCells = Array.from(cells);

    arrCells.forEach(cell => {
      cell.addEventListener("click", () => {
          changeColor(cell.id);
      }); 
    });

    let hideBtn = document.getElementById("hide-btn");
    let showBtn = document.getElementById("show-btn"); 
    let words = document.getElementsByClassName("words");
    let arrWords = Array.from(words);

    hideBtn.addEventListener("click", () => {
        arrWords.forEach((word, i) => {
            setTimeout(() => {
                hideWords(word);
            }, i * 500);
        })
    })

    showBtn.addEventListener("click", () => {
        arrWords.forEach((word, i) => {
            setTimeout(() => {
                showWords(word);
            }, i * 500);
        })
    })

    arrWords.forEach(word => {
        word.addEventListener("click", function () {
            hideWords();
        })
    })

}

selectCells();
