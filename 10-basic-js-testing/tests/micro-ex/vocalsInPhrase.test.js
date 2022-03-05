import { deleteDuplicity, getPhrase, getVocals, searchVocals } from "../../src/micro-ex/vocalsInPhrase";
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import {  } from '@testing-library/jest-dom';

describe('Vocals in phrase', () => {

    test('should return la', () => {
        document.body.innerHTML = /* html */
            `<div>
                <input id="input-phrase" type="text" value="la">
            </div>`

        let phrase = document.getElementById('input-phrase').value;
        let result = getPhrase(phrase);
        expect(result).toBe(phrase);
    });

    test('should return a', () => {
        document.body.innerHTML = /* html */
            `<div>
                <input id="input-phrase" type="text" value="la">
            </div>`

        let vocal = 'a';
        let phrase = document.getElementById('input-phrase').value;
        let result = searchVocals(phrase);
        expect(result).toContain(vocal);
    });

    test('should return a,e,i,o,u', () => {
        document.body.innerHTML = /* html */
            `<div>
                <input id="input-phrase" type="text" value="la le li lo lu">
            </div>`

        let vocals = ['a','e','i','o','u'];
        let phrase = document.getElementById('input-phrase').value;
        let result = searchVocals(phrase);
        expect(result).toEqual(vocals);
    });

    test('should return vocals without duplicity', () => {
        document.body.innerHTML = /* html */
            `<div>
                <input id="input-phrase" type="text" value="la le li lo lu pa pe pi po pu">
            </div>`

        let vocals = ['a','e','i','o','u'];
        let phrase = document.getElementById('input-phrase').value;
        let result = searchVocals(phrase);
        expect(result).toEqual(vocals);
    });

    test('should return only one i', () => {
        let list = ['i','i'];
        let result = deleteDuplicity(list);
        expect(result).toEqual(['i']);
    });

    test('should print vocals', () => {
        document.body.innerHTML = /* html */
            `<div>
                <input id="input-phrase" type="text" value="Hello World">
                <h2 id="vocals-in-phrase"></h2>
            </div>`

        let vocals = 'e,o';
        let phrase = document.getElementById('input-phrase').value;
        let vocalsInPhrase = document.getElementById('vocals-in-phrase');
        let volcalsList = searchVocals(phrase)
        let result = getVocals(volcalsList);
        expect(result).toEqual(vocals);
    });
});

