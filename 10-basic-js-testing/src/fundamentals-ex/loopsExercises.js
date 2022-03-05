export function countdown()
{
    /* Completa */
    let count = 10;
    let i = 0;

    while(i < count) {
        count--;

        if(count == 0) {
            return "GO";
        }
    }
}

export function createNumberList()
{
    let arrNumbers = [];
    let baseNumber = 1;

    do {
        arrNumbers.push(baseNumber++);
    }

    while (baseNumber <= 10)

    return arrNumbers;
}

export function makePizza()
{
    /* Completa la function utilizando el bucle for*/
    let pizza = {};
    let ingredients = ['masa','tomate', 'mozzarella','cheddar','gorgonzola','parmesano'];

    for (let i = 0; i < ingredients.length; i++) {
        pizza['ingredient' + [i+1]] = ingredients[i];
    }

    return pizza;
}

export function addSpanishInternationalPrefixes()
{
    /* Añade el prefijo internacional de españa a los números de teléfonos del array (+34-). Utiliza el bucle foreach */
    let phoneNumberList = ['054060719','029830776','159949736','663170151','513407584'];

    phoneNumberList.forEach((phoneNumber, i) => {
        phoneNumberList[i] = '+34-' + phoneNumber;
    })

    return phoneNumberList;
}

module.exports = { countdown, createNumberList, makePizza, addSpanishInternationalPrefixes };