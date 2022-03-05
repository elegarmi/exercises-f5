const { checkVariable, checkIfIsInteger, checkIfNumberIsInfinite, sum, subtract, multiply, divide, checkIfNumbIsDivisibleByThree } = require("../../src/fundamentals-ex/numberExercises.js");

describe('Variables can be a number', () => {
    test('should be 1', () => {
        /* Completa el test */
        let number = checkVariable(1);

        expect(number).toBe(1);
    });

    test('should return "number"', () => {
        /* Añade las líneas necesarias al test y modifica la function checkVariable*/
        let result = checkVariable("number");

        expect(result).toBe("number");
    });

    test('should return false if is not an integer', () => {
        /* Añade las líneas necesarias al test y Modifica la function checkIfIsInteger */
        let result = checkIfIsInteger();

        expect(result).toBe(false);
    });

    test('should return "Number is Infinite"', () => {
        /* Añade las líneas necesarias al test y modifica la function checkIfNumberIsInfinite */
        let result = checkIfNumberIsInfinite();      

        expect(result).toBe("Number is Infinite");
    });

});

describe('Arithmetic operators', () => {
    test('should return 25', () => {
        /* Añade las líneas necesarias al test / Modifica la function sum */
        let result = sum(); 
        
        expect(result).toBe(25);
    });

    test('should return 30 after subtract', () => {
        /* Añade las líneas necesarias al test / Modifica la function subtract */
        let result = subtract();

        expect(result).toBe(30);
    });

    test('should return 15 after multiply', () => {
        /* Añade las líneas necesarias al test / Modifica la function multiplication */
        let result = multiply();

        expect(result).toBe(15);
    });

    test('should return 25 after divide', () => {
        /* Añade las líneas necesarias al test / Modifica la function divide */
        let result = divide();

        expect(result).toBe(25);
    });

    test('should return 0 after use modulus operator', () => {
        /* Añade las líneas necesarias al test / Modifica la function checkIfNumbIsDivisibleByThree */
        let result = checkIfNumbIsDivisibleByThree();

        expect(result).toBe('Number is divisible by 3');
    });
});