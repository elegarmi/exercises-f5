import { getPhrase, getVocals, deleteDuplicity, searchVocals } from "../../src/micro-ex/vocalsInPhrase";
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import {  } from '@testing-library/jest-dom';

describe('Vocals in phrase', () => {

    test('should return la', () => {
        let result = getPhrase();

        expect(result).toBe('la');
    });

    test('should return a', () => {
        let result = getVocals();

        expect(result).toContain('a');
    });

    test('should return a,e,i,o,u', () => {
        let result = getVocals();
        let vocals = ['a','e','i','o','u'];

        expect(result).toEqual(vocals);
    });

    test('should return vocals without duplicity', () => {
        let result = getVocals();
        let vocals = ['a','e','i','o','u'];

        expect(result).toEqual(vocals);
    });

    test('should return only one i', () => {
        let result = deleteDuplicity();

        expect(result).toEqual(['i']);
    });

    test('should print vocals', () => {
        let result = searchVocals();
        let vocals = 'e,o';
        expect(result).toEqual(vocals);
    });
});

