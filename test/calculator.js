class Calculator {
  constructor() {
    this.number1 = 0;
    this.number2 = 0;
  }

  add(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
    const sum = number1 + number2;
    return sum;
  }

  subtract(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
    const sub = number1 - number2;
    return sub;
  }

  multiply(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
    const mul = number1 * number2;
    return mul;
  }

  divide(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
    const div = number1 / number2;
    return div;
  }
}

export default Calculator;