export function changeColor(id) {
  let selectedDiv = document.getElementById(id);
  if (selectedDiv.hasAttribute("style")) {
    selectedDiv.removeAttribute("style");
  } else {
    selectedDiv.style.background = "transparent";
  } 
}