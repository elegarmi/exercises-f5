import { isLove } from '../../src/micro-ex/oppositesAttract';

describe('Opposites Attract', () => {
    test('Testing if love is in the air', () => {
        expect(isLove(1,4)).toEqual(true);
        expect(isLove(2,2)).toEqual(false);
        expect(isLove(0,1)).toEqual(true);
        expect(isLove(0,0)).toEqual(false);
    });
});