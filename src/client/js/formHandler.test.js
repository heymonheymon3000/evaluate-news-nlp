import { handleSubmit, fetchTextApi } from './formHandler';

describe('Test, the function "handleSubmit()" should exist' , () => {
    test('It should return true', () => {
        expect(handleSubmit).toBeDefined();
    });
});

describe('Test, the function "handleSubmit()" should be a function', () => {
    test('It should be a function', () => {
        expect (typeof handleSubmit).toBe('function');
    });
});

describe('Test, the function "fetchTextApi()" should exist', () => {
    test('It should return true', () => {
        expect(fetchTextApi).toBeDefined();
    });
});