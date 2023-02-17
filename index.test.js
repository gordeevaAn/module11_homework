const getMonth = require("./index.js");

describe('test function getMonth', () => {
	it('return the name month,number outside the range from 1 to 12,entered not a number', () => {
		expect(getMonth(3)).toBe("Март");
        expect(getMonth(13)).toBe('Число вне диапазона от 1 до 12');
        expect(getMonth(-1)).toBe('Число вне диапазона от 1 до 12');
        expect( getMonth('g')).toBe('Введено не число');
  })
});