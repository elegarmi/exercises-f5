export function hideWords() {
    let words = document.getElementsByClassName("words");
    let arrWords = Array.from(words);
    
    arrWords.forEach((word, i) => {
        setTimeout(() => {
            word.style.color = "transparent";
        }, i * 500);
    })
}

export function showWords(word) {
    word.removeAttribute("style");
}