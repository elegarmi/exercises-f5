export function checkVariable(result)
{  
    return result;
}

export function checkIfIsInteger()
{
    const number = 303.33;

    if(Number.isInteger(number)) {
        return true;
    }

    return false;
}

export function checkIfNumberIsInfinite()
{
    const number = 5 * Infinity;
    /* Tendrás que utilizar un condicional / if ... */

    if(Number.isFinite(number)) {
        return "Number is Finite";
    }
 
    return "Number is Infinite";
}

export function sum()
{
    /* Completa la function utilizando el operador de suma + */
    let numbOne = 20;
    let numTwo = 5;

    return (numbOne + numTwo);
}

export function subtract()
{
    /* Completa la function utilizando el operador de sustracción - */
    const numbOne = 55;
    let numTwo = 25;
    
    return (numbOne - numTwo);
}

export function multiply()
{
    /* Completa la function utilizando el operador de multiplicación * */
    const numbOne = 3;
    let numTwo = 5;

    return (numbOne * numTwo);
}

export function divide()
{
    /* Completa la function utilizando el operador de división / */
    const numbOne = 50;
    let numTwo = 2;

    return (numbOne / numTwo);
}

export function checkIfNumbIsDivisibleByThree()
{
    /* Completa la function utilizando el operador modulus y utiliza el conditional if() */
    const numbOne = 3;
    
    if(numbOne % 3 === 0) {
        return "Number is divisible by 3"
    }

    return "Is not divisible by 3";
}

module.exports = { checkVariable, checkIfIsInteger, checkIfNumberIsInfinite, sum, subtract, multiply, divide, checkIfNumbIsDivisibleByThree };