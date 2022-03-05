import { returnThirdAngle } from '../../src/micro-ex/thirdAngleTriangle';

describe('Third angle of the triangle', () => {
    test('Sum of a triangle angles are 180 degree', () => {
        expect(returnThirdAngle(30, 60)).toEqual(90);
        expect(returnThirdAngle(60, 60)).toEqual(60);
        expect(returnThirdAngle(43, 78)).toEqual(59);
        expect(returnThirdAngle(10, 20)).toEqual(150);
    });
});