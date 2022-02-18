import { FizzBuzz } from "../scripts/FizzBuzz";

describe("Divisible by three = Fizz, divisible by five = Buzz, divisible by both = FizzBuzz", () => { 
    test("Divisible by both", () => {
        expect(FizzBuzz(60)).toBe("FizzBuzz");
    });

    test("Divisible by three", () => {
        expect(FizzBuzz(21)).toBe("Fizz");
    });

    test("Divisible by five", () => {
        expect(FizzBuzz(20)).toBe("Buzz");
    });
});