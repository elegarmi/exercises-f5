export function hideWords(word) {
    word.style.color = "transparent";
}

export function showWords(word) {
    word.removeAttribute("style");
}