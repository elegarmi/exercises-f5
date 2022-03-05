export function isJane(name)
{
    /* La function debe devolver Jane, obligatorio el uso del comparador == */
    if(name == "Jane") {
        return 'Jane';
    }
}

export function compareNumbers()
{
    /* La function debe devolver 10, obligatorio el uso del comparador === */
    let number1 = parseInt('10');
    let number2 = parseInt('10');

    if(number1 === number2) {
        return 10;
    }
}

export function isGreaterThan10(quantity)
{
    return quantity;
}

export function isGreaterThan10AndEqualTo20(number)
{
    return number;
}

module.exports = { isJane, compareNumbers, isGreaterThan10, isGreaterThan10AndEqualTo20 };