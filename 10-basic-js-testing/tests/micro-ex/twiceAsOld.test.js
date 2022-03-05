import { twiceAsOld } from '../../src/micro-ex/twiceAsOld';

describe('Sample tests', () => {
    test("Testing for dad's age: 36 and son's age: 7", () => {
        let dadAge = 36;
        let sonAge = 7;
        let result = twiceAsOld(dadAge, sonAge);
        expect(result).toEqual(22);
    });

    test("Testing for dad's age: 55 and son's age: 30", () => {
        let dadAge = 55;
        let sonAge = 30;
        let result = twiceAsOld(dadAge, sonAge);
        expect(result).toEqual(5);
    });

    test("Testing for dad's age: 42 and son's age: 21", () => {
        let dadAge = 42;
        let sonAge = 21;
        let result = twiceAsOld(dadAge, sonAge);
        expect(result).toEqual(0);
    });

    test("Testing for dad's age: 22 and son's age: 1", () => {
        let dadAge = 22;
        let sonAge = 1;
        let result = twiceAsOld(dadAge, sonAge);
        expect(result).toEqual(20);
    });

    test("Testing for dad's age: 29 and son's age: 0", () => {
        let dadAge = 29;
        let sonAge = 0;
        let result = twiceAsOld(dadAge, sonAge);
        expect(result).toEqual(29);
    });
});
