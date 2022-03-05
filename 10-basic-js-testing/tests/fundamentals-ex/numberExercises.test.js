const {} = require("../../src/fundamentals-ex/numberExercises.js");

describe('Variables can be a number', () => {
    test.skip('should be 1', () => {
        /* Completa el test */

        expect(number).toBe(1);
    });

    test.skip('should return "number"', () => {
        /* Añade las líneas necesarias al test y modifica la function checkVariable*/
        
        expect(result).toBe("number");
    });

    test.skip('should return false if is not an integer', () => {
        /* Añade las líneas necesarias al test y Modifica la function checkIfIsInteger */

        expect(result).toBe(false);
    });

    test.skip('should return "Number is Infinite"', () => {
        /* Añade las líneas necesarias al test y modifica la function checkIfNumberIsInfinite */
        
        expect(result).toBe("Number is Infinite");
    });

});

describe('Arithmetic operators', () => {
    test.skip('should return 25', () => {
        /* Añade las líneas necesarias al test / Modifica la function sum */

        expect(result).toBe(25);
    });

    test.skip('should return 30 after subtract', () => {
        /* Añade las líneas necesarias al test / Modifica la function subtract */

        expect(result).toBe(30);
    });

    test.skip('should return 15 after multiply', () => {
        /* Añade las líneas necesarias al test / Modifica la function multiplication */
        
        expect(result).toBe(15);
    });

    test.skip('should return 25 after divide', () => {
        /* Añade las líneas necesarias al test / Modifica la function divide */

        expect(result).toBe(25);
    });

    test.skip('should return 0 after use modulus operator', () => {
        /* Añade las líneas necesarias al test / Modifica la function checkIfNumbIsDivisibleByThree */

        expect(result).toBe('Number is divisible by 3');
    });
});