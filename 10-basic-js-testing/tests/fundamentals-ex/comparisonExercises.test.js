// import { isJane, compareNumbers, isGreaterThan10, isGreaterThan10AndEqualTo20 } from "../../src/fundamentals-ex/comparisonExercises.js";
const { isJane, compareNumbers, isGreaterThan10, isGreaterThan10AndEqualTo20 } = require ("../../src/fundamentals-ex/comparisonExercises.js");

describe('Comparison Exercises', () => {
    test('using == should be equal to Jane', () => {
        /* Completa el test y modifica la function isJane */
        let result = isJane("Jane");

        expect(result).toBe('Jane');
    });

    test('using === should return 10', () => {
        /* Completa el test y modifica la function compareNumbers */
        let result = compareNumbers();

        expect(result).toEqual(10);
    });

    test('quantity are greater than 10', () => {
        /* Completa el test y modifica la function isGreaterThan10 */
        let result = isGreaterThan10(11);

        expect(result).toBeGreaterThan(10);
    });
});

describe('Logical comparison', () => {
    test('should be greater than 10 and equal to 20', () => {
        /* Completa el test y modifica la function isGreaterThan10AndEqualTo20 */
        let result = isGreaterThan10AndEqualTo20(20);

        expect(result).toBeGreaterThan(10);
        expect(result).toEqual(20);
    });
});