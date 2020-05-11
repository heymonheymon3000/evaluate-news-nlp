import { handleSubmit, fetchTextApi, fetchTextApiTest } from './formHandler';
import regeneratorRuntime from "regenerator-runtime";

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

describe('Test, the function "fetchTextApiTest()" should return positive', () => {
    test('It should return true', async() => {
        const data = await fetchTextApiTest('Lebron is great');
        expect(data.text).toEqual('positive');
    });
});