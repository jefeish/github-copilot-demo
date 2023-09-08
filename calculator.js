// A calculator class to compute two numbers

class Calculator {
  constructor() {
    this.lastResult = 0;
  }

  add(a, b) {
    this.lastResult = a + b;
    return this.lastResult;
  }

  subtract(a, b) {
    this.lastResult = a - b;
    return this.lastResult;
  }

  multiply(a, b) {
    this.lastResult = a * b;
    return this.lastResult;
  }

  divide(a, b) {
    this.lastResult = a / b;
    return this.lastResult;
  }
}

module.exports = new Calculator();
