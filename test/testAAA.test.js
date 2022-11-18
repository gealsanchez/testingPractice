import Calculator from '../test/calculator.js';
import reverseString from '../test/testAAA.js';
import stringLength from '../test/stringLength.js';
import capitalize from '../test/capitalize.js';

describe('Reverse', () => {
test('Takes a string and reverse it', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
});

  describe('Add', () => {
    it('return the sum of two numbers', () => {
      const calculator = new Calculator();
      expect(calculator.add(3, 4)).toBe(7);
      expect(calculator.add(2, 7)).toBe(9);
      expect(calculator.add(7,8)).toBe(15);
    });
  });
  
  describe('Subtract', () => {
    it('return the subtract of two numbers', () => {
      const calculator = new Calculator();
      expect(calculator.subtract(7, 4)).toBe(3);
      expect(calculator.subtract(9, 8)).toBe(1);
      expect(calculator.subtract(10, 8)).toBe(2);
    });
  });
  
  describe('Multiply', () => {
    it('return the multiply of two numbers', () => {
      const calculator = new Calculator();
      expect(calculator.multiply(3, 4)).toBe(12);
      expect(calculator.multiply(6, 7)).toBe(42);
      expect(calculator.multiply(9, 8)).toBe(72);
    });
  });
  
  describe('Divide', () => {
    it('return the divide of two numbers', () => {
      const calculator = new Calculator();
      expect(calculator.divide(8, 1)).toBe(8);
      expect(calculator.divide(18, 9)).toBe(2);
      expect(calculator.divide(20, 4)).toBe(5);
    });
  });

  describe('Capitalize', () => {
    it('return the first letter of the string in uppercase', () => {
      expect(capitalize('hi')).toBe('Hi');
    });
  });

  describe('StringLength', () => {
    it('return the length of string', () => {
      expect(stringLength('hello')).toBe(5);
    });
  });