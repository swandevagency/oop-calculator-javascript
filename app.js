class Calculator {
  constructor() {
    this.inputNumArr = [];
    this.number1 = 0;
    this.number2 = 0;
    this.result = 0;
    this.operator = '';
    this.operator2 = '';
  }

  cal(opr) {
    if (this.operator === '') this.operator = opr;
    if (
      equation.innerText &&
      !equation.innerText.includes(this.operator) &&
      output.innerText
    ) {
      this.operator2 = opr;
      this.equal();
    } else {
      this.operator2 = opr;
      this.operator = this.operator2;
      this.operator2 = '';
      this.inputNumArr = [];
      this.outputEquation(this.number1);
    }
  }

  equal() {
    console.log('true');
    this.number2 = parseFloat(output.innerText);
    this.number1 = parseFloat(equation.innerText);
    switch (this.operator) {
      case '/':
        this.result = this.number1 / this.number2;
        equation.innerText = `${this.number1} ${this.operator} ${this.number2} = ${this.result}`;
        break;
      case '*':
        this.result = this.number1 * this.number2;
        equation.innerText = `${this.number1} ${this.operator} ${this.number2} = ${this.result}`;
        break;
      case '-':
        this.result = this.number1 - this.number2;
        equation.innerText = `${this.number1} ${this.operator} ${this.number2} = ${this.result}`;
        break;
      case '+':
        this.result = this.number1 + this.number2;
        equation.innerText = `${this.number1} ${this.operator} ${this.number2} = ${this.result}`;
        break;
    }
    this.inputNumArr = [];
    this.number1 = this.result;
    this.operator = this.operator2;
    this.outputResult('');
  }

  allClear() {
    this.inputNumArr = [];
    this.number1 = 0;
    this.number2 = 0;
    this.result = 0;
    this.operator = '';
    this.operator2 = '';
    output.innerText = '';
    equation.innerText = '';
  }
  
  delSingleChar() {
    let delLast = this.number1.toString();
    this.inputNumArr = [];
    delLast = delLast.substring(0, delLast.length - 1);
    this.number1 = delLast;
    this.inputNumArr[0] = this.number1;
    this.outputResult(this.number1);
  }

  inputNum(num) {
    if(num === '.' && this.inputNumArr.includes('.')) return;
    if (equation.innerText && equation.innerText.includes(this.operator)) {
      this.operator = this.operator2;
      this.operator2 = '';
      equation.innerText = '';
      equation.innerText = this.result;
      this.number1 = this.result;
    } else if (this.result > 0) {
      equation.innerText = this.result;
      this.number1 = parseFloat(output.innerText);
    }
    this.inputNumArr.push(num);
    this.number1 = this.convertArrayToNum();
    this.outputResult(this.number1);
  }

  convertArrayToNum() {
    let number = '';
    number += this.inputNumArr;
    number = number.replaceAll(',', '');
    return number;
  }

  outputResult(num) {
    output.innerText = num;
  }

  outputEquation(num) {
    output.innerText = '';
    equation.innerText = num;
  }
}

const test = new Calculator();

const nums = document.querySelectorAll('#nums button');
nums.forEach((num) => {
  num.addEventListener('click', (num) => {
    test.inputNum(num.target.innerText);
  });
});

const division = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

division.addEventListener('click', (opr) => {
  test.cal(opr.target.innerText);
});
multiply.addEventListener('click', (opr) => {
  test.cal(opr.target.innerText);
});
minus.addEventListener('click', (opr) => {
  test.cal(opr.target.innerText);
});
plus.addEventListener('click', (opr) => {
  test.cal(opr.target.innerText);
});

const equalTo = document.getElementById('equal');
const aC = document.getElementById('all-clear');
const del = document.getElementById('del');

equalTo.addEventListener('click', eql => {
  test.equal(eql.target.innerText)
});
aC.addEventListener('click', AC => {
  test.allClear(AC.target.innerText)
});
del.addEventListener('click', de => {
  test.delSingleChar(de.target.innerText)
});