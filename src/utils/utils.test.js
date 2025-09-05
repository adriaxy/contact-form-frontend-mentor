import {
    validateName
} from './utils.js'

describe('validates name', ()=> {
    const correctName = 'Ramón';
    const nameWithNum = 'ram0n';
    const nameWithSpecialChar = 'r@mon';
    const emptyName = '';
    const nameWithSpace = 'Ramón Lllan';
    const nameLowerCase = 'ramón';
    const nameUpperCase = 'RAMÓN';
    const nameStartsWithSpace = ' RAMÓN';
    const nameWithApostrphe = "O'Connor";

    test('returns true when the name is valid', ()=> {
        expect(validateName(correctName)).toBe(true);
    });

    test('returns false when the name has a number', ()=> {
        expect(validateName(nameWithNum)).toBe(false);
    });

    test('returns false when the name has a special char', ()=> {
        expect(validateName(nameWithSpecialChar)).toBe(false);
    });

    test('returns false when the name is an empty string', ()=> {
        expect(validateName(emptyName)).toBe(false);
    });

    test('returns true when the name has an empty space', ()=> {
        expect(validateName(nameWithSpace)).toBe(true);
    });

    test('returns true when the characters are lower case', ()=> {
        expect(validateName(nameLowerCase)).toBe(true);
    });

    test('returns true when the characters are upper case', ()=> {
        expect(validateName(nameUpperCase)).toBe(true);
    });

    test('returns false when the name starts with space', ()=> {
        expect(validateName(nameStartsWithSpace)).toBe(false);
    });

    test('returns true when the name has an apostrophe', ()=> {
        expect(validateName(nameWithApostrphe)).toBe(true);
    });
})