import { returnAString, concatenateStrings, giveOneLetter, giveTheIndexOfWord, replaceFishWords, giveAllLettersInUppercase, removeWhiteSpaces } from "../../src/fundamentals-ex/stringExercises";

describe('Variables can be a string', () => {
    test('should say Hello', () => {
        /* agrega la línea que falta */
        let result = returnAString('Hello');

        expect(result).toBe('Hello');
    });

    test('should return Hello World', () => {
        /* Modifica la function returnAString del archivo stringExercises */
        const result = returnAString('Hello World');

        expect(result).toBe('Hello World');
    });

    test('should be return I Love JS', () => {
        /* Añade las líneas necesarias al test / Modifica la function concatenateStrings */
        let result = concatenateStrings();

        expect(result).toBe('I Love JS');
    });

    test('should return letter g', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveOneLetter para que devuelva la letra g de la variable configurada */
        let result = giveOneLetter();

        expect(result).toBe('g');
    });

    test('should return -1', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveTheIndexOfWord */
        let result = giveTheIndexOfWord();

        expect(result).toEqual(-1);
    });

    test('should return "Give a Man a Pussy Cat" ', () => {
        /* Añade las líneas necesarias al test / Modifica la function replaceFishWords */
        let result = replaceFishWords();

        expect(result).toBe('Give a Man a Pussy Cat');
    });

    test('should return "RIDE HIM, COWBOY!"', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveAllLettersInUppercase */
        let result = giveAllLettersInUppercase();

        expect(result).toBe('RIDE HIM, COWBOY!');
    });

    test('should return "Hands Down"', () => {
        /* Añade las líneas necesarias al test y modifica la function removeWhiteSpace */
        let result = removeWhiteSpaces();

        expect(result).toBe('Hands Down');
    });
});