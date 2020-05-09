import { checkForName} from './nameChecker';

describe('Test, the function "checkForName()" should exist' , () => {
    test('It should return true', () => {
        expect(checkForName).toBeDefined();
    });
});

describe('Test, the function "checkForName()" should be a function', () => {
    test('It should be a function', () => {
        expect (typeof checkForName).toBe('function');
    });
});

describe('Test, the function "checkForName()" should contain Picard', () => {
    test('It should be a function', () => {
        expect(checkForName('Picard')).toBe(true);
    });
});

describe('Test, the function "checkForName()" should contain Janeway', () => {
    test('It should be a function', () => {
        expect(checkForName('Janeway')).toBe(true);
    });
});

describe('Test, the function "checkForName()" should contain Kirk', () => {
    test('It should be a function', () => {
        expect(checkForName('Kirk')).toBe(true);
    });
});

describe('Test, the function "checkForName()" should contain Archer', () => {
    test('It should be a function', () => {
        expect(checkForName('Archer')).toBe(true);
    });
});

describe('Test, the function "checkForName()" should contain Georgiou', () => {
    test('It should be a function', () => {
        expect(checkForName('Georgiou')).toBe(true);
    });
});

describe('Test, the function "checkForName()" should contain Terry', () => {
    test('It should be a function', () => {
        expect(checkForName('Terry')).toBe(false);
    });
});

describe('Test, the function "checkForName()" should contain null', () => {
    test('It should be a function', () => {
        expect(checkForName(null)).toBe(false);
    });
});