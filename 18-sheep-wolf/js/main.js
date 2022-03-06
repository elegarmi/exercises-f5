let list = [
    true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
]

let numOfSheeps = 0;

list.forEach(animal => {
    if(animal === true) {
        numOfSheeps++;
    }
})

document.getElementById("ovejas").innerHTML = `There are ${numOfSheeps} sheep in total`;
